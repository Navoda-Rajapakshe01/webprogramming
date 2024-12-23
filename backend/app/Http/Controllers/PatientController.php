<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming data
        $validated = $request->validate([
            'health_care_number' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'sex' => 'required|string',
            'dob' => 'required|date',
            'phone_number' => 'required|string',
            'email' => 'required|email',
            'address' => 'required|string',
            'marital_status' => 'nullable|string',
            'is_under_18' => 'nullable|boolean',
            'emergency_contact' => 'nullable|array',
            'family_doctor' => 'nullable|array',
            'preferred_pharmacy' => 'nullable|array',
            'health_history' => 'nullable|string',
            'medications' => 'nullable|string',
            'insurance' => 'nullable|array'
        ]);

        // Store the data in the database
        $patient = Patient::create($validated);

        // Return a success message or redirect
        return response()->json([
            'message' => 'Patient registered successfully',
            'patient' => $patient
        ]);
    }
}
