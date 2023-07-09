<?php

if (!function_exists('getModelFromController')) {
    function getModelFromController(string $controllerClassName): string
    {
        return 'App\\Models\\' . str_replace('Controller', '', explode('\\', $controllerClassName)[array_key_last(explode('\\', $controllerClassName))]);
    }
}