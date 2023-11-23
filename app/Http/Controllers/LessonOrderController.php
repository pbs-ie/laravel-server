<?php

namespace App\Http\Controllers;

use App\Models\LessonOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\OrderChanged;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Gate;


class LessonOrderController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $isAdmin = Gate::check('create:orders');
        if ($isAdmin) {
            return Inertia::render('LessonOrder/Index', [
                'lessonOrders' => LessonOrder::all()
            ]);
        } else {
            $userLesson = $this->getCurrentUserOrder();
            if (!isset($userLesson)) {
                return Inertia::render('LessonOrder/NotFound', [], 404);
            }
            return redirect()->route('orders.show', $userLesson->id);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('LessonOrder/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'schoolName' => ['required', 'max:50', 'min:3'],
            'schoolType' => ['nullable', 'string', 'max:50', 'min:3'],
            'email' => ['required', 'unique:lesson_orders', 'email'],
            'level0Order' => ['numeric', 'max_digits:3'],
            'level1Order' => ['numeric', 'max_digits:3'],
            'level2Order' => ['numeric', 'max_digits:3'],
            'level3Order' => ['numeric', 'max_digits:3'],
            'level4Order' => ['numeric', 'max_digits:3'],
            'tlpOrder' => ['numeric', 'max_digits:3']
        ]);

        LessonOrder::create($validated);

        // Redirect the user
        return redirect('/orders')->with('success', "New order for school created successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LessonOrder  $lessonOrder
     * @return \Illuminate\Http\Response
     */
    public function show(LessonOrder $lessonOrder)
    {
        $isAdmin = Gate::check('create:orders');
        if ($this->isCurrentOrderUser($lessonOrder)) {
            return abort(404);
        }

        return Inertia::render('LessonOrder/Show', [
            'isAdmin' => $isAdmin,
            'lessonOrder' => $lessonOrder
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LessonOrder  $lessonOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(LessonOrder $lessonOrder)
    {
        $isAdmin = Gate::check('create:orders');
        if ($this->isCurrentOrderUser($lessonOrder)) {
            return abort(404);
        }

        return Inertia::render('LessonOrder/Edit', [
            'lessonOrder' => $lessonOrder,
            'isAdmin' => $isAdmin
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LessonOrder  $lessonOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LessonOrder $lessonOrder)
    {
        $isAdmin = Gate::check('create:orders');
        if ($this->isCurrentOrderUser($lessonOrder)) {
            return abort(404);
        }

        if ($isAdmin) {
            $validated = $request->validate([
                'schoolName' => ['required', 'max:50', 'min:3'],
                'schoolType' => ['nullable', 'string', 'max:50', 'min:3'],
                'email' => ['required', 'email'],
                'level0Order' => ['numeric'],
                'level1Order' => ['numeric'],
                'level2Order' => ['numeric'],
                'level3Order' => ['numeric'],
                'level4Order' => ['numeric'],
                'tlpOrder' => ['numeric']
            ]);
        } else {
            $validated = $request->validate([
                'level0Order' => ['numeric', 'max_digits:3'],
                'level1Order' => ['numeric', 'max_digits:3'],
                'level2Order' => ['numeric', 'max_digits:3'],
                'level3Order' => ['numeric', 'max_digits:3'],
                'level4Order' => ['numeric', 'max_digits:3'],
                'tlpOrder' => ['numeric', 'max_digits:3']
            ]);
        }

        $orderNumbersChanged = false;
        $oldOrder = $lessonOrder->replicate();

        $lessonOrder->fill($validated);

        if ($lessonOrder->isDirty(['level0Order', 'level1Order', 'level2Order', 'level3Order', 'level4Order', 'tlpOrder'])) {
            $orderNumbersChanged = true;
        }

        $lessonOrder->save();
        $lessonOrder->refresh();

        if ($orderNumbersChanged) {
            // Send mail to admin
            Mail::to(config('mail.admin.address'))->send(new OrderChanged($oldOrder, $lessonOrder));
        }

        // Redirect the user
        return redirect('/orders')->with('success', "Updated order for school successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LessonOrder  $lessonOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(LessonOrder $lessonOrder)
    {
        $lessonOrder->delete();
        return redirect('/orders')->with('success', "School entry deleted successfully");
    }


    function getCurrentUserOrder()
    {
        return LessonOrder::where('email', auth()->user()->email)->get()?->first();
    }

    function isCurrentOrderUser(LessonOrder $lessonOrder) {
        $isAdmin = Gate::check('create:orders');
        return !$isAdmin && ($this->getCurrentUserOrder()?->id !== $lessonOrder?->id);
    }
}
