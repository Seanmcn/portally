<?php

namespace App\Rules;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class ValidUserInvite implements Rule
{
    /**
     * Check if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return DB::table('user_invites')->where('code', $value)->whereNull('user_id')->exists();
    }

    /**
     * @return string
     */
    public function message()
    {
        return 'A valid user invite is required!';
    }
}
