<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\MatchOldPassword;
use Hash;
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
     * Update user info
     *
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateInfo(Request $request)
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
            'name' => $request->post('name'),
            'email' => $request->post('email'),
            'date_of_birth' => $request->post('date_of_birth'),
        ]);

        $user->save();

        return new Response(null, Response::HTTP_OK);
    }

    /**
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updatePassword(Request $request) {
        $this->validate($request, [
            'password' => ['required', new MatchOldPassword],
            'new_password' => 'required',
            'confirm_password' => 'same:new_password',
        ]);

        User::find(
            Auth()->user()->getAuthIdentifier()
        )->update([
            'password' => Hash::make($request->post('new_password'))
        ]);

    }
}
