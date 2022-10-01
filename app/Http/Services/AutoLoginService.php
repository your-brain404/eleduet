<?php

namespace App\Http\Services;

use App\User;
use Illuminate\Support\Facades\Auth;

class AutoLoginService
{
    public static function autoLogin($userId)
    {
        $user = User::find($userId);
        if (!$user)  return null;

        Auth::login($user, true);

        return Auth::user();
    }
}
