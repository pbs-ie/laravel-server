<?php

namespace App\Http\Controllers;

use App\Models\MapEmailAreacode;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    private function getFmStudentMap() {
        return [
            'fm_student_id' => 'StudentID',
            'first_name' => 'C Name',
            'last_name' => 'S Name',
            'area_code' => 'Area',
            'grade' => 'Grade',
        ];
    }

    /**
     * Create a map between user email and area code
     * 
     * @param string $email
     * @param string $areaCode
     */
    private function mapEmailAreaCode(string $email, string $areaCode) {
        $mapEntry = MapEmailAreacode::firstOrCreate(
            ['email'=> $email],
            ['area_code'=>$areaCode]
        );
    } 


    /**
     * Convert Filemaker object to Laravel database friendly array
     * 
     * @param array $studentList
     * @return array
     */
    public function sanitizeStudentList(array $studentList) {
        $studentCollection = collect($studentList);
        $mapValues = $this->getFmStudentMap();
        
        $mappedStudents = $studentCollection->map(function ($student) use ($mapValues) {
            $fieldData = $student->fieldData;
            return array(
                'fm_student_id' => trim($fieldData->{$mapValues['fm_student_id']}),
                'first_name' => trim($fieldData->{$mapValues['first_name']}),
                'last_name' => trim($fieldData->{$mapValues['last_name']}),
                'area_code' => trim($fieldData->{$mapValues['area_code']}),
                'grade' => trim($fieldData->{$mapValues['grade']})
            );
        })->toArray();
        return $mappedStudents;
    }

    /**
     * Update students in local database
     * 
     * @param array $studentList
     * @return void 
     */
    public function updateStudents(array $studentList) {
        $studentCollection = collect($studentList);
        $studentCollection->each(function ($student) {
            $studentModel = Student::firstWhere('fm_student_id', $student['fm_student_id']);
            if (!$studentModel) {
                $studentModel = new Student();
            }
            $studentModel->fm_student_id = $student['fm_student_id'];
            $studentModel->first_name = $student['first_name'];
            $studentModel->last_name = $student['last_name'];
            $studentModel->area_code = $student['area_code'];
            $studentModel->grade = $student['grade'];
            $studentModel->save();
        });
    }

    /**
     * Get list of students for the current user
     * 
     * @return \Illuminate\Http\Response
     */
    public function getAllStudents()
    {
        $studentList = [];
        if(auth()->check()) {
            $currentUserEmail = 'woodns2001@gmail.com'; //TODO:change to //auth()->user()->email
            $studentListFm = (new FilemakerController())->getStudents($currentUserEmail);

            $studentList = $this->sanitizeStudentList($studentListFm);

            $this->mapEmailAreaCode($currentUserEmail, $studentList[0]['area_code']);

            $this->updateStudents($studentList);
        }
        return back();
    }

    /**
     * Add students to the classroom
     * 
     * @return \Illuminate\Http\Response
     */
    public function addStudents()
    {
        
    }
}
