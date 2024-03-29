<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="Daniel Lewicki">
    <title>{{ $meta_title }}</title>
    <meta name="description" content="{{ $meta_description }}">
    <link async rel="icon" href="/storage/media/{{ $settings->favicon }}" type="image/png">
    <style async>
        {{ $critical_css }}
    </style>
    @foreach ($preloads as $preload)
        <link rel="preload" as="{{ $preload['as'] }}" href="{{ $preload['href'] }}" />
    @endforeach

</head>

<body>
    <div id="app">
        @yield('content')
    </div>

    <script src="{{ mix('js/manifest.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/vue.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/fontfaceobserver.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/axios.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/vuex.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/vue-router.js', 'dist') }}" async defer></script>
    <script src="{{ mix('js/app.js', 'dist') }}" async defer></script>

    <script>
        window.global = {
            config: {
                settings: @json(@$settings),
                contact: @json(@$contact),
                snackbarAlerts: @json(@$snackbar_alerts),
                subpages: @json(@$subpages),
                currentSubpage: @json(@$current_subpage),
                languages: @json(@$languages),
                currentLanguage: @json(@$current_language),
            },
            translations: @json(@$translations),
            auth: @json(@$auth),
            cms: {
                homePage: {
                    slider: @json(@$slider),
                    homeServices: @json(@$home_services),
                    homeServicesDesc: @json(@$home_services_desc),
                    homeSolarSystemDesc: @json(@$home_solar_system_desc),
                    executionProcess: @json(@$execution_process),
                    executionProcessDesc: @json(@$execution_process_desc),
                    attributes: @json(@$attributes),
                    attributesDesc: @json(@$attributes_desc),
                    homeCallUs: @json(@$home_call_us),
                    opinions: @json(@$opinions),
                    opinionsDesc: @json(@$opinions_desc),
                    about: @json(@$about)
                },
                servicesPage: {
                    services: @json(@$services),
                    serviceCategories: @json(@$service_categories),
                    servicesServiceCategories: @json(@$services_service_categories),
                    servicesCallUs: @json(@$services_call_us),
                    servicesPageDesc: @json(@$services_page_desc),
                    servicesAttributes: @json(@$services_attributes)
                },
                servicePage: {
                    service: @json(@$service)
                },
                realizationsPage: {
                    realizations: @json(@$realizations)
                },
                contactPage: {
                    contactLinks: @json(@$contact_links)
                },
                aboutPage: {
                    aboutPage: @json(@$about_page),
                    aboutPageGallery: @json(@$about_page_gallery),
                }
            }
        }
    </script>



</body>

</html>
