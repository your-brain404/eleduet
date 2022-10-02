<?php

namespace App\Http\Helpers;

use App\About;
use App\Attributes;
use App\AttributesDesc;
use App\Contact;
use App\ContactLinks;
use App\Settings;
use App\Subpages;
use App\ExecutionProcess;
use App\ExecutionProcessDesc;
use App\HomeCallUs;
use App\HomeServicesDesc;
use App\HomeSolarSystemDesc;
use App\Http\Services\AutoLoginService;
use App\Http\Services\TokenDecoder;
use App\Languages;
use App\Opinions;
use App\OpinionsDesc;
use App\ServiceCategories;
use App\Services;
use App\ServicesAttributes;
use App\ServicesCallUs;
use App\ServicesPageDesc;
use App\ServicesServiceCategories;
use App\Slider;
use App\SnackbarAlerts;
use App\Translations;
use stdClass;

class HomeHelper
{

	public static function getCurrentSubpage($subpages): ?object
	{
		foreach ($subpages as $i => $subpage) {
			if ($subpage->page == '/' . LangHelper::getRouteSegment(1)) return $subpage;
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
		if (LangHelper::getRouteSegment(1) != 'admin-panel') {
			//
		}
		if (LangHelper::getRouteSegment(1) == '') {
			$data['slider'] = Slider::all() ?? [];
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
		}
		if (LangHelper::getRouteSegment(1) == 'uslugi') {
			$data['services'] = Services::all() ?? [];
			$data['service_categories'] = ServiceCategories::all() ?? [];
			$data['services_service_categories'] = ServicesServiceCategories::all() ?? [];
			$data['services_call_us'] = ServicesCallUs::find(1) ?? new stdClass;
			$data['services_page_desc'] = ServicesPageDesc::find(1) ?? new stdClass;
			$data['services_attributes'] = ServicesAttributes::all() ?? [];
		}

		if (LangHelper::getRouteSegment(1) == 'realizacje') {
			$data['realizations'] = GalleryHelper::getPhotos('realizations', 1) ?? [];
		}
		if (LangHelper::getRouteSegment(1) == 'kontakt') {
			$data['contact_links'] = ContactLinks::all() ?? [];
		}


		$data['meta_title'] = $data['meta_title'] . ' - ' . $data['settings']->company;
		$data['meta_description'] = strip_tags($data['meta_description']);

		return $data;
	}
}
