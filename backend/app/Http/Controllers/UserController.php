<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }


    /**
     * @param Request $request
     * @return mixed
     */
    public function get(Request $request)
    {
        return $request->user();
    }

    /**
     * Update User
     *
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|max:255',
            'date_of_birth' => 'required',
        ]);

        /** @var User $user */
        $userId = Auth::id();
        $user = User::findOrFail($userId);

        $user->fill([
            'name' => $request->name,
            'email' => $request->email,
            'date_of_birth' => $request->date_of_birth,
        ]);

        $user->save();

        return new Response(null, Response::HTTP_OK);
    }
}
