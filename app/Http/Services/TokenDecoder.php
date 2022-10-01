<?php

namespace App\Http\Services;

class TokenDecoder
{

	public static function decode(?string $bearerToken): ?object
	{
		if (!$bearerToken) return null;
		$tokenParts = explode(".", $bearerToken);
		if (count($tokenParts) != 3) {
			throw new \Exception("Invalid Bearer Token!");
		}
		$tokenPayload = base64_decode($tokenParts[1]);
		$jwtPayload = json_decode($tokenPayload);
		if ($jwtPayload == null) throw new \Exception("Invalid Bearer Token!");

		return $jwtPayload;
	}
}
