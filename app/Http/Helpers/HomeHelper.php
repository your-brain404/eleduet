<?php

namespace App\Http\Helpers;

use App\Models\About;
use App\Models\AboutPage;
use App\Models\Attributes;
use App\Models\AttributesDesc;
use App\Models\Contact;
use App\Models\ContactLinks;
use App\Models\Settings;
use App\Models\Subpages;
use App\Models\ExecutionProcess;
use App\Models\ExecutionProcessDesc;
use App\Models\HomeCallUs;
use App\Models\HomeServicesDesc;
use App\Models\HomeSolarSystemDesc;
use App\Http\Services\AutoLoginService;
use App\Http\Services\TokenDecoder;
use App\Models\Languages;
use App\Models\Opinions;
use App\Models\OpinionsDesc;
use App\Models\ServiceCategories;
use App\Models\Services;
use App\Models\ServicesAttributes;
use App\Models\ServicesCallUs;
use App\Models\ServicesPageDesc;
use App\Models\ServicesServiceCategories;
use App\Models\Slider;
use App\Models\SnackbarAlerts;
use App\Models\Translations;
use stdClass;

class HomeHelper
{

	public static function getCurrentSubpage($subpages): ?object
	{
		foreach ($subpages as $i => $subpage) {
			if ($subpage->page == '/' . LangHelper::getRouteSegment(1))
				return $subpage;
		}
		return null;
	}

	public static function loadData(): array
	{
		$data['settings'] = Settings::find(1);
		$data['contact'] = Contact::find(1);
		$data['snackbar_alerts'] = SnackbarAlerts::find(1);
		$data['subpages'] = Subpages::where('active', 1)->get();
		$data['meta_title'] = 'Panel administracyjny - ' . $data['settings']->company;
		$data['meta_description'] = 'Panel administracyjny';
		$authUserId = @TokenDecoder::decode(@$_COOKIE['token'])->sub;
		$data['auth'] = AutoLoginService::autoLogin($authUserId);
		$data['lang'] = $_COOKIE['lang'] ?? config('app.locale');
		$data['languages'] = Languages::all();
		$data['current_language'] = array_values(array_filter($data['languages']->toArray(), function ($lang) use ($data) {
			return $lang['prefix'] == $data['lang'];
		}))[0] ?? $data['languages'][0];
		$data['translations'] = Translations::all();
		$data['current_subpage'] = self::getCurrentSubpage($data['subpages']);
		$data['critical_css'] = file_get_contents($_SERVER['ROOT'] . '/dist/css/header.css');
		$data['preloads'] = [];

		if (LangHelper::getRouteSegment(1) != 'admin-panel') {
			//
		}
		if (LangHelper::getRouteSegment(1) == '') {
			$data['slider'] = Slider::where('active', 1)->get()->toArray() ?? [];
			if (count($data['slider']) > 0) {
				$data['preloads'][] = ['as' => 'image', 'href' => '/storage/media/' . $data['slider'][0]['photo'] . '.webp'];
				list($date, $photo_name) = explode('/', $data['slider'][0]['photo']);
				$new_mobile_path = "/storage/media/$date/width_576_$photo_name.webp";

				$data['preloads'][] = ['href' => $new_mobile_path, 'as' => 'image'];
			}
			$data['home_services'] = Services::where('home_page', 1)->orderBy('id', 'ASC')->get() ?? [];
			$data['home_services_desc'] = HomeServicesDesc::find(1) ?? new stdClass;
			$data['home_solar_system_desc'] = HomeSolarSystemDesc::find(1) ?? new stdClass;
			$data['execution_process'] = ExecutionProcess::all() ?? [];
			$data['execution_process_desc'] = ExecutionProcessDesc::find(1) ?? new stdClass;
			$data['attributes'] = Attributes::all() ?? [];
			$data['attributes_desc'] = AttributesDesc::find(1) ?? new stdClass;
			$data['home_call_us'] = HomeCallUs::find(1) ?? new stdClass;
			$opinions = Opinions::all();
			$data['opinions'] = $opinions->count() > 0 ? $opinions : null;
			$data['opinions_desc'] = OpinionsDesc::find(1) ?? new stdClass;
			$data['about'] = About::find(1) ?? new stdClass;

			$data['critical_css'] .= file_get_contents($_SERVER['ROOT'] . '/dist/css/critical-home.css');
		}
		if (LangHelper::getRouteSegment(1) == 'uslugi') {
			$data['services'] = Services::all() ?? [];
			$data['service_categories'] = ServiceCategories::all() ?? [];
			$data['services_service_categories'] = ServicesServiceCategories::all() ?? [];
			$data['services_call_us'] = ServicesCallUs::find(1) ?? new stdClass;
			$data['services_page_desc'] = ServicesPageDesc::find(1) ?? new stdClass;
			$data['services_attributes'] = ServicesAttributes::all() ?? [];
		}
		if (LangHelper::getRouteSegment(1) == 'uslugi' && LangHelper::getRouteSegment(3)) {
			$data['service'] = Services::find(LangHelper::getRouteSegment(3)) ?? new stdClass;
		}

		if (LangHelper::getRouteSegment(1) == 'realizacje') {
			$data['realizations'] = GalleryHelper::getPhotos('realizations', 1) ?? [];
		}
		if (LangHelper::getRouteSegment(1) == 'o-nas') {
			$data['about_page'] = AboutPage::find(1);
			$data['about_page_gallery'] = GalleryHelper::getPhotos('about_page', $data['about_page']->id);
		}
		if (LangHelper::getRouteSegment(1) == 'kontakt') {
			$data['contact_links'] = ContactLinks::all() ?? [];
		}


		$data['meta_title'] = $data['meta_title'] . ' - ' . $data['settings']->company;
		$data['meta_description'] = strip_tags($data['meta_description']);
		$data['admin_route'] = LangHelper::getRouteSegment(1) === 'admin-panel';

		return $data;
	}
}