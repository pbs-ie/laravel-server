<?php

namespace App\Models;

use App\Http\Requests\StoreAssemblyVideoRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App\Services\VideoService;

class AssemblyVideo extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'title',
        'month',
        'series',
        'imageLink',
        'videoContent'
    ];

    protected $casts = [
        'videoContent' => 'array'
    ];

    public const columnsAsCamel = [
        'id',
        'title',
        'month',
        'series',
        'image_link as imageLink',
        'video_content as videoContent'
    ];

    protected static function booted(): void
    {
        self::deleting(function (AssemblyVideo $assemblyVideo) {
            // Deleting thumbnail image file
            if (Storage::disk('images')->exists($assemblyVideo->imageLink)) {
                Storage::disk('images')->delete($assemblyVideo->imageLink);
            }
        });
    }

    public function parseVideoLinks(StoreAssemblyVideoRequest $request)
    {
        $videoCollection = collect($request->safe(['videoContent'])['videoContent']);
        $videoContent = $videoCollection->map(function ($item) {
            $item['externalUrl'] = (new VideoService)->parseExternalUrl($item['externalUrl']);
            return $item;
        });

        return $videoContent;
    }

}
