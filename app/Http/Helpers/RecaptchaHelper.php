<?php

namespace App\Http\Helpers;


class RecaptchaHelper
{

	public static function validate($response)
	{

		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$recaptcha = strpos($_SERVER['HTTP_HOST'], 'localhost') !== false ? '6Lf3c-AUAAAAAHoNHijgo_mKp3cMdB7jisUGPoBa' : '6LeyGAsiAAAAAB_6niAa7HasXgTa5f1sV_W9dhK-';
		$data = ['secret' => $recaptcha, 'response' => $response, 'remoteip' => $_SERVER['REMOTE_ADDR']];

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		$result = curl_exec($ch);

		curl_close($ch);


		return json_decode($result, true)['success'];
	}
}