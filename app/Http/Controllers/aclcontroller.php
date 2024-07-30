<?php

namespace App\Http\Controllers;

use App\Models\RegistrationPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class aclcontroller extends Controller
{
    public function render_registration_form()
    {
        return Inertia::render('Form/Index');
    }

    public function confirm(Request $request, $id)
    {
        $payment = RegistrationPayment::findOrFail($id);
        $payment->confirmed = true;
        $payment->save();

        return response()->json($payment);
    }

    public function registerExaminationInfo(Request $request)
    {
        if (!is_null($request->id)) {
            $regPay = RegistrationPayment::where('id', $request->id)->update([
                'first_name' => $request->first_name,
                'middle_name' => $request->middle_name,
                'other_name' => $request->other_name,
                'sex' => $request->sex,
                'dob' => $request->dob,
                'father_name' => $request->father_name,
                'father_occupation' => $request->father_occupation,
                'mother_name' => $request->mother_name,
                'mother_occupation' => $request->mother_occupation,
                'state_of_origin' => $request->state_of_origin,
                'lga_of_origin' => $request->lga_of_origin,
                'current_address' => $request->current_address,
                'parent_whatapp_no' => $request->parent_whatapp_no,
                'candidate_phone_no' => $request->candidate_phone_no,
                'class_tick' => $request->class_tick,
                'subject_1' => $request->subject_1,
                'subject_2' => $request->subject_2,
                'subject_3' => $request->subject_3,
                'subject_4' => $request->subject_4,
                'subject_5' => $request->subject_5,
                'subject_6' => $request->subject_6,
                'subject_7' => $request->subject_7,
                'subject_8' => $request->subject_8,
                'subject_9' => $request->subject_9,
                'time_section' => $request->time_section,
                'expected_amount_plan_desc' => $request->expected_amount_plan_desc,
                // 'expected_amount_plan_desc' => $request->expected_amount_plan_desc,
                'trans_refrence_id' => $request->trans_refrence_id,

            ]);
            $updated = RegistrationPayment::where('id', $request->id)->first();
            if ($regPay) {
                return response()->json(['message' => 'Candidate Registration Updated', 'status2' => true, 'data' => $updated], 200);
            }
        } else {

            $request->validate([
                'first_name' => 'required',
                'middle_name' => 'required',
                'other_name' => 'required',
                'sex' => 'required',
                'dob' => 'required',
                'father_name' => 'required',
                'father_occupation' => 'required',
                'mother_name' => 'required',
                'mother_occupation' => 'required',
                'state_of_origin' => 'required',
                'lga_of_origin' => 'required',
                'current_address' => 'required',
                'parent_whatapp_no' => 'required',
                'candidate_phone_no' => 'required',
                'class_tick' => 'required',
                'subject_1' => 'required',
                'subject_2' => 'required',
                'subject_3' => 'required',
                'subject_4' => 'required',
                'subject_5' => 'required',
                'subject_6' => 'required',
                'subject_7' => 'required',
                'subject_8' => 'required',
                'subject_9' => 'required',
                'expected_amount_plan_desc' => 'required',
                'time_section' => 'required',
                'trans_refrence_id' => 'required|unique:registration_payments',
                'attestation' => 'required',
            ]);
            $payment = RegistrationPayment::create($request->all());
            return response()->json(['message' => 'Registration Successful', 'status' => true, 'data' => $payment], 201);
        }
    }


    public function Index(Request $request, $access_key)
    {

        if ($access_key === '$123B') {
            return Inertia::render('Manager/Index');
        } else {
            abort(401, 'Unauthorized');
        }
    }

    public function getRegisteredCandidate(Request $request)
    {
        $filters = $request->filters;

        $payment = RegistrationPayment::orderBy('created_at', 'desc');

        if (!empty($filters['paid_for'])) {
            $payment->where('class_tick', $filters['paid_for']);
        }
        if (!empty($filters['search'])) {
            $payment->where('first_name', 'LIKE', '%' . $filters['search'] . '%')
                ->orWhere('middle_name', 'LIKE', '%' . $filters['search'] . '%')
                ->orWhere('other_name', 'LIKE', '%' . $filters['search'] . '%')
                ->orWhere('dob', 'LIKE', '%' . $filters['search'] . '%')
                ->orWhere('sex', 'LIKE', '%' . $filters['search'] . '%');
        }
        if (isset($filters['status'])) {
            $payment->where('confirmed', $filters['status']);
        }

        $payment = $payment->paginate(10);

        return response()->json(['message' => 'Fetch all Record', 'data' => $payment], 200);
    }

    public function approveTransaction(Request $request)
    {
        $payment = RegistrationPayment::where('id', $request->id)->update([
            'confirmed' => true
        ]);
        return response()->json(['message' => 'Payment Approved', 'status' => true], 200);
    }

    public function approvedforprint(Request $request)
    {
        $aprove_status = RegistrationPayment::where('id', $request->id)->first();
        if ($aprove_status) {
            $status =  $aprove_status->confirmed;
            return response()->json(['status' => $status], 200);
        }
    }

    public function getAnalytic(Request $request)
    {

        $barchart_data_approved = DB::select("SELECT
                                    COUNT(IF(rp.sex='male', 1, null)) as male,
                                    COUNT(IF(rp.sex='female', 1, null)) as female
                                    FROM registration_payments rp
                                    WHERE rp.confirmed  = '1'  
                                ");

        $barchart_data_pending = DB::select("SELECT
                                                COUNT(IF(rp.sex='male', 1, null)) as male,
                                                COUNT(IF(rp.sex='female', 1, null)) as female
                                                FROM registration_payments rp
                                                WHERE rp.confirmed  = '0'
                                            ");

        $barchart_data = DB::select("SELECT 
                                            COUNT(IF(rp.sex='male', 1, null)) as male,
                                            COUNT(IF(rp.sex='female', 1, null)) as female
                                            FROM registration_payments rp  GROUP BY rp.sex
                                            ");


        $results = DB::select("SELECT
                                    rp.class_tick,
                                    COUNT(*) as count,
                                    CONCAT('#', SUBSTR(MD5(RAND()), 1, 6)) as bg_color
                                FROM registration_payments rp
                                GROUP BY rp.class_tick");

        // Initialize arrays for labels, values, and colors
        $labels = [];
        $values = [];
        $colors = [];

        // Prepare the data in a structured way
        foreach ($results as $result) {
            $labels[] = $result->class_tick;
            $values[] = $result->count;
            $colors[] = $result->bg_color;
        }

        // Prepare the data for the pie chart
        $piechart_data = [
            'LABEL' => $labels,
            'VALUES' => $values,
            'BACKGROUND_COLORS' => $colors,
        ];

        $card_data_approved_candidate = DB::select("SELECT
                                        COUNT(IF(rp.confirmed ='1', 1, null)) as card_data_approved_candidate
                                        FROM registration_payments rp
            ");

        $card_data_pending_candidate = DB::select("SELECT
                                                        COUNT(IF(rp.confirmed ='0', 1, null)) as card_data_pending_candidate
                                                        FROM registration_payments rp
                                                ");
        return response()->json([
            'barchart_data_approved' => $barchart_data_approved, 'barchart_data_pending' => $barchart_data_pending,
            'card_data_pending_candidate' => $card_data_pending_candidate, 'card_data_approved_candidate' => $card_data_approved_candidate,
            'piechart_data' => $piechart_data,
            'barchart_data' => $barchart_data,
            'total_candidate' => count(RegistrationPayment::all())
        ], 200);
    }
}
