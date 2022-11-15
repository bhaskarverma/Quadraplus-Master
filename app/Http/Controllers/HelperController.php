<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Lead;

class HelperController extends Controller
{

    private function createLead($row)
    {
        $date = $row[0];
        $assoc_id = $row[2];
        $course_id = $row[4];
        $name = $row[5];
        $email = $row[6];
        $phone = $row[7];
        $source = $row[8];

        if($name == null || $name == "") {
            $name = "N/A";
        }

        $lead = new Lead;
        $lead->name = $name;
        $lead->contact_no = $phone;
        $lead->email = $email;
        //$lead->company = $request->company;
        $lead->course_id = $course_id;
        $lead->assigned_to = $assoc_id;
        $lead->status = 'Assigned To Associate';
        $lead->type = "low";
        $lead->source = $source;

        $lead->save();

        $lead->created_at = $date;
        $lead->updated_at = $date;

        $lead->save();

        return $lead->id;
    }

    public function uploadBulkData()
    {
        $file = fopen("sheet_1.csv","r");

        $arr = [];

        fgetcsv($file);

        while(!feof($file))
        {
            $data = fgetcsv($file);
            $id = $this->createLead($data);
            $arr[$id] = $data;
        }

        return $arr;
    }
}
