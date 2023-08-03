-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2023 at 09:07 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eleduet`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `about`
--

CREATE TABLE `about` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `button_name_1` text DEFAULT NULL,
  `button_link_1` text DEFAULT NULL,
  `button_name_2` text DEFAULT NULL,
  `button_link_2` text DEFAULT NULL,
  `active` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `photo_background_size` text DEFAULT NULL,
  `button_download_1` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `short_description`, `photo`, `photo_alt`, `button_name`, `phone`, `created_at`, `updated_at`, `subtitle`, `button_name_1`, `button_link_1`, `button_name_2`, `button_link_2`, `active`, `photo_background_position`, `photo_background_size`, `button_download_1`, `meta_description`, `page`, `photo_sizes`) VALUES
(1, 'EleDuet oferuje<br>{oprawę muzyczną każdej uroczystości}', '<p>Marzycie o przepięknej oprawie muzycznej jednego z najważniejszych dni w Waszym życiu? Uważacie, że nie istnieje nic bardziej romantycznego niż muzyka na żywo wykonana z pasją i wrażliwością? Chcielibyście usłyszeć solo skrzypce lub wiolonczelę, duet, trio czy kwartet smyczkowy w tym wyjątkowym momencie? Spełnimy wszystkie Wasze muzyczne pragnienia!</p>\n<div>\n<div dir=\"auto\">Jesteśmy siostrami wychowanymi w muzycznej rodzinie. Od 15 lat kształcimy się pod okiem najlepszych pedagog&oacute;w w Polsce i za granicą. Jako laureatki konkurs&oacute;w muzycznych, nie boimy się żadnego wyzwania!</div>\n</div>\n<p>Na Państwa życzenie zapewnimy oprawę muzyczną: 🎻 ślubu kościelnego i cywilnego, symbolicznego i plenerowego, 🎻 obiadu weselnego, życzeń oraz pierwszego tańca 🎻 zaręczyn, 🎻 komunii, 🎻 jubileusz&oacute;w, 🎻 chrzcin, 🎻 kolacji, 🎻 event&oacute;w, 🎻 spotkań biznesowych.</p>\n<div>&nbsp;</div>\n<div>Najczęściej występujemy na terenie wojew&oacute;dztw: dolnośląskiego, małopolskiego, opolskiego i śląskiego. W razie jakichkolwiek pytań - zapraszamy do kontaktu telefonicznego lub mailowego. 🎻🎻</div>', '2022-10-09/slub2_1665334182.png', NULL, 'Zadzwoń teraz', '+48 513 583 131', NULL, '2022-10-09 14:31:18', NULL, 'POBIERZ WIZYTÓWKĘ', 'https://eleduet.pl/storage/media/2022-10-02/1_1664700597.png', NULL, NULL, '0', NULL, '80%', '1', NULL, NULL, '{\"width\":1080,\"height\":1183}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `about_page`
--

CREATE TABLE `about_page` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_page`
--

INSERT INTO `about_page` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'O nas', NULL, '<p>Cześć!</p>\n<p>EleDuet to zesp&oacute;ł rodzinny - jesteśmy siostrami. 👯&zwj;♀️ Obie studiujemy na prestiżowych uczelniach - w Kr&oacute;lewskim Konserwatorium w Antwerpii w Belgii i w Akademii Muzycznej w Krakowie.</p>\n<p>Polecamy się do wsp&oacute;łpracy w zakresie oprawy muzycznej ślub&oacute;w, wydarzeń rodzinnych, event&oacute;w firmowych i wszelkiego rodzaju uroczystości.</p>\n<p>Zapraszamy do odwiedzenia r&oacute;wnież naszej strony na Facebooku: EleDuet - skrzypce i wiolonczela na ślub oraz na Instagramie: eleduet.muzyka. 🎻🎻</p>', NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-22 05:24:08');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `attributes`
--

CREATE TABLE `attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `button_name_1` text DEFAULT NULL,
  `button_link_1` text DEFAULT NULL,
  `button_name_2` text DEFAULT NULL,
  `button_link_2` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `photo_background_size` text DEFAULT NULL,
  `button_download_1` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `home_page` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL,
  `service_categories` text DEFAULT NULL,
  `height` text DEFAULT NULL,
  `height_md` text DEFAULT NULL,
  `height_lg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `button_name_1`, `button_link_1`, `button_name_2`, `button_link_2`, `photo_background_position`, `photo_background_size`, `button_download_1`, `meta_description`, `page`, `photo_sizes`, `phone`, `home_page`, `icon_svg`, `service_categories`, `height`, `height_md`, `height_lg`) VALUES
(4, 0, NULL, 'Jagoda & Klaudiusz ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/jagoda_leśniak_1665333252.jpg', NULL, '2022-09-22 14:11:10', '2022-10-09 16:34:31', 'POBIERZ WIZYTÓWKĘ', 'https://eleduet.pl/storage/media/2022-10-02/1_1664700597.png', NULL, NULL, '30% 70%', '80%', '1', NULL, NULL, '{\"width\":\"1902\",\"height\":\"1080\"}', NULL, '1', NULL, '[3,4]', '435', '375', '375'),
(5, 0, NULL, 'Patrycja & Grzegorz ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/patrycja_migdalska_1665333316.jpg', NULL, '2022-09-22 14:13:23', '2022-10-09 16:35:25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 0, NULL, 'Mariola & Piotr ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/mariola_pabis_1665333350.jpg', NULL, '2022-09-22 14:14:06', '2022-10-09 16:36:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 0, NULL, 'Agnieszka & Dorian ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/agnieszka_zagrobska_1665333390.jpg', NULL, '2022-09-22 18:22:06', '2022-10-09 16:36:53', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 0, NULL, 'Patrycja & Dawid ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/patrycja_malesa_1665333435.jpg', NULL, '2022-09-22 18:32:17', '2022-10-09 16:37:22', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 0, NULL, 'Alicja & Bartek ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/alicja_waligóra_1665333539.jpg', NULL, '2022-09-22 18:35:05', '2022-10-09 16:39:05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 0, NULL, 'Anna & Christian ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/anna_kauza_1665333575.jpg', NULL, '2022-09-22 18:36:38', '2022-10-09 16:39:40', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 0, NULL, 'Kasia & Tomek ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/kasia_wojcik_1665333630.jpg', NULL, '2022-09-22 18:37:21', '2022-10-09 16:40:35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 0, NULL, 'Kinga & Bartek ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/kinga_pastuszko_1665333659.jpg', NULL, '2022-09-22 18:37:52', '2022-10-09 16:41:04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 0, NULL, 'Janina & Stefan ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/janina_1665333687.jpg', NULL, '2022-09-22 18:38:48', '2022-10-09 16:41:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 0, NULL, 'Patrycja & Grzegorz ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/patrycja_musik_1665333721.jpg', NULL, '2022-09-22 18:39:57', '2022-10-09 16:42:15', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 0, NULL, 'Mariola & Piotr ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/mariolaa_1665333766.jpg', NULL, '2022-09-22 18:41:28', '2022-10-09 16:42:58', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 0, NULL, 'Maria & Karol ❤️', NULL, NULL, NULL, NULL, NULL, '2022-10-09/maria_rrr_1665333804.jpg', NULL, '2022-09-22 18:58:49', '2022-10-09 16:43:28', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `attributes_desc`
--

CREATE TABLE `attributes_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attributes_desc`
--

INSERT INTO `attributes_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'Wasze opinie 🤩', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-22 16:10:05');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `email_1` text DEFAULT NULL,
  `email_2` text DEFAULT NULL,
  `phone_1` text DEFAULT NULL,
  `phone_2` text DEFAULT NULL,
  `zip_code` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `fb` text DEFAULT NULL,
  `ig` text DEFAULT NULL,
  `yt` text DEFAULT NULL,
  `tw` text DEFAULT NULL,
  `map` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `title`, `email_1`, `email_2`, `phone_1`, `phone_2`, `zip_code`, `city`, `address`, `name`, `fb`, `ig`, `yt`, `tw`, `map`, `created_at`, `updated_at`) VALUES
(1, NULL, 'dany97971@gmail.com', NULL, '+48 723780812', NULL, '59-220', 'Legnica', 'woj. dolnośląskie', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-23 05:37:47');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `contact_links`
--

CREATE TABLE `contact_links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `icon_svg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_links`
--

INSERT INTO `contact_links` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `icon_svg`) VALUES
(1, 0, NULL, 'Zadzwoń do nas:<br>{+48 723 780 812}', NULL, NULL, NULL, NULL, 'tel:+48 723 780 812', '2022-09-23/phone-call-free-icon-font_1663913628.svg', NULL, '2021-10-28 19:03:43', '2022-09-23 06:14:00', NULL),
(3, 0, NULL, 'E-mail:<br>{biuro@eleduet.pl}', NULL, NULL, NULL, NULL, 'mailto:biuro@eleduet.pl', '2022-09-23/envelope-open-text-free-icon-font_1663913559.svg', NULL, '2021-10-28 19:05:36', '2022-09-23 06:14:52', NULL),
(4, 0, NULL, 'Instagram:<br>{eleduet.muzyka}', NULL, NULL, NULL, NULL, 'https://www.instagram.com/eleduet.muzyka/', '2022-09-23/instagram-free-icon-font_1663913735.svg', NULL, '2022-09-21 23:46:59', '2022-09-23 06:15:46', NULL),
(5, 0, NULL, 'Facebook:<br>{EleDuet - skrzypce i wiolonczela na ślub}', NULL, NULL, NULL, NULL, 'https://www.facebook.com/pages/category/Musician-band/EleDuet-skrzypce-i-wiolonczela-na-%C5%9Blub-112773144376818/', '2022-09-23/facebook-free-icon-font_1663913786.svg', NULL, '2022-09-22 00:13:11', '2022-09-23 06:16:38', NULL),
(6, 0, NULL, 'Youtube:<br>{EleDuet}', NULL, NULL, NULL, NULL, 'https://www.youtube.com/channel/UCC3LxynDxjVI49pbqrfH5PA/videos', '2022-09-23/youtube-free-icon-font_1663913842.svg', NULL, '2022-09-22 00:14:56', '2022-09-23 06:17:38', NULL),
(7, 0, NULL, 'Nasza wizytówka', NULL, NULL, NULL, NULL, 'https://eleduet.pl/storage/media/2022-10-02/1_1664700597.png', '2022-10-02/1_1664700597.png', NULL, '2022-09-23 01:38:54', '2022-09-23 01:38:54', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `default_crud_tables`
--

CREATE TABLE `default_crud_tables` (
  `id` int(11) NOT NULL,
  `json` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `default_crud_tables`
--

INSERT INTO `default_crud_tables` (`id`, `json`, `updated_at`) VALUES
(1, '[\"subpages\",\"services\",\"slider\",\"users\",\"mails\",\"attachments\",\"gallery\",\"media\",\"settings\",\"contact\",\"layout_elements\",\"snackbar_alerts\",\"validation_rules\",\"realizations\",\"about\",\"service_categories\",\"services_service_categories\",\"home_services_desc\",\"home_solar_system_desc\",\"executionProcess\",\"execution_process\",\"execution_process_desc\",\"attributes\",\"attributes_desc\",\"home_call_us\",\"opinions\",\"opinionsDesc\",\"opinions_desc\",\"services_page_desc\",\"services_attributes\",\"services_call_us\",\"solar_system\",\"solar_system_call_us\",\"contact_links\",\"about_page\"]', '2022-09-20 18:22:06');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `execution_process`
--

CREATE TABLE `execution_process` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `execution_process`
--

INSERT INTO `execution_process` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'e-mail z zapytaniem o dostępność terminu', NULL, NULL, NULL, NULL, NULL, '2022-09-23/comment-question-free-icon-font_1663913404.svg', NULL, NULL, '2022-09-23 06:10:15'),
(2, 0, NULL, 'przesłanie przez nas oferty', NULL, NULL, NULL, NULL, NULL, '2022-09-23/envelope-open-text-free-icon-font_1663913559.svg', NULL, NULL, '2022-09-23 06:12:50'),
(3, 0, NULL, 'rezerwacja terminu', NULL, NULL, NULL, NULL, NULL, '2022-09-23/calendar-check-free-icon-font_1663913480.svg', NULL, NULL, '2022-09-23 06:11:33'),
(4, 0, NULL, 'najpiękniejsza oprawa muzyczna Waszej uroczystości', NULL, NULL, NULL, NULL, NULL, '2022-09-23/music-alt-free-icon-font_1663913256.svg', NULL, NULL, '2022-09-23 06:08:20');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `execution_process_desc`
--

CREATE TABLE `execution_process_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `execution_process_desc`
--

INSERT INTO `execution_process_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'Wystarczy chwila, aby skontaktować się z nami w sprawie pięknej oprawy muzycznej!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-22 16:08:35');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `table_name` text DEFAULT NULL,
  `photo_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `path` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `table_name`, `photo_id`, `created_at`, `updated_at`, `item_id`, `path`, `photo_alt`) VALUES
(17, NULL, 'services', NULL, '2022-09-20 00:28:24', '2022-09-20 00:28:24', 1, '2022-09-20/IMG_9665_1663633661.jpg', NULL),
(27, NULL, 'services', NULL, '2022-09-21 23:12:49', '2022-09-21 23:12:49', 28, '2022-09-22/c9b1a632-39b7-4eab-a7e6-c3a8d7c2b0bc_1663801168.jpg', NULL),
(30, NULL, 'about_page', NULL, '2022-09-24 18:06:19', '2022-09-24 18:06:19', 1, '2022-09-24/tempImageDwAs2J_1663633681_1664042761.png', NULL),
(31, NULL, 'realizations', NULL, '2022-10-25 18:52:20', '2022-10-25 18:52:20', 1, '2022-10-09/slub2_1665334182.png', NULL),
(32, NULL, 'realizations', NULL, '2022-10-25 18:52:20', '2022-10-25 18:52:20', 1, '2022-10-09/maria_rrr_1665333804.jpg', NULL),
(33, NULL, 'realizations', NULL, '2022-10-25 18:52:20', '2022-10-25 18:52:20', 1, '2022-10-09/mariolaa_1665333766.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `home_call_us`
--

CREATE TABLE `home_call_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `min_height` text DEFAULT NULL,
  `min_height_md` text DEFAULT NULL,
  `min_height_lg` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_call_us`
--

INSERT INTO `home_call_us` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `phone`, `photo_sizes`, `min_height`, `min_height_md`, `min_height_lg`, `photo_background_position`) VALUES
(1, 0, NULL, 'Masz pytania? Zadzwoń!', NULL, NULL, NULL, 'Zadzwoń teraz', NULL, '2022-10-09/slub_1665332671.jpg', NULL, NULL, '2022-10-09 12:49:54', '+48 513 583 131', '{\"width\":\"1440\",\"height\":\"1031\"}', '345', '280', '180', '50% 38%');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `home_services_desc`
--

CREATE TABLE `home_services_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_services_desc`
--

INSERT INTO `home_services_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `photo`, `description`, `short_description`, `photo_alt`, `created_at`, `updated_at`, `button_name`, `link`) VALUES
(1, 0, NULL, 'Pełna oferta', NULL, NULL, NULL, NULL, NULL, '2021-10-27 19:14:47', '2022-09-22 16:15:21', 'PEŁNA OFERTA', '/uslugi');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `home_solar_system_desc`
--

CREATE TABLE `home_solar_system_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `height` text DEFAULT NULL,
  `height_md` text DEFAULT NULL,
  `height_lg` text DEFAULT NULL,
  `button_name_1` text DEFAULT NULL,
  `button_link_1` text DEFAULT NULL,
  `button_name_2` text DEFAULT NULL,
  `button_link_2` text DEFAULT NULL,
  `photo_background_size` text DEFAULT NULL,
  `button_download_1` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `home_page` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL,
  `service_categories` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_solar_system_desc`
--

INSERT INTO `home_solar_system_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `photo`, `description`, `short_description`, `photo_alt`, `created_at`, `updated_at`, `button_name`, `link`, `photo_background_position`, `photo_sizes`, `height`, `height_md`, `height_lg`, `button_name_1`, `button_link_1`, `button_name_2`, `button_link_2`, `photo_background_size`, `button_download_1`, `meta_description`, `page`, `phone`, `home_page`, `icon_svg`, `service_categories`) VALUES
(1, 0, NULL, 'Wyśij e-mail z zapytaniem o termin, a my prześlemy ofertę!', NULL, '2022-10-09/w_kosciele_1665333164.jpg', NULL, NULL, NULL, NULL, '2022-10-09 16:32:58', 'Wyślij e-mail', '/kontakt', '30% 70%', '{\"width\":\"1902\",\"height\":\"1080\"}', '435', '375', '375', 'POBIERZ WIZYTÓWKĘ', 'https://eleduet.pl/storage/media/2022-10-02/1_1664700597.png', NULL, NULL, '80%', '1', NULL, NULL, NULL, '1', NULL, '[3,4]');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `languages`
--

CREATE TABLE `languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `prefix` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `active`, `order_number`, `title`, `prefix`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 'Polski', 'pl', NULL, NULL, '2022-09-15 12:45:27', '2022-09-15 12:48:38'),
(2, 1, 1, 'Angielski', 'en', NULL, NULL, '2022-09-15 12:49:06', '2022-09-15 12:49:06');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mails`
--

CREATE TABLE `mails` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `rodo1` int(11) DEFAULT NULL,
  `rodo2` int(11) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `answer` int(11) DEFAULT NULL,
  `answer_message` text DEFAULT NULL,
  `response` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mails`
--

INSERT INTO `mails` (`id`, `name`, `subject`, `message`, `created_at`, `updated_at`, `rodo1`, `rodo2`, `email`, `answer`, `answer_message`, `response`) VALUES
(1, 'Daniel Lewicki', 'Temat', 'Wiadomść', '2022-09-18 09:07:28', '2022-09-18 09:07:28', 1, 1, 'test@test.com', NULL, NULL, NULL),
(5, 'Dunia', 'test halo', 'część test', '2022-09-22 22:22:54', '2022-09-22 22:22:54', 1, 1, 'ddzm97@test.pl', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` text NOT NULL,
  `name` text NOT NULL,
  `path` text NOT NULL,
  `size` int(11) NOT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `type`, `name`, `path`, `size`, `width`, `height`, `created_at`, `updated_at`) VALUES
(42, 'image/jpeg', 'IMG_9665', '2022-09-20/IMG_9665_1663633661.jpg', 163375, 768, 1024, '2022-09-20 00:27:41', '2022-10-02 16:06:14'),
(52, 'image/jpeg', 'db8f17b8-ac9a-4e48-ade6-d738fd7fe711', '2022-09-22/db8f17b8-ac9a-4e48-ade6-d738fd7fe711_1663803755.jpg', 24273, 343, 395, '2022-09-21 23:42:35', '2022-10-02 16:06:14'),
(61, 'image/jpeg', '0465c3eb-b537-4f98-8351-2a7172b39159', '2022-09-22/0465c3eb-b537-4f98-8351-2a7172b39159_1663860958.JPG', 275214, NULL, NULL, '2022-09-22 15:35:59', '2022-09-22 15:35:59'),
(63, 'image/jpeg', '687C37D5-FFD9-489C-88FA-F5EDFDE74B6A', '2022-09-22/687C37D5-FFD9-489C-88FA-F5EDFDE74B6A_1663860970.JPG', 330899, 1125, 2000, '2022-09-22 15:36:10', '2022-10-02 16:06:14'),
(65, 'image/jpeg', 'b6d086b8-3d9f-474d-9273-cb4b161b818d', '2022-09-22/b6d086b8-3d9f-474d-9273-cb4b161b818d_1663860981.JPG', 326809, NULL, NULL, '2022-09-22 15:36:21', '2022-09-22 15:36:21'),
(69, 'image/jpeg', 'IMG_6066', '2022-09-22/IMG_6066_1663861016.JPG', 332584, 1535, 1535, '2022-09-22 15:36:56', '2022-10-02 16:06:14'),
(71, 'image/jpeg', 'IMG_6232', '2022-09-22/IMG_6232_1663861031.JPG', 127579, NULL, NULL, '2022-09-22 15:37:11', '2022-09-22 15:37:11'),
(95, 'image/jpeg', '203642308_112910714363061_8210847035836956477_n', '2022-09-22/203642308_112910714363061_8210847035836956477_n_1663881581.jpeg', 136041, 736, 1600, '2022-09-22 21:19:41', '2022-10-02 16:06:14'),
(96, 'image/jpeg', '4CBDDC7B-27EB-47A0-B830-17A2469F4A41', '2022-09-23/4CBDDC7B-27EB-47A0-B830-17A2469F4A41_1663886009.jpg', 103870, 1015, 1108, '2022-09-22 22:33:29', '2022-10-02 16:06:14'),
(98, 'image/png', 'logo bez tła', '2022-09-23/logo_bez_tła_1663911292.png', 84145, 479, 522, '2022-09-23 05:34:52', '2022-10-02 16:06:14'),
(104, 'image/svg+xml', 'music-alt-free-icon-font', '2022-09-23/music-alt-free-icon-font_1663913256.svg', 703, NULL, NULL, '2022-09-23 06:07:36', '2022-09-23 06:07:36'),
(105, 'image/svg+xml', 'comment-question-free-icon-font', '2022-09-23/comment-question-free-icon-font_1663913404.svg', 1243, NULL, NULL, '2022-09-23 06:10:04', '2022-09-23 06:10:04'),
(106, 'image/svg+xml', 'calendar-check-free-icon-font', '2022-09-23/calendar-check-free-icon-font_1663913480.svg', 936, NULL, NULL, '2022-09-23 06:11:20', '2022-09-23 06:11:20'),
(107, 'image/svg+xml', 'envelope-open-text-free-icon-font', '2022-09-23/envelope-open-text-free-icon-font_1663913559.svg', 1050, NULL, NULL, '2022-09-23 06:12:39', '2022-09-23 06:12:39'),
(108, 'image/svg+xml', 'phone-call-free-icon-font', '2022-09-23/phone-call-free-icon-font_1663913628.svg', 1206, NULL, NULL, '2022-09-23 06:13:48', '2022-09-23 06:13:48'),
(109, 'image/svg+xml', 'instagram-free-icon-font', '2022-09-23/instagram-free-icon-font_1663913735.svg', 1858, NULL, NULL, '2022-09-23 06:15:35', '2022-09-23 06:15:35'),
(110, 'image/svg+xml', 'facebook-free-icon-font', '2022-09-23/facebook-free-icon-font_1663913786.svg', 692, NULL, NULL, '2022-09-23 06:16:26', '2022-09-23 06:16:26'),
(111, 'image/svg+xml', 'youtube-free-icon-font', '2022-09-23/youtube-free-icon-font_1663913842.svg', 814, NULL, NULL, '2022-09-23 06:17:23', '2022-09-23 06:17:23'),
(120, 'image/png', 'tempImageDwAs2J_1663633681', '2022-09-24/tempImageDwAs2J_1663633681_1664042761.png', 13974682, 1440, 1080, '2022-09-24 18:06:02', '2022-10-02 16:06:14'),
(122, 'image/jpeg', 'IMG_8679_1663632166', '2022-09-24/IMG_8679_1663632166_1664044798.jpg', 2711233, 1440, 1080, '2022-09-24 18:39:59', '2022-10-02 16:06:14'),
(123, 'image/jpeg', 'IMG_9226_1663633662', '2022-09-24/IMG_9226_1663633662_1664044827.jpg', 809657, 1080, 1445, '2022-09-24 18:40:27', '2022-10-02 16:06:14'),
(124, 'image/jpeg', 'IMG_9439_1663633666', '2022-09-24/IMG_9439_1663633666_1664044849.jpg', 3603962, 1080, 1440, '2022-09-24 18:40:50', '2022-10-02 16:06:14'),
(125, 'image/png', 'tempImageU6p4cG_1663633680', '2022-09-24/tempImageU6p4cG_1663633680_1664044880.png', 13786428, 1440, 1080, '2022-09-24 18:41:21', '2022-10-02 16:06:14'),
(126, 'image/jpeg', 'c9b1a632-39b7-4eab-a7e6-c3a8d7c2b0bc_1663801168', '2022-09-24/c9b1a632-39b7-4eab-a7e6-c3a8d7c2b0bc_1663801168_1664044923.jpg', 454715, 1513, 1200, '2022-09-24 18:42:03', '2022-10-02 16:06:14'),
(127, 'image/jpeg', '055ca373-7dd4-4bac-a0a3-86ba2c37fcc5_1663804000', '2022-09-24/055ca373-7dd4-4bac-a0a3-86ba2c37fcc5_1663804000_1664044952.jpg', 290262, 1600, 1200, '2022-09-24 18:42:32', '2022-10-02 16:06:14'),
(128, 'image/jpeg', '7CD2E652-3D3D-42CF-AB4A-DDAE7D492084_1663860946', '2022-09-24/7CD2E652-3D3D-42CF-AB4A-DDAE7D492084_1663860946_1664045009.jpg', 438524, 1080, 1920, '2022-09-24 18:43:29', '2022-10-02 16:06:14'),
(129, 'image/jpeg', '9D4F383A-4FCA-4F55-8749-FCC1F09796B8_1663860953', '2022-09-24/9D4F383A-4FCA-4F55-8749-FCC1F09796B8_1663860953_1664045032.jpg', 322075, 1080, 1807, '2022-09-24 18:43:52', '2022-10-02 16:06:14'),
(131, 'image/jpeg', 'FB5D4EEC-FEED-466E-8AA8-A9363AF72EB8_1663860998', '2022-09-24/FB5D4EEC-FEED-466E-8AA8-A9363AF72EB8_1663860998_1664045132.jpg', 2652222, 1080, 1350, '2022-09-24 18:45:33', '2022-10-02 16:06:14'),
(132, 'image/png', 'tempImagenCdzeX_1663861047', '2022-09-24/tempImagenCdzeX_1663861047_1664045176.png', 12324004, 1080, 1440, '2022-09-24 18:46:17', '2022-10-02 16:06:14'),
(133, 'image/png', 'tempImage86zOkt_1663861084', '2022-09-24/tempImage86zOkt_1663861084_1664045212.png', 14076888, 1440, 1080, '2022-09-24 18:46:53', '2022-10-02 16:06:14'),
(134, 'image/png', 'tempImagekjGCtG_1663861098', '2022-09-24/tempImagekjGCtG_1663861098_1664045240.png', 7939153, 1080, 1813, '2022-09-24 18:47:21', '2022-10-02 16:06:14'),
(135, 'image/png', 'tempImageEhOtfo_1663861233', '2022-09-24/tempImageEhOtfo_1663861233_1664045268.png', 10427220, 1080, 1440, '2022-09-24 18:47:49', '2022-10-02 16:06:14'),
(136, 'image/png', 'tempImagecWJIPb_1663861253', '2022-09-24/tempImagecWJIPb_1663861253_1664045296.png', 11640566, 1080, 1440, '2022-09-24 18:48:17', '2022-10-02 16:06:14'),
(137, 'image/png', 'tempImagejcnvU4_1663861283', '2022-09-24/tempImagejcnvU4_1663861283_1664045326.png', 13492382, 1440, 1080, '2022-09-24 18:48:47', '2022-10-02 16:06:14'),
(139, 'image/png', 'tempImage6xWSYD_1663862297', '2022-09-24/tempImage6xWSYD_1663862297_1664045420.png', 15688497, 1440, 1080, '2022-09-24 18:50:21', '2022-10-02 16:06:14'),
(141, 'image/png', 'tempImageEhOtfo_1663861233', '2022-09-28/tempImageEhOtfo_1663861233_1664394052.png', 86978, 1080, 1440, '2022-09-28 19:40:53', '2022-10-02 16:06:14'),
(142, 'image/png', 'clef-favicon_1664635163', '2022-10-01/clef-favicon_1664635163_1664636943.png', 26991, 463, 539, '2022-10-01 15:09:03', '2022-10-01 15:09:03'),
(145, 'image/png', 'clef', '2022-10-02/clef_1664726851.png', 70593, 702, 1920, '2022-10-02 16:07:31', '2022-10-02 16:07:31'),
(147, 'image/jpeg', 'dziewczyny', '2022-10-09/dziewczyny_1665330664.jpg', 143268, 1440, 1080, '2022-10-09 15:51:04', '2022-10-09 15:51:04'),
(148, 'image/jpeg', 'slub', '2022-10-09/slub_1665332671.jpg', 405138, 1440, 1031, '2022-10-09 16:24:31', '2022-10-09 16:24:31'),
(149, 'image/png', 'wizytowka', '2022-10-09/wizytowka_1665332752.png', 49692, 1050, 600, '2022-10-09 16:25:52', '2022-10-09 16:25:52'),
(150, 'image/png', 'dunia_i_elena', '2022-10-09/dunia_i_elena_1665333061.png', 48010, 1080, 1183, '2022-10-09 16:31:02', '2022-10-09 16:31:02'),
(151, 'image/png', 'dunia', '2022-10-09/dunia_1665333098.png', 127424, 1080, 1440, '2022-10-09 16:31:39', '2022-10-09 16:31:39'),
(152, 'image/jpeg', 'w kosciele', '2022-10-09/w_kosciele_1665333164.jpg', 95632, 1902, 1080, '2022-10-09 16:32:44', '2022-10-09 16:32:44'),
(153, 'image/jpeg', 'jagoda leśniak', '2022-10-09/jagoda_leśniak_1665333252.jpg', 37584, 1125, 553, '2022-10-09 16:34:13', '2022-10-09 16:34:13'),
(154, 'image/jpeg', 'patrycja migdalska', '2022-10-09/patrycja_migdalska_1665333316.jpg', 36954, 1125, 602, '2022-10-09 16:35:16', '2022-10-09 16:35:16'),
(155, 'image/jpeg', 'mariola pabis', '2022-10-09/mariola_pabis_1665333350.jpg', 81936, 1125, 803, '2022-10-09 16:35:50', '2022-10-09 16:35:50'),
(156, 'image/jpeg', 'agnieszka zagrobska', '2022-10-09/agnieszka_zagrobska_1665333390.jpg', 106108, 1125, 1115, '2022-10-09 16:36:30', '2022-10-09 16:36:30'),
(157, 'image/jpeg', 'patrycja malesa', '2022-10-09/patrycja_malesa_1665333435.jpg', 35772, 1125, 496, '2022-10-09 16:37:15', '2022-10-09 16:37:15'),
(158, 'image/jpeg', 'alicja waligóra', '2022-10-09/alicja_waligóra_1665333539.jpg', 105168, 1125, 996, '2022-10-09 16:39:00', '2022-10-09 16:39:00'),
(159, 'image/jpeg', 'anna kauza', '2022-10-09/anna_kauza_1665333575.jpg', 33522, 1125, 366, '2022-10-09 16:39:35', '2022-10-09 16:39:35'),
(160, 'image/jpeg', 'kasia wojcik', '2022-10-09/kasia_wojcik_1665333630.jpg', 36690, 1125, 599, '2022-10-09 16:40:30', '2022-10-09 16:40:30'),
(161, 'image/jpeg', 'kinga pastuszko', '2022-10-09/kinga_pastuszko_1665333659.jpg', 50908, 1125, 548, '2022-10-09 16:40:59', '2022-10-09 16:40:59'),
(162, 'image/jpeg', 'janina', '2022-10-09/janina_1665333687.jpg', 17502, 1125, 490, '2022-10-09 16:41:27', '2022-10-09 16:41:27'),
(163, 'image/jpeg', 'patrycja musik', '2022-10-09/patrycja_musik_1665333721.jpg', 51816, 1125, 874, '2022-10-09 16:42:01', '2022-10-09 16:42:01'),
(164, 'image/jpeg', 'mariolaa', '2022-10-09/mariolaa_1665333766.jpg', 43468, 1125, 739, '2022-10-09 16:42:46', '2022-10-09 16:42:46'),
(165, 'image/jpeg', 'maria rrr', '2022-10-09/maria_rrr_1665333804.jpg', 21678, 1125, 498, '2022-10-09 16:43:24', '2022-10-09 16:43:24'),
(166, 'image/png', 'slub2', '2022-10-09/slub2_1665334182.png', 305244, 1440, 1080, '2022-10-09 16:49:43', '2022-10-09 16:49:43'),
(167, 'image/webp', 'logo', '2022-10-09/logo_1665334354.webp', 27370, 479, 522, '2022-10-09 16:52:34', '2022-10-09 16:52:34'),
(169, 'image/svg+xml', 'logo', '2022-10-09/logo_1665334625.svg', 7588, NULL, NULL, '2022-10-09 16:57:05', '2022-10-09 16:57:05'),
(170, 'image/jpeg', 'maria rrr', '2022-10-31/maria_rrr_1667232066.jpg', 21890, 1125, 498, '2022-10-31 16:01:06', '2022-10-31 16:01:06'),
(171, 'application/pdf', 'M4U 11-2022 NOTA - LEWICKI', '2022-12-15/M4U_11-2022_NOTA_-_LEWICKI_1671128108.pdf', 538862, NULL, NULL, '2022-12-15 18:15:08', '2022-12-15 18:15:08');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2020_05_23_104037_create_contact_table', 1),
(10, '2020_05_23_104119_create_gallery_table', 1),
(11, '2020_05_23_104552_create_settings_table', 1),
(12, '2020_05_23_104731_create_subpages_table', 1),
(13, '2020_07_08_154907_create_media_table', 1),
(14, '2021_09_26_152721_create_snackbar_alerts_table', 1),
(15, '2021_09_26_164037_create_validation_rules_table', 1),
(17, '2021_10_16_103701_create_slider_table', 2),
(18, '2021_10_16_112506_add_active_to_slider', 3),
(19, '2021_10_24_144330_create_about_table', 4),
(20, '2021_10_24_153151_create_services_table', 5),
(21, '2021_10_24_155233_create_service_categories_table', 6);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('09350b17b89cab0b1b2d101f6fccd1c99b1ab2e5fc8efb270972d07c3612790ca1557275a520c90e', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:40:12', '2022-11-01 21:40:12', '2023-11-01 22:40:12'),
('0b4126d2c844d0257c4edf903e793ab384b92b32f94388c9d81fd4cec9ce618047bc6bf67f4672be', 1, 1, 'authToken', '[]', 0, '2021-10-16 07:29:58', '2021-10-16 07:29:58', '2022-10-16 09:29:58'),
('1074168950fdc53033a5421995b938b12d8c15ca47446b2baffbd71226586184023571ebf8e6dceb', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:38:57', '2022-11-01 21:38:57', '2023-11-01 22:38:57'),
('27ee7400447052f2c74a1e44c69db119ccc288ebc4bacd4ec9286529183b7522fa80b88fd39649b1', 1, 5, 'authToken', '[]', 0, '2022-11-11 14:09:33', '2022-11-11 14:09:33', '2023-11-11 15:09:33'),
('2ee5698b0898b1c718d370f301eb345cb06fe31e948cb9a96f40d99f69bc47ee0540520fec801b63', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:31:19', '2022-10-25 19:31:19', '2023-10-25 21:31:19'),
('3a1d1c950e8f110ea4998228319e81f3c08e9726f5bbebe0ae7faee8b9b28a1bcff8ccd46877c50b', 2, 1, 'authToken', '[]', 0, '2021-11-02 20:49:39', '2021-11-02 20:49:39', '2022-11-02 21:49:39'),
('3e6c5fd84a833ae1af0fd35793059878f81eb60f631f8f5d063cadc7bad85cc06b141f0cb73e5c97', 1, 5, 'authToken', '[]', 0, '2022-11-11 14:09:33', '2022-11-11 14:09:33', '2023-11-11 15:09:33'),
('3fcc163a025c9b4c3af22a3a18ef8d775d7fcb95f2f8c2c341f34afe597754bb4130f563e72a9e8b', 1, 5, 'authToken', '[]', 0, '2023-01-06 19:49:05', '2023-01-06 19:49:05', '2024-01-06 20:49:05'),
('415a8afb97ee66c2f2e36b7b444b1aa64a367e9def31bc86aafdfe461be31725765cd4386c46fd86', 1, 5, 'authToken', '[]', 0, '2022-09-29 18:19:06', '2022-09-29 18:19:06', '2023-09-29 20:19:06'),
('469ea90253504bad4a6d5408c0f39843ca04f990bee68fb78b6963bc8c28a23d97f205db74cb1d08', 2, 1, 'authToken', '[]', 0, '2021-12-02 20:17:08', '2021-12-02 20:17:08', '2022-12-02 21:17:08'),
('4b4abd82eb930447160c7dab7bb72b0f3ed3ffdfe69736b7b04102fbd11fd3861a9a5dd3a092cb7b', 1, 1, 'authToken', '[]', 0, '2021-10-24 11:25:27', '2021-10-24 11:25:27', '2022-10-24 13:25:27'),
('59d68c07836ea5144431601e3146d9f04aa369a4d639e8e7b2372f1927c2466477e15a932617ed29', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:40:12', '2022-11-01 21:40:12', '2023-11-01 22:40:12'),
('606b9d952821264da9fb1fafb74d7d6dbcb5db88330edacd5148c66302feee976d00b9d9c4ac57dd', 1, 5, 'authToken', '[]', 0, '2023-07-20 09:03:10', '2023-07-20 09:03:10', '2024-07-20 11:03:10'),
('61dcf0981ef1e22cbbea1f9bb0afd706fbd8bb22c57b5f55520b8af7fa1af81146ab9b34b3b0a52c', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:31:18', '2022-10-25 19:31:18', '2023-10-25 21:31:18'),
('6241085787d73b6a34fa8a0fabfc58ca7ea3e601d41203e22bf775ab6fc1e36eff2652a476a7e396', 2, 1, 'authToken', '[]', 0, '2021-10-28 20:59:48', '2021-10-28 20:59:48', '2022-10-28 22:59:48'),
('6255444f06a558a57c6c0eb9a7f1397b0d85d0276a94cf0eb81b7aa9bab5e99a365add982a561862', 2, 5, 'authToken', '[]', 0, '2022-09-18 20:44:23', '2022-09-18 20:44:23', '2023-09-18 22:44:23'),
('6555bdac9164b41535c7bf3a5693ce82f51cd6ffa5ea21d0399a53660999159052d58f8aa49bcb98', 1, 5, 'authToken', '[]', 0, '2022-11-11 14:08:56', '2022-11-11 14:08:56', '2023-11-11 15:08:56'),
('67712769b8068c605f3c9e21c4eebd6c248e123a602a0caf1319ebc6811f729936db23142337d57c', 2, 1, 'authToken', '[]', 0, '2022-04-28 11:50:38', '2022-04-28 11:50:38', '2023-04-28 13:50:38'),
('678ce3507b877798bff39588c44031cb6e76856587d84cb72bc07616b6420f076491161672e94dd5', 1, 3, 'authToken', '[]', 0, '2022-09-18 08:28:41', '2022-09-18 08:28:41', '2023-09-18 10:28:41'),
('73ce188ac46b19ad1c935e2a7bb16f5ce018a6a9ae4d2433819ebf62d60cdaa13db17d737f54bf42', 1, 5, 'authToken', '[]', 0, '2022-12-16 22:47:10', '2022-12-16 22:47:10', '2023-12-16 23:47:10'),
('7c49f4c315cebb24047affe8892c4d426d289c140dc40ca4f8de805157f7488df5b0aadf04daf2de', 1, 5, 'authToken', '[]', 0, '2023-07-20 08:58:54', '2023-07-20 08:58:54', '2024-07-20 10:58:54'),
('7cd56a71f393302b5ecf86f5625be375da0c7de1b3d2859d00f67bef717ef65ce85f621115b435bd', 1, 1, 'authToken', '[]', 0, '2021-11-03 17:49:50', '2021-11-03 17:49:50', '2022-11-03 18:49:50'),
('83003e7ec5210a5826c15bda241337ac74b981739d8df0e70150d1989964a332555e3dfacc9f4d52', 2, 5, 'authToken', '[]', 0, '2022-09-19 09:21:47', '2022-09-19 09:21:47', '2023-09-19 11:21:47'),
('8485e38b2316ed051fa3c110e1406f1b4bb02011bc0f1525eb74efe85621853d5cfef43dac16caab', 1, 1, 'authToken', '[]', 0, '2021-10-31 13:40:43', '2021-10-31 13:40:43', '2022-10-31 14:40:43'),
('8b71ce118a12f3b4699a6b77630a3827b42cd9958be7abfb2106bc862f610141c53c413cc1abc517', 2, 5, 'authToken', '[]', 0, '2022-09-22 11:24:19', '2022-09-22 11:24:19', '2023-09-22 13:24:19'),
('9376d9b96a4056b5cd62fcd80cb7d23d69fd238c78bf634011b1b66f890d8eb407ecad3c12d4744b', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:38:58', '2022-11-01 21:38:58', '2023-11-01 22:38:58'),
('9916a4149e81811bbf13fc5b21ac5df77a579708676bbd09b2886db43e5096c91601d4fa1781675b', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:40:28', '2022-11-01 21:40:28', '2023-11-01 22:40:28'),
('9e31a08060905ec8bb39888622678717c21d7ca9eff1aee502feda35b9798bbf21aab88739d568a0', 1, 1, 'authToken', '[]', 0, '2021-10-24 11:22:27', '2021-10-24 11:22:27', '2022-10-24 13:22:27'),
('9e739103ca347a97b46d33cb548b0760fa383574d8a9b2356bd2aa832f53b227b2a564f27b0c8c5e', 1, 5, 'authToken', '[]', 0, '2022-09-20 08:09:13', '2022-09-20 08:09:13', '2023-09-20 10:09:13'),
('9eae114b1300f50cb7d59392994ec7d12b6be2746c929400415b5290d4ca81bed066f270f9ea8318', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:35:25', '2022-10-25 19:35:25', '2023-10-25 21:35:25'),
('9ec315eeedcc48e5d3bbb1e63c9692b4c27a48b8a445f827bb45a1ab025b01af5c7ad974d99909b3', 1, 5, 'authToken', '[]', 0, '2022-11-11 14:08:55', '2022-11-11 14:08:55', '2023-11-11 15:08:55'),
('a3960288efb473f6a4700a4954c91e414565e489fad561bdc743cd1d69db1cb24247865edb979dd3', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:40:27', '2022-11-01 21:40:27', '2023-11-01 22:40:27'),
('a72e9f65b28de2b768787966b883fdc8baf81cdca1367a4b0a5ae3559a4843ab5785999c5cd2e6d1', 1, 5, 'authToken', '[]', 0, '2023-07-20 08:53:59', '2023-07-20 08:53:59', '2024-07-20 10:53:59'),
('a9b529a2e7352b8f3f0a0c8a7762e4c7773a7ed4289c31c0cdbbc6b6db2ff6c64bf3f73171dc5aa2', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:35:57', '2022-11-01 21:35:57', '2023-11-01 22:35:57'),
('b5adf7c261809fde4130bf788a6cfe58d0639f8804db75feeec9dfec9b22550f454beadc59541ec1', 2, 5, 'authToken', '[]', 0, '2022-09-22 09:11:10', '2022-09-22 09:11:10', '2023-09-22 11:11:10'),
('b95a35b53b1becb53ad0a8b94300422853770cc04e931ac5a48360128de4f39fd8aed0e78df02825', 2, 1, 'authToken', '[]', 0, '2021-10-28 21:07:27', '2021-10-28 21:07:27', '2022-10-28 23:07:27'),
('c1e7376e05d34b5549705fe22487a7d9138287718fa0997ba96512aa5168ffc11cf30f6ee7260a14', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:35:26', '2022-10-25 19:35:26', '2023-10-25 21:35:26'),
('c8e362c7be313e2dcc767ad7a027fe2188e6272e186879a26581c3cb931c23b5d6524bb60e4d9f67', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:40:32', '2022-10-25 19:40:32', '2023-10-25 21:40:32'),
('d2dfcacf8df85190d53cb6c78f34321d04ed88f0ecb6d599be9eb05bc00708cf04932db65145222d', 1, 5, 'authToken', '[]', 0, '2022-09-25 18:36:41', '2022-09-25 18:36:41', '2023-09-25 20:36:41'),
('d2f251ae7f6f682d81bea24890a15347741d092d53045b85e2090db227717512d329c4353497402c', 1, 5, 'authToken', '[]', 0, '2022-09-23 05:25:43', '2022-09-23 05:25:43', '2023-09-23 07:25:43'),
('d5d1c3ee51044d50634a98dae3ac784ff9c8e435f2b71764078e3fc9e55ff0e59f1f658964a6ba44', 1, 5, 'authToken', '[]', 0, '2022-10-25 19:40:32', '2022-10-25 19:40:32', '2023-10-25 21:40:32'),
('d73468a8c4b2f937bce78b3e0f4c2b7b775ce6e72974d1739fcb6e978c6de5ce05284eb0a5a8724a', 1, 5, 'authToken', '[]', 0, '2023-01-06 20:16:42', '2023-01-06 20:16:42', '2024-01-06 21:16:42'),
('dd253ad18a171bb844473a32fb84aab722c72871b0f8e13e183b78db36f15f638121983b5b1e355e', 2, 1, 'authToken', '[]', 0, '2021-11-01 14:09:03', '2021-11-01 14:09:03', '2022-11-01 15:09:03'),
('e7cb17e432b7a90874ea01bdc7efc7cda51691141cdba98c0d9cee27ff6dd7082b7280bc62aa5284', 1, 5, 'authToken', '[]', 0, '2022-11-01 21:35:56', '2022-11-01 21:35:56', '2023-11-01 22:35:56'),
('f219208ff6c3123cecd4612e92a0613d104cde1d252bf345b5c33efce641ad26973358e356e1ae38', 1, 5, 'authToken', '[]', 0, '2022-09-19 19:08:38', '2022-09-19 19:08:38', '2023-09-19 21:08:38'),
('f8fc4b549a8e1e762825517c2faf348318a975b8d82594ed14bcd200a8548f84eed790775983b043', 1, 5, 'authToken', '[]', 0, '2023-07-20 08:59:58', '2023-07-20 08:59:58', '2024-07-20 10:59:58'),
('fd7fbe04c47f09fcb35a08bfda68045e075f211c8df4efa5e229dc898bc4a35e74c0652d3d3a5930', 2, 1, 'authToken', '[]', 0, '2021-10-28 21:15:38', '2021-10-28 21:15:38', '2022-10-28 23:15:38');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) NOT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Mircel Personal Access Client', '9on1C745rNA3MhyHAPDykgHQ0TBAh0MTNNcwIoRz', 'http://localhost', 1, 0, 0, '2021-10-16 07:29:34', '2021-10-16 07:29:34'),
(2, NULL, 'Mircel Password Grant Client', 'a5TrZToHD2NwNXZ517pAPT2xS4DGQQXMvBzE17ZB', 'http://localhost', 0, 1, 0, '2021-10-16 07:29:34', '2021-10-16 07:29:34'),
(3, NULL, 'Mircel Personal Access Client', 'l16L1rqJdKzx92WfmRkMshf7xHcizROYWpzs0AsP', 'http://localhost', 1, 0, 0, '2022-09-18 08:28:38', '2022-09-18 08:28:38'),
(4, NULL, 'Mircel Password Grant Client', 'tZoddY12hCXfvHK9Pi38g6FU7Ci0TXL22yzFeiwT', 'http://localhost', 0, 1, 0, '2022-09-18 08:28:38', '2022-09-18 08:28:38'),
(5, NULL, 'Laravel Personal Access Client', 'Cv2k6P3ZUVSE8WeZe6we2mnrixuDRqcLPc1zZrnz', 'http://localhost', 1, 0, 0, '2022-09-18 09:32:08', '2022-09-18 09:32:08'),
(6, NULL, 'Laravel Password Grant Client', 'S2jVq1I7wIS1oQjRCj7iYTLxdHV2TBmcFKzRO0Ig', 'http://localhost', 0, 1, 0, '2022-09-18 09:32:08', '2022-09-18 09:32:08');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-10-16 07:29:34', '2021-10-16 07:29:34'),
(2, 3, '2022-09-18 08:28:38', '2022-09-18 08:28:38'),
(3, 5, '2022-09-18 09:32:08', '2022-09-18 09:32:08');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `opinions`
--

CREATE TABLE `opinions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stars` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `opinions_desc`
--

CREATE TABLE `opinions_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `opinions_desc`
--

INSERT INTO `opinions_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'Zapraszamy do rezerwacji terminów na sezony 2023 i 2024!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-09-22 21:24:31');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `home_page` int(11) DEFAULT NULL,
  `active` text DEFAULT NULL,
  `order_number` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `button_name_1` text DEFAULT NULL,
  `button_link_1` text DEFAULT NULL,
  `button_name_2` text DEFAULT NULL,
  `button_link_2` text DEFAULT NULL,
  `photo_background_size` text DEFAULT NULL,
  `button_download_1` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `short_description`, `description`, `photo`, `photo_alt`, `created_at`, `updated_at`, `home_page`, `active`, `order_number`, `subtitle`, `button_name`, `link`, `icon_svg`, `phone`, `meta_description`, `page`, `photo_background_position`, `button_name_1`, `button_link_1`, `button_name_2`, `button_link_2`, `photo_background_size`, `button_download_1`, `photo_sizes`) VALUES
(1, 'Ślub kościelny - propozycje repertuarowe, szczegóły', '<p>Zapraszamy do zapoznania się z przygotowanym Q&amp;A, a w razie innych pytań - jesteśmy do Waszej dyspozycji!&nbsp;</p>', '<ul>\n<li><strong><u>Jak to wygląda, kiedy gramy podczas Mszy ślubnej, jakie są nasze propozycje repertuarowe?</u></strong></li>\n</ul>\n<p>Nasza oprawa muzyczna standardowo obejmuje poniżej wymienione etapy ceremonii ślubnej. Za pozostałe części Mszy (te, śpiewane z księdzem/z wiernymi) natomiast zwyczajowo odpowiada organista z parafii. To oznacza, że my (duet) gramy w następujących momentach, a obok każdej części znajdziecie r&oacute;wnież naszą propozycję repertuarową:</p>\n<ul data-checked=\"true\">\n<li>na wejście Pary Młodej do kościoła: R. Wagner - Marsz weselny</li>\n<li>na Ofiarowanie: F. Schubert - Ave Maria</li>\n<li>podczas Komunii: J.S.Bach - Aria na strunie G</li>\n<li>na podpisanie dokument&oacute;w: E. Morricone - Ob&oacute;j Gabriela</li>\n<li>na wyjście Pary Młodej z kościoła: F. Mendelssohn - Marsz weselny</li>\n</ul>\n<p><span style=\"color: #282828;\">Prawo kościelne dopuszcza możliwość doboru odpowiednich pieśni oraz muzyki wykonywanej na ściśle określonych instrumentach zapewniających godność oraz szacunek dla miejsca i powagi Sakramentu Małżeństwa. Zawsze staramy się spełniać wszystkie Wasze muzyczne marzenia, więc w razie bardziej niestandardowych pr&oacute;śb repertuarowych kontaktujemy się z organistą, by upewnić się, że zostaną one zatwierdzone przez daną parafię.</span></p>\n<p>&nbsp;</p>\n<ul>\n<li><strong><u>A może wokal lub większy skład instrumentalny?</u></strong></li>\n</ul>\n<p>Z miłą chęcią! Przez te paręnaście lat w świecie muzycznym zebrałyśmy sobie krąg zaufanych i sprawdzonych muzyk&oacute;w, z kt&oacute;rymi wsp&oacute;łpracujemy przy r&oacute;żnych okazjach. Nie będzie więc żadnym problemem dodanie do naszego składu wokalist&oacute;w czy innych instrumentalist&oacute;w. Z przyjemnością spełnimy każde Wasze muzyczne życzenie dotyczące wymarzonego składu muzyk&oacute;w. Ta usługa podlega indywidualnej wycenie.</p>\n<p>&nbsp;</p>\n<ul>\n<li><strong><u>Czy organista jest niezbędny, jeśli zdecydujecie się na naszą usługę?</u></strong></li>\n</ul>\n<p>Jest taka możliwość, że organista z parafii nie będzie m&oacute;gł zagrać na Waszej uroczystości lub nie będziecie chcieli słyszeć organ&oacute;w podczas Mszy. Proponujemy w&oacute;wczas dwa rozwiązania:</p>\n<ol>\n<li>wsp&oacute;łpracujemy r&oacute;wnież z organistami, więc wystarczy, że wyrazicie chęć, byśmy to my załatwiły organistę; ta usługa podlega indywidualnej wycenie;</li>\n<li>podczas Mszy oprawione instrumentalnie zostaną wyłącznie wybrane części, natomiast podczas pozostałych, za kt&oacute;re odpowiedzialny jest standardowo organista, ksiądz będzie śpiewał a capella (bez towarzyszenia instrument&oacute;w)</li>\n</ol>\n<p>&nbsp;</p>\n<ul>\n<li><strong><u>A może rabat?</u></strong></li>\n</ul>\n<p>Postanowiłyśmy też zrobić rabat dla naszych Par Młodych od przyszłego roku - za każde skuteczne polecenie nas innej Parze, kt&oacute;ra będzie brała ślub w tym samym dniu i w pobliżu, a godziny się zgrają tak, żebyśmy mogły zagrać na obu uroczystościach -10% dla obu Par, natomiast za każde skuteczne polecenie nas innej Parze, kt&oacute;ra będzie brała ślub w innym dniu -5% od całej kwoty dla obu Par. Dotyczy to wszystkich rodzaj&oacute;w ślub&oacute;w. ☺️ Polecamy się więc do polecania innym Parom!</p>\n<ul>\n<li><strong><u>W razie innych, niestandardowych pytań - zapraszamy serdecznie do kontaktu!</u></strong></li>\n</ul>\n<h2>&nbsp;</h2>', '2022-10-09/dunia_1665333098.png', NULL, '2021-10-23 14:57:31', '2022-10-09 16:31:58', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'POBIERZ WIZYTÓWKĘ', 'https://eleduet.pl/storage/media/2022-10-02/1_1664700597.png', NULL, NULL, '80%', '1', '{\"width\":\"1080\",\"height\":\"1440\"}'),
(28, 'Repertuar - ślub cywilny/inne uroczystości świeckie', NULL, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p>\n<p class=\"ql-align-center\">&nbsp;</p>\n<p><strong><u>1. muzyka filmowa/z bajek:</u></strong></p>\n<ul>\n<li>A whole new world (&bdquo;Alladyn&rdquo;)</li>\n<li>Comptine d&rsquo;un autre ete (&bdquo;Amelia&rdquo;)</li>\n<li>La valse d&rsquo;Amelie (&bdquo;Amelia&rdquo;)</li>\n<li>Over the rainbow (&bdquo;Czarnoksiężnik z Krainy Oz&rdquo;)</li>\n<li>Love is all around (&bdquo;Cztery wesela i pogrzeb&rdquo;)</li>\n<li>Singin&rsquo; in the rain (&bdquo;Deszczowa piosenka&rdquo;)</li>\n<li>Can you feel the love tonight?&nbsp;(&bdquo;Kr&oacute;l lew&rdquo;)</li>\n<li>Mia &amp; Sebastian&rsquo;s theme (&bdquo;La la land&rdquo;)</li>\n<li>The Prayer (&bdquo;Magiczny miecz-Legenda Camelotu&rdquo;)</li>\n<li>Ob&oacute;j Gabriela (&bdquo;Misja&rdquo;)</li>\n<li>Shallow (&bdquo;Narodziny gwiazdy&rdquo;)</li>\n<li>Walc (&bdquo;Noce i dnie&rdquo;)</li>\n<li>Tale as old as world/Tej historii bieg (&bdquo;Piękna i bestia&rdquo;)</li>\n<li>&bdquo;Piraci z Karaib&oacute;w&rdquo; - temat</li>\n<li>Walc (&bdquo;Pod dachami Paryża&rdquo;)</li>\n<li>&bdquo;Sherlock Holmes&rdquo; - temat</li>\n<li>Hallelujah (&bdquo;Shrek&rdquo;)</li>\n<li>My heart will go on (&bdquo;Titanic&rdquo;)</li>\n<li>&bdquo;Zaczarowany ogr&oacute;d&rdquo; - temat</li>\n<li>Tango Por una cabeza (&bdquo;Zapach kobiety&rdquo;)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>2. muzyka pop:</u></strong></p>\n<ul>\n<li>Dancing queen (ABBA)</li>\n<li>Rolling in the deep (Adele)</li>\n<li>What a wonderful world (Louis Armstrong)</li>\n<li>All you need is love (The Beatles)</li>\n<li>Havana (Camila Cabello)</li>\n<li>You are the reason (Calum Scott &amp; Leona Lewis)</li>\n<li>Stolen dance (Milky Chance)</li>\n<li>Adventures of a lifetime (Coldplay)</li>\n<li>Clocks (Coldplay)</li>\n<li>Paradise (Coldplay)</li>\n<li>The Scientist (Coldplay)</li>\n<li>Viva la vida (Coldplay)</li>\n<li>Something just like this (The Chainsmokers ft. Coldplay)</li>\n<li>Lovely (Billie Eilish ft. Khalid)</li>\n<li>Sweet dreams (Eurythmics)</li>\n<li>Sugar (Maroon 5)</li>\n<li>Marry you (Bruno Mars)</li>\n<li>Thousand years (Christina Perri)</li>\n<li>Fairytale (Alexander Rybak)</li>\n<li>Perfect (Ed Sheeran)</li>\n<li>Sofia (Alvaro Soler)</li>\n<li>When I fall in love (Victor Young)</li>\n<li>Miłość, miłość (Krzysztof Zalewski)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>3. muzyka klasyczna:</u></strong></p>\n<ul>\n<li>Aria na strunie G (J. S. Bach)</li>\n<li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li>\n<li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li>\n<li>Adagio na smyczki (S. Barber)</li>\n<li>Fur Elise (L. van Beethoven)</li>\n<li>Taniec węgierski nr 5 (J. Brahms)</li>\n<li>Nocturne (F. Chopin)</li>\n<li>Duet kwiat&oacute;w (L. Delibes)</li>\n<li>Humoreska op. 101 nr 7 (A. Dvorak)</li>\n<li>Elegia na wiolonczelę op. 24 (G. Faure)</li>\n<li>Pavane op. 50 (G. Faure)</li>\n<li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li>\n<li>Finał z Jeziora łabędziego (P. Czajkowski)</li>\n<li>temat z Koncertu fortepianowego (P. Czajkowski)</li>\n<li>Medytacja z Thais (J. Massenet)</li>\n<li>Kanon (J. Pachelbel)</li>\n<li>Libertango (A. Piazzolla)</li>\n<li>Oblivion (A. Piazzolla)</li>\n<li>O sole mio (E. di Capua)</li>\n<li>Łabędź (C. Saint-Saens)</li>\n<li>Zima, II cz. Largo (A. Vivaldi)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>4. muzyka rock:</u></strong></p>\n<ul>\n<li>Nothing else matters (Metallica)</li>\n<li>Can&rsquo;t help falling in love (Elvis Presley)</li>\n<li>Love me tender (Elvis Presley)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>5. inne gatunki:</u></strong></p>\n<ul>\n<li>Hit the road Jack (Ray Charles)</li>\n<li>Fly me to the moon (Bart Howard) &ndash; jazz</li>\n<li>&nbsp;The Cascades (Scott Joplin)</li>\n<li>Country Clubs&nbsp;(Scott Joplin)</li>\n<li>Euphonic Sounds (Scott Joplin)</li>\n<li>Pleasant moments (Scott Joplin)</li>\n<li>All of me (John Legend)</li>\n<li>New York, New York (Frank Sinatra)</li>\n<li>El Choclo (Angelo Villoldo) - tango</li>\n<li>River flows in you (Yirumy)</li>\n<li>sto lat 🥳</li>\n</ul>\n<p>&nbsp;</p>', '2022-09-22/IMG_6066_1663861016.JPG', NULL, '2022-09-21 15:05:14', '2022-09-28 11:52:36', 0, '0', NULL, NULL, 'Zadzwoń teraz', NULL, NULL, '+48 723 780 812', '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p>\n<p class=\"ql-align-center\">&nbsp;</p>\n<p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p>\n<ul>\n<li>A whole new world (&bdquo;Alladyn&rdquo;)</li>\n<li>Comptine d&rsquo;un autre ete (&bdquo;Amelia&rdquo;)</li>\n<li>La valse d&rsquo;Amelie (&bdquo;Amelia&rdquo;)</li>\n<li>Over the rainbow (&bdquo;Czarnoksiężnik z Krainy Oz&rdquo;)</li>\n<li>Love is all around (&bdquo;Cztery wesela i pogrzeb&rdquo;)</li>\n<li>Singin&rsquo; in the rain (&bdquo;Deszczowa piosenka&rdquo;)</li>\n<li>Can you feel the love tonight?&nbsp;(&bdquo;Kr&oacute;l lew&rdquo;)</li>\n<li>Mia &amp; Sebastian&rsquo;s theme (&bdquo;La la land&rdquo;)</li>\n<li>The Prayer (&bdquo;Magiczny miecz-Legenda Camelotu&rdquo;)</li>\n<li>Ob&oacute;j Gabriela (&bdquo;Misja&rdquo;)</li>\n<li>Shallow (&bdquo;Narodziny gwiazdy&rdquo;)</li>\n<li>Walc (&bdquo;Noce i dnie&rdquo;)</li>\n<li>Tale as old as world/Tej historii bieg (&bdquo;Piękna i bestia&rdquo;)</li>\n<li>&bdquo;Piraci z Karaib&oacute;w&rdquo; - temat</li>\n<li>Walc (&bdquo;Pod dachami Paryża&rdquo;)</li>\n<li>&bdquo;Sherlock Holmes&rdquo; - temat</li>\n<li>Hallelujah (&bdquo;Shrek&rdquo;)</li>\n<li>My heart will go on (&bdquo;Titanic&rdquo;)</li>\n<li>&bdquo;Zaczarowany ogr&oacute;d&rdquo; - temat</li>\n<li>Tango Por una cabeza (&bdquo;Zapach kobiety&rdquo;)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>2) muzyka pop:</u></strong></p>\n<ul>\n<li>Dancing queen (ABBA)</li>\n<li>Rolling in the deep (Adele)</li>\n<li>What a wonderful world (Louis Armstrong)</li>\n<li>All you need is love (The Beatles)</li>\n<li>Havana (Camila Cabello)</li>\n<li>You are the reason (Calum Scott &amp; Leona Lewis)</li>\n<li>Stolen dance (Milky Chance)</li>\n<li>Adventures of a lifetime (Coldplay)&nbsp;</li>\n<li>Clocks (Coldplay)</li>\n<li>Paradise (Coldplay)</li>\n<li>The Scientist (Coldplay)</li>\n<li>Viva la vida (Coldplay)</li>\n<li>Something just like this (The Chainsmokers ft. Coldplay)</li>\n<li>Lovely (Billie Eilish ft. Khalid)</li>\n<li>Sweet dreams (Eurythmics)</li>\n<li>Sugar (Maroon 5)</li>\n<li>Marry you (Bruno Mars)</li>\n<li>Thousand years (Christina Perri)</li>\n<li>Fairytale (Alexander Rybak)</li>\n<li>Perfect (Ed Sheeran)</li>\n<li>Sofia (Alvaro Soler)</li>\n<li>When I fall in love (Victor Young)</li>\n<li>Miłość, miłość (Krzysztof Zalewski)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p>\n<ul>\n<li>Aria na strunie G (J. S. Bach)</li>\n<li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li>\n<li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li>\n<li>Adagio na smyczki (S. Barber)</li>\n<li>Fur Elise (L. van Beethoven)</li>\n<li>Taniec węgierski nr 5 (J. Brahms)</li>\n<li>Nocturne (F. Chopin)</li>\n<li>Duet kwiat&oacute;w (L. Delibes)</li>\n<li>Humoreska op. 101 nr 7 (A. Dvorak)</li>\n<li>Elegia na wiolonczelę op. 24 (G. Faure)</li>\n<li>Pavane op. 50 (G. Faure)</li>\n<li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li>\n<li>Finał z Jeziora łabędziego (P. Czajkowski)</li>\n<li>temat z Koncertu fortepianowego (P. Czajkowski)</li>\n<li>Medytacja z Thais (J. Massenet)</li>\n<li>Kanon (J. Pachelbel)</li>\n<li>Libertango (A. Piazzolla)</li>\n<li>Oblivion (A. Piazzolla)</li>\n<li>O sole mio (E. di Capua)</li>\n<li>Łabędź (C. Saint-Saens)</li>\n<li>Zima, II cz. Largo (A. Vivaldi)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>4)&nbsp;muzyka rock:</u></strong></p>\n<ul>\n<li>Nothing else matters (Metallica)</li>\n<li>Can&rsquo;t help falling in love (Elvis Presley)</li>\n<li>Love me tender (Elvis Presley)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>5) inne gatunki:</u></strong></p>\n<ul>\n<li>Hit the road Jack (Ray Charles)</li>\n<li>Fly me to the moon (Bart Howard) &ndash; jazz&nbsp;</li>\n<li>The Cascades (Scott Joplin)</li>\n<li>Country Clubs&nbsp;(Scott Joplin)</li>\n<li>Euphonic Sounds (Scott Joplin)</li>\n<li>Pleasant moments (Scott Joplin)</li>\n<li>All of me (John Legend)</li>\n<li>New York, New York (Frank Sinatra)</li>\n<li>El Choclo (Angelo Villoldo) - tango</li>\n<li>River flows in you (Yirumy)</li>\n<li>sto lat (:</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>', '/fotowoltaika', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{\"width\":1535,\"height\":1535}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `services_attributes`
--

CREATE TABLE `services_attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `services_call_us`
--

CREATE TABLE `services_call_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `height` text DEFAULT NULL,
  `height_md` text DEFAULT NULL,
  `height_lg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services_call_us`
--

INSERT INTO `services_call_us` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `phone`, `photo_sizes`, `photo_background_position`, `height`, `height_md`, `height_lg`) VALUES
(1, 0, NULL, 'Chcesz zapytać o dostępny termin? Zapraszamy do kontaktu!', NULL, NULL, NULL, 'Zadzwoń teraz', NULL, '2022-09-20/elena_i_Dunia_1663697774.png', NULL, NULL, '2022-09-21 21:34:48', '+48 513 583 131', '{\"width\":0,\"height\":0}', '50% 50%', '450', '305', '206');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `services_page_desc`
--

CREATE TABLE `services_page_desc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `height` text DEFAULT NULL,
  `height_md` text DEFAULT NULL,
  `height_lg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services_page_desc`
--

INSERT INTO `services_page_desc` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `phone`, `photo_sizes`, `photo_background_position`, `height`, `height_md`, `height_lg`) VALUES
(1, 0, NULL, 'Oferta', NULL, '<h3>Gwarantujemy</h3>\n<ul data-checked=\"true\">\n<li>profesjonalną oprawę muzyczną wszelkich uroczystości</li>\n<li>sprawny i bezproblemowy kontakt</li>\n<li>elastyczne podejście do kwestii repertuaru - jesteśmy w stanie spełnić (prawie) każde Wasze muzyczne marzenie 🎻🎻</li>\n<li>rabaty przy skutecznym poleceniu nas innym Parom</li>\n</ul>', '<ul>\n<li>ślub kościelny (muzyka podczas uroczystości)</li>\n<li>ślub kościelny+życzenia</li>\n<li>ślub cywilny w USC</li>\n<li>ślub cywilny/humanistyczny plenerowy (muzyka przed uroczystością, w trakcie i na życzeniach)</li>\n<li>obiad (muzyka w trakcie obiadu, np. w restauracji)</li>\n<li>ślub cywilny+obiad</li>\n<li>każdego rodzaju uroczystości rodzinne</li>\n<li>eventy firmowe</li>\n<li>po prostu polecamy się jako oprawę muzyczną na każdą okazję :)&nbsp;</li>\n</ul>', NULL, NULL, NULL, NULL, NULL, '2022-09-22 11:34:30', '+48 513 583 131', '{\"width\":0,\"height\":0}', '50% 50%', '450', '305', '206');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `services_service_categories`
--

CREATE TABLE `services_service_categories` (
  `id` int(11) NOT NULL,
  `service_id` bigint(20) UNSIGNED DEFAULT NULL,
  `service_category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_service_categories`
--

INSERT INTO `services_service_categories` (`id`, `service_id`, `service_category_id`, `created_at`, `updated_at`) VALUES
(44, 1, 3, '2022-10-02 10:56:05', '2022-10-02 10:56:05'),
(45, 1, 4, '2022-10-02 10:56:05', '2022-10-02 10:56:05');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `service_categories`
--

CREATE TABLE `service_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` text DEFAULT NULL,
  `active` text DEFAULT NULL,
  `order_number` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_categories`
--

INSERT INTO `service_categories` (`id`, `title`, `created_at`, `updated_at`, `description`, `active`, `order_number`, `subtitle`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `icon_svg`, `phone`, `meta_description`, `page`, `photo_background_position`) VALUES
(3, 'oprawa muzyczna ślubu cywilnego', '2022-09-21 22:27:38', '2022-09-21 22:27:38', '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p>\n<p class=\"ql-align-center\">&nbsp;</p>\n<p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p>\n<ul>\n<li>A whole new world (&bdquo;Alladyn&rdquo;)</li>\n<li>Comptine d&rsquo;un autre ete (&bdquo;Amelia&rdquo;)</li>\n<li>La valse d&rsquo;Amelie (&bdquo;Amelia&rdquo;)</li>\n<li>Over the rainbow (&bdquo;Czarnoksiężnik z Krainy Oz&rdquo;)</li>\n<li>Love is all around (&bdquo;Cztery wesela i pogrzeb&rdquo;)</li>\n<li>Singin&rsquo; in the rain (&bdquo;Deszczowa piosenka&rdquo;)</li>\n<li>Can you feel the love tonight?&nbsp;(&bdquo;Kr&oacute;l lew&rdquo;)</li>\n<li>Mia &amp; Sebastian&rsquo;s theme (&bdquo;La la land&rdquo;)</li>\n<li>The Prayer (&bdquo;Magiczny miecz-Legenda Camelotu&rdquo;)</li>\n<li>Ob&oacute;j Gabriela (&bdquo;Misja&rdquo;)</li>\n<li>Shallow (&bdquo;Narodziny gwiazdy&rdquo;)</li>\n<li>Walc (&bdquo;Noce i dnie&rdquo;)</li>\n<li>Tale as old as world/Tej historii bieg (&bdquo;Piękna i bestia&rdquo;)</li>\n<li>&bdquo;Piraci z Karaib&oacute;w&rdquo; - temat</li>\n<li>Walc (&bdquo;Pod dachami Paryża&rdquo;)</li>\n<li>&bdquo;Sherlock Holmes&rdquo; - temat</li>\n<li>Hallelujah (&bdquo;Shrek&rdquo;)</li>\n<li>My heart will go on (&bdquo;Titanic&rdquo;)</li>\n<li>&bdquo;Zaczarowany ogr&oacute;d&rdquo; - temat</li>\n<li>Tango Por una cabeza (&bdquo;Zapach kobiety&rdquo;)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>2) muzyka pop:</u></strong></p>\n<ul>\n<li>Dancing queen (ABBA)</li>\n<li>Rolling in the deep (Adele)</li>\n<li>What a wonderful world (Louis Armstrong)</li>\n<li>All you need is love (The Beatles)</li>\n<li>Havana (Camila Cabello)</li>\n<li>You are the reason (Calum Scott &amp; Leona Lewis)</li>\n<li>Stolen dance (Milky Chance)</li>\n<li>Adventures of a lifetime (Coldplay)&nbsp;</li>\n<li>Clocks (Coldplay)</li>\n<li>Paradise (Coldplay)</li>\n<li>The Scientist (Coldplay)</li>\n<li>Viva la vida (Coldplay)</li>\n<li>Something just like this (The Chainsmokers ft. Coldplay)</li>\n<li>Lovely (Billie Eilish ft. Khalid)</li>\n<li>Sweet dreams (Eurythmics)</li>\n<li>Sugar (Maroon 5)</li>\n<li>Marry you (Bruno Mars)</li>\n<li>Thousand years (Christina Perri)</li>\n<li>Fairytale (Alexander Rybak)</li>\n<li>Perfect (Ed Sheeran)</li>\n<li>Sofia (Alvaro Soler)</li>\n<li>When I fall in love (Victor Young)</li>\n<li>Miłość, miłość (Krzysztof Zalewski)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p>\n<ul>\n<li>Aria na strunie G (J. S. Bach)</li>\n<li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li>\n<li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li>\n<li>Adagio na smyczki (S. Barber)</li>\n<li>Fur Elise (L. van Beethoven)</li>\n<li>Taniec węgierski nr 5 (J. Brahms)</li>\n<li>Nocturne (F. Chopin)</li>\n<li>Duet kwiat&oacute;w (L. Delibes)</li>\n<li>Humoreska op. 101 nr 7 (A. Dvorak)</li>\n<li>Elegia na wiolonczelę op. 24 (G. Faure)</li>\n<li>Pavane op. 50 (G. Faure)</li>\n<li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li>\n<li>Finał z Jeziora łabędziego (P. Czajkowski)</li>\n<li>temat z Koncertu fortepianowego (P. Czajkowski)</li>\n<li>Medytacja z Thais (J. Massenet)</li>\n<li>Kanon (J. Pachelbel)</li>\n<li>Libertango (A. Piazzolla)</li>\n<li>Oblivion (A. Piazzolla)</li>\n<li>O sole mio (E. di Capua)</li>\n<li>Łabędź (C. Saint-Saens)</li>\n<li>Zima, II cz. Largo (A. Vivaldi)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>4)&nbsp;muzyka rock:</u></strong></p>\n<ul>\n<li>Nothing else matters (Metallica)</li>\n<li>Can&rsquo;t help falling in love (Elvis Presley)</li>\n<li>Love me tender (Elvis Presley)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>5) inne gatunki:</u></strong></p>\n<ul>\n<li>Hit the road Jack (Ray Charles)</li>\n<li>Fly me to the moon (Bart Howard) &ndash; jazz&nbsp;</li>\n<li>The Cascades (Scott Joplin)</li>\n<li>Country Clubs&nbsp;(Scott Joplin)</li>\n<li>Euphonic Sounds (Scott Joplin)</li>\n<li>Pleasant moments (Scott Joplin)</li>\n<li>All of me (John Legend)</li>\n<li>New York, New York (Frank Sinatra)</li>\n<li>El Choclo (Angelo Villoldo) - tango</li>\n<li>River flows in you (Yirumy)</li>\n<li>sto lat (:</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>', '0', NULL, NULL, NULL, 'Zadzwoń teraz', NULL, '2022-09-22/c9b1a632-39b7-4eab-a7e6-c3a8d7c2b0bc_1663801168.jpg', NULL, NULL, '+48 723 780 812', '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p>\n<p class=\"ql-align-center\">&nbsp;</p>\n<p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p>\n<ul>\n<li>A whole new world (&bdquo;Alladyn&rdquo;)</li>\n<li>Comptine d&rsquo;un autre ete (&bdquo;Amelia&rdquo;)</li>\n<li>La valse d&rsquo;Amelie (&bdquo;Amelia&rdquo;)</li>\n<li>Over the rainbow (&bdquo;Czarnoksiężnik z Krainy Oz&rdquo;)</li>\n<li>Love is all around (&bdquo;Cztery wesela i pogrzeb&rdquo;)</li>\n<li>Singin&rsquo; in the rain (&bdquo;Deszczowa piosenka&rdquo;)</li>\n<li>Can you feel the love tonight?&nbsp;(&bdquo;Kr&oacute;l lew&rdquo;)</li>\n<li>Mia &amp; Sebastian&rsquo;s theme (&bdquo;La la land&rdquo;)</li>\n<li>The Prayer (&bdquo;Magiczny miecz-Legenda Camelotu&rdquo;)</li>\n<li>Ob&oacute;j Gabriela (&bdquo;Misja&rdquo;)</li>\n<li>Shallow (&bdquo;Narodziny gwiazdy&rdquo;)</li>\n<li>Walc (&bdquo;Noce i dnie&rdquo;)</li>\n<li>Tale as old as world/Tej historii bieg (&bdquo;Piękna i bestia&rdquo;)</li>\n<li>&bdquo;Piraci z Karaib&oacute;w&rdquo; - temat</li>\n<li>Walc (&bdquo;Pod dachami Paryża&rdquo;)</li>\n<li>&bdquo;Sherlock Holmes&rdquo; - temat</li>\n<li>Hallelujah (&bdquo;Shrek&rdquo;)</li>\n<li>My heart will go on (&bdquo;Titanic&rdquo;)</li>\n<li>&bdquo;Zaczarowany ogr&oacute;d&rdquo; - temat</li>\n<li>Tango Por una cabeza (&bdquo;Zapach kobiety&rdquo;)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>2) muzyka pop:</u></strong></p>\n<ul>\n<li>Dancing queen (ABBA)</li>\n<li>Rolling in the deep (Adele)</li>\n<li>What a wonderful world (Louis Armstrong)</li>\n<li>All you need is love (The Beatles)</li>\n<li>Havana (Camila Cabello)</li>\n<li>You are the reason (Calum Scott &amp; Leona Lewis)</li>\n<li>Stolen dance (Milky Chance)</li>\n<li>Adventures of a lifetime (Coldplay)&nbsp;</li>\n<li>Clocks (Coldplay)</li>\n<li>Paradise (Coldplay)</li>\n<li>The Scientist (Coldplay)</li>\n<li>Viva la vida (Coldplay)</li>\n<li>Something just like this (The Chainsmokers ft. Coldplay)</li>\n<li>Lovely (Billie Eilish ft. Khalid)</li>\n<li>Sweet dreams (Eurythmics)</li>\n<li>Sugar (Maroon 5)</li>\n<li>Marry you (Bruno Mars)</li>\n<li>Thousand years (Christina Perri)</li>\n<li>Fairytale (Alexander Rybak)</li>\n<li>Perfect (Ed Sheeran)</li>\n<li>Sofia (Alvaro Soler)</li>\n<li>When I fall in love (Victor Young)</li>\n<li>Miłość, miłość (Krzysztof Zalewski)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p>\n<ul>\n<li>Aria na strunie G (J. S. Bach)</li>\n<li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li>\n<li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li>\n<li>Adagio na smyczki (S. Barber)</li>\n<li>Fur Elise (L. van Beethoven)</li>\n<li>Taniec węgierski nr 5 (J. Brahms)</li>\n<li>Nocturne (F. Chopin)</li>\n<li>Duet kwiat&oacute;w (L. Delibes)</li>\n<li>Humoreska op. 101 nr 7 (A. Dvorak)</li>\n<li>Elegia na wiolonczelę op. 24 (G. Faure)</li>\n<li>Pavane op. 50 (G. Faure)</li>\n<li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li>\n<li>Finał z Jeziora łabędziego (P. Czajkowski)</li>\n<li>temat z Koncertu fortepianowego (P. Czajkowski)</li>\n<li>Medytacja z Thais (J. Massenet)</li>\n<li>Kanon (J. Pachelbel)</li>\n<li>Libertango (A. Piazzolla)</li>\n<li>Oblivion (A. Piazzolla)</li>\n<li>O sole mio (E. di Capua)</li>\n<li>Łabędź (C. Saint-Saens)</li>\n<li>Zima, II cz. Largo (A. Vivaldi)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>4)&nbsp;muzyka rock:</u></strong></p>\n<ul>\n<li>Nothing else matters (Metallica)</li>\n<li>Can&rsquo;t help falling in love (Elvis Presley)</li>\n<li>Love me tender (Elvis Presley)</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong><u>5) inne gatunki:</u></strong></p>\n<ul>\n<li>Hit the road Jack (Ray Charles)</li>\n<li>Fly me to the moon (Bart Howard) &ndash; jazz&nbsp;</li>\n<li>The Cascades (Scott Joplin)</li>\n<li>Country Clubs&nbsp;(Scott Joplin)</li>\n<li>Euphonic Sounds (Scott Joplin)</li>\n<li>Pleasant moments (Scott Joplin)</li>\n<li>All of me (John Legend)</li>\n<li>New York, New York (Frank Sinatra)</li>\n<li>El Choclo (Angelo Villoldo) - tango</li>\n<li>River flows in you (Yirumy)</li>\n<li>sto lat (:</li>\n</ul>\n<p>&nbsp;</p>\n<p>&nbsp;</p>', '/fotowoltaika', NULL),
(4, 'oprawa muzyczna ślubu kościelnego', '2022-09-22 00:27:53', '2022-09-22 00:27:53', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `company` text DEFAULT NULL,
  `rodo_1` text DEFAULT NULL,
  `rodo_2` text DEFAULT NULL,
  `privace_policy` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `cookies` text DEFAULT NULL,
  `cookies_button` text DEFAULT NULL,
  `cookies_privace_button` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `shop_regulations` text DEFAULT NULL,
  `first_color` text DEFAULT NULL,
  `favicon` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `li_marker` text DEFAULT NULL,
  `destroy_primal_photo` int(11) NOT NULL DEFAULT 1,
  `active` text DEFAULT NULL,
  `order_number` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `min_height` text DEFAULT NULL,
  `min_height_md` text DEFAULT NULL,
  `min_height_lg` text DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `title`, `company`, `rodo_1`, `rodo_2`, `privace_policy`, `photo`, `photo_alt`, `description`, `cookies`, `cookies_button`, `cookies_privace_button`, `created_at`, `updated_at`, `shop_regulations`, `first_color`, `favicon`, `photo_sizes`, `li_marker`, `destroy_primal_photo`, `active`, `order_number`, `subtitle`, `short_description`, `button_name`, `link`, `phone`, `min_height`, `min_height_md`, `min_height_lg`, `photo_background_position`) VALUES
(1, 'Ustawienia', 'EleDuet - skrzypce i wiolonczela - oprawa muzyczna uroczystości', '„Wyrażam zgodę na przetwarzanie danych osobowych podanych w formularzu. Podanie danych jest dobrowolne. Administratorem podanych przez Pana/ Panią danych osobowych jest {NAZWA_FIRMY} z siedzibą o adresie {ADRES_FIRMY}. Pana/Pani dane będą przetwarzane w celach związanych z udzieleniem odpowiedzi, przedstawieniem oferty usług {NAZWA_FIRMY} oraz świadczeniem usług przez administratora danych. Przysługuje Panu/Pani prawo dostępu do treści swoich danych oraz ich poprawiania.”', '„Wyrażam zgodę na otrzymywanie informacji handlowych od {NAZWA_FIRMY} dotyczących jej oferty w szczególności poprzez połączenia telefoniczne lub sms z wykorzystaniem numeru telefonu podanego w formularzu, a także zgodę na przetwarzanie moich danych osobowych w tym celu przez {NAZWA_FIRMY} oraz w celach promocji, reklamy i badania rynku.”', '2022-09-20/IMG_8668_1663627080.jpg', '2022-10-09/logo_1665334625.svg', NULL, '<p>Eleduet - skrzypce i wiolonczela na każdą okazję - oprawa muzyczna Twojej uroczystości 🎻🎻</p>', 'Ta strona używa plików cookie w celach statystycznych oraz marketingowych. Możesz zablokować zapisywanie plików cookie na swoim dysku twardym zmieniając ustawienia swojej przeglądarki internetowej. Kontynuując korzystanie z tej strony bez zablokowania plików cookie zgadzasz się na ich zapisywanie na swoim dysku twardym. Dowiedz się więcej w naszej', 'OK', 'Polityce Prywatności.', NULL, '2022-10-09 10:57:13', NULL, '#275D1A', '2022-10-01/clef-favicon_1664635163_1664636943.png', '{\"width\":null,\"height\":null}', '2022-10-02/clef_1664726851.png', 1, '0', NULL, NULL, NULL, 'Zadzwoń teraz', NULL, '+48 513 583 131', '345', '280', '180', '50% 38%');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `slider`
--

CREATE TABLE `slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `button_name_1` text DEFAULT NULL,
  `button_link_1` text DEFAULT NULL,
  `button_name_2` text DEFAULT NULL,
  `button_link_2` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT 0,
  `photo_background_position` text DEFAULT NULL,
  `photo_background_size` text DEFAULT NULL,
  `button_download_1` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title`, `subtitle`, `button_name_1`, `button_link_1`, `button_name_2`, `button_link_2`, `photo`, `photo_alt`, `created_at`, `updated_at`, `active`, `photo_background_position`, `photo_background_size`, `button_download_1`, `meta_description`, `page`, `photo_sizes`) VALUES
(1, 'Piękna oprawa muzyczna Twojej uroczystości', 'Skrzypce i wiolonczela - duet smyczkowy', 'Skontaktuj się', '/kontakt', 'O nas', '/o-nas', '2022-10-09/dziewczyny_1665330664.jpg', NULL, '2021-10-12 12:56:39', '2023-07-23 08:37:13', 1, '80% 20%', NULL, NULL, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p><p class=\"ql-align-center\"><br></p><p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p><ul><li>A whole new world („Alladyn”)</li><li>Comptine d’un autre ete („Amelia”)</li><li>La valse d’Amelie („Amelia”)</li><li>Over the rainbow („Czarnoksiężnik z Krainy Oz”)</li><li>Love is all around („Cztery wesela i pogrzeb”)</li><li>Singin’ in the rain („Deszczowa piosenka”)</li><li>Can you feel the love tonight?&nbsp;(„Król lew”)</li><li>Mia &amp; Sebastian’s theme („La la land”)</li><li>The Prayer („Magiczny miecz-Legenda Camelotu”)</li><li>Obój Gabriela („Misja”)</li><li>Shallow („Narodziny gwiazdy”)</li><li>Walc („Noce i dnie”)</li><li>Tale as old as world/Tej historii bieg („Piękna i bestia”)</li><li>„Piraci z Karaibów” - temat</li><li>Walc („Pod dachami Paryża”)</li><li>„Sherlock Holmes” - temat</li><li>Hallelujah („Shrek”)</li><li>My heart will go on („Titanic”)</li><li>„Zaczarowany ogród” - temat</li><li>Tango Por una cabeza („Zapach kobiety”)</li></ul><p><br></p><p><strong><u>2) muzyka pop:</u></strong></p><ul><li>Dancing queen (ABBA)</li><li>Rolling in the deep (Adele)</li><li>What a wonderful world (Louis Armstrong)</li><li>All you need is love (The Beatles)</li><li>Havana (Camila Cabello)</li><li>You are the reason (Calum Scott &amp; Leona Lewis)</li><li>Stolen dance (Milky Chance)</li><li>Adventures of a lifetime (Coldplay)&nbsp;</li><li>Clocks (Coldplay)</li><li>Paradise (Coldplay)</li><li>The Scientist (Coldplay)</li><li>Viva la vida (Coldplay)</li><li>Something just like this (The Chainsmokers ft. Coldplay)</li><li>Lovely (Billie Eilish ft. Khalid)</li><li>Sweet dreams (Eurythmics)</li><li>Sugar (Maroon 5)</li><li>Marry you (Bruno Mars)</li><li>Thousand years (Christina Perri)</li><li>Fairytale (Alexander Rybak)</li><li>Perfect (Ed Sheeran)</li><li>Sofia (Alvaro Soler)</li><li>When I fall in love (Victor Young)</li><li>Miłość, miłość (Krzysztof Zalewski)</li></ul><p><br></p><p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p><ul><li>Aria na strunie G (J. S. Bach)</li><li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li><li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li><li>Adagio na smyczki (S. Barber)</li><li>Fur Elise (L. van Beethoven)</li><li>Taniec węgierski nr 5 (J. Brahms)</li><li>Nocturne (F. Chopin)</li><li>Duet kwiatów (L. Delibes)</li><li>Humoreska op. 101 nr 7 (A. Dvorak)</li><li>Elegia na wiolonczelę op. 24 (G. Faure)</li><li>Pavane op. 50 (G. Faure)</li><li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li><li>Finał z Jeziora łabędziego (P. Czajkowski)</li><li>temat z Koncertu fortepianowego (P. Czajkowski)</li><li>Medytacja z Thais (J. Massenet)</li><li>Kanon (J. Pachelbel)</li><li>Libertango (A. Piazzolla)</li><li>Oblivion (A. Piazzolla)</li><li>O sole mio (E. di Capua)</li><li>Łabędź (C. Saint-Saens)</li><li>Zima, II cz. Largo (A. Vivaldi)</li></ul><p><br></p><p><strong><u>4)&nbsp;muzyka rock:</u></strong></p><ul><li>Nothing else matters (Metallica)</li><li>Can’t help falling in love (Elvis Presley)</li><li>Love me tender (Elvis Presley)</li></ul><p><br></p><p><strong><u>5) inne gatunki:</u></strong></p><ul><li>Hit the road Jack (Ray Charles)</li><li>Fly me to the moon (Bart Howard) – jazz&nbsp;</li><li>The Cascades (Scott Joplin)</li><li>Country Clubs&nbsp;(Scott Joplin)</li><li>Euphonic Sounds (Scott Joplin)</li><li>Pleasant moments (Scott Joplin)</li><li>All of me (John Legend)</li><li>New York, New York (Frank Sinatra)</li><li>El Choclo (Angelo Villoldo) - tango</li><li>River flows in you (Yirumy)</li><li>sto lat (:</li></ul><p>&nbsp;</p><p>&nbsp;</p>', '/fotowoltaika', '{\"width\":1440,\"height\":1080}'),
(6, 'Nasz repertuar - uroczystości świeckie i kościelne', 'O inne tytuły pytajcie za pomocą formularza kontaktowego', 'REPERTUAR', '/uslugi', 'FORMULARZ KONTAKTOWY', '/kontakt', '2022-10-09/slub_1665332671.jpg', NULL, '2022-09-19 10:09:56', '2023-07-23 10:37:13', 1, '80% 20%', NULL, NULL, NULL, NULL, '{\"width\":1440,\"height\":1031}'),
(15, 'Piękna oprawa muzyczna Twojej uroczystości', 'Skrzypce i wiolonczela - duet smyczkowy', 'Skontaktuj się', '/kontakt', 'O nas', '/o-nas', '2022-10-09/dziewczyny_1665330664.jpg', NULL, '2021-10-12 12:56:39', '2023-07-23 08:37:13', 1, '80% 20%', NULL, NULL, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p><p class=\"ql-align-center\"><br></p><p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p><ul><li>A whole new world („Alladyn”)</li><li>Comptine d’un autre ete („Amelia”)</li><li>La valse d’Amelie („Amelia”)</li><li>Over the rainbow („Czarnoksiężnik z Krainy Oz”)</li><li>Love is all around („Cztery wesela i pogrzeb”)</li><li>Singin’ in the rain („Deszczowa piosenka”)</li><li>Can you feel the love tonight?&nbsp;(„Król lew”)</li><li>Mia &amp; Sebastian’s theme („La la land”)</li><li>The Prayer („Magiczny miecz-Legenda Camelotu”)</li><li>Obój Gabriela („Misja”)</li><li>Shallow („Narodziny gwiazdy”)</li><li>Walc („Noce i dnie”)</li><li>Tale as old as world/Tej historii bieg („Piękna i bestia”)</li><li>„Piraci z Karaibów” - temat</li><li>Walc („Pod dachami Paryża”)</li><li>„Sherlock Holmes” - temat</li><li>Hallelujah („Shrek”)</li><li>My heart will go on („Titanic”)</li><li>„Zaczarowany ogród” - temat</li><li>Tango Por una cabeza („Zapach kobiety”)</li></ul><p><br></p><p><strong><u>2) muzyka pop:</u></strong></p><ul><li>Dancing queen (ABBA)</li><li>Rolling in the deep (Adele)</li><li>What a wonderful world (Louis Armstrong)</li><li>All you need is love (The Beatles)</li><li>Havana (Camila Cabello)</li><li>You are the reason (Calum Scott &amp; Leona Lewis)</li><li>Stolen dance (Milky Chance)</li><li>Adventures of a lifetime (Coldplay)&nbsp;</li><li>Clocks (Coldplay)</li><li>Paradise (Coldplay)</li><li>The Scientist (Coldplay)</li><li>Viva la vida (Coldplay)</li><li>Something just like this (The Chainsmokers ft. Coldplay)</li><li>Lovely (Billie Eilish ft. Khalid)</li><li>Sweet dreams (Eurythmics)</li><li>Sugar (Maroon 5)</li><li>Marry you (Bruno Mars)</li><li>Thousand years (Christina Perri)</li><li>Fairytale (Alexander Rybak)</li><li>Perfect (Ed Sheeran)</li><li>Sofia (Alvaro Soler)</li><li>When I fall in love (Victor Young)</li><li>Miłość, miłość (Krzysztof Zalewski)</li></ul><p><br></p><p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p><ul><li>Aria na strunie G (J. S. Bach)</li><li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li><li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li><li>Adagio na smyczki (S. Barber)</li><li>Fur Elise (L. van Beethoven)</li><li>Taniec węgierski nr 5 (J. Brahms)</li><li>Nocturne (F. Chopin)</li><li>Duet kwiatów (L. Delibes)</li><li>Humoreska op. 101 nr 7 (A. Dvorak)</li><li>Elegia na wiolonczelę op. 24 (G. Faure)</li><li>Pavane op. 50 (G. Faure)</li><li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li><li>Finał z Jeziora łabędziego (P. Czajkowski)</li><li>temat z Koncertu fortepianowego (P. Czajkowski)</li><li>Medytacja z Thais (J. Massenet)</li><li>Kanon (J. Pachelbel)</li><li>Libertango (A. Piazzolla)</li><li>Oblivion (A. Piazzolla)</li><li>O sole mio (E. di Capua)</li><li>Łabędź (C. Saint-Saens)</li><li>Zima, II cz. Largo (A. Vivaldi)</li></ul><p><br></p><p><strong><u>4)&nbsp;muzyka rock:</u></strong></p><ul><li>Nothing else matters (Metallica)</li><li>Can’t help falling in love (Elvis Presley)</li><li>Love me tender (Elvis Presley)</li></ul><p><br></p><p><strong><u>5) inne gatunki:</u></strong></p><ul><li>Hit the road Jack (Ray Charles)</li><li>Fly me to the moon (Bart Howard) – jazz&nbsp;</li><li>The Cascades (Scott Joplin)</li><li>Country Clubs&nbsp;(Scott Joplin)</li><li>Euphonic Sounds (Scott Joplin)</li><li>Pleasant moments (Scott Joplin)</li><li>All of me (John Legend)</li><li>New York, New York (Frank Sinatra)</li><li>El Choclo (Angelo Villoldo) - tango</li><li>River flows in you (Yirumy)</li><li>sto lat (:</li></ul><p>&nbsp;</p><p>&nbsp;</p>', '/fotowoltaika', '{\"width\":1440,\"height\":1080}'),
(16, 'Nasz repertuar - uroczystości świeckie i kościelne', 'O inne tytuły pytajcie za pomocą formularza kontaktowego', 'REPERTUAR', '/uslugi', 'FORMULARZ KONTAKTOWY', '/kontakt', '2022-10-09/slub_1665332671.jpg', NULL, '2022-09-19 10:09:56', '2023-07-23 10:37:13', 1, '80% 20%', NULL, NULL, NULL, NULL, '{\"width\":1440,\"height\":1031}'),
(17, 'Piękna oprawa muzyczna Twojej uroczystości', 'Skrzypce i wiolonczela - duet smyczkowy', 'Skontaktuj się', '/kontakt', 'O nas', '/o-nas', '2022-10-09/dziewczyny_1665330664.jpg', NULL, '2021-10-12 12:56:39', '2023-07-23 08:37:13', 1, '80% 20%', NULL, NULL, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p><p class=\"ql-align-center\"><br></p><p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p><ul><li>A whole new world („Alladyn”)</li><li>Comptine d’un autre ete („Amelia”)</li><li>La valse d’Amelie („Amelia”)</li><li>Over the rainbow („Czarnoksiężnik z Krainy Oz”)</li><li>Love is all around („Cztery wesela i pogrzeb”)</li><li>Singin’ in the rain („Deszczowa piosenka”)</li><li>Can you feel the love tonight?&nbsp;(„Król lew”)</li><li>Mia &amp; Sebastian’s theme („La la land”)</li><li>The Prayer („Magiczny miecz-Legenda Camelotu”)</li><li>Obój Gabriela („Misja”)</li><li>Shallow („Narodziny gwiazdy”)</li><li>Walc („Noce i dnie”)</li><li>Tale as old as world/Tej historii bieg („Piękna i bestia”)</li><li>„Piraci z Karaibów” - temat</li><li>Walc („Pod dachami Paryża”)</li><li>„Sherlock Holmes” - temat</li><li>Hallelujah („Shrek”)</li><li>My heart will go on („Titanic”)</li><li>„Zaczarowany ogród” - temat</li><li>Tango Por una cabeza („Zapach kobiety”)</li></ul><p><br></p><p><strong><u>2) muzyka pop:</u></strong></p><ul><li>Dancing queen (ABBA)</li><li>Rolling in the deep (Adele)</li><li>What a wonderful world (Louis Armstrong)</li><li>All you need is love (The Beatles)</li><li>Havana (Camila Cabello)</li><li>You are the reason (Calum Scott &amp; Leona Lewis)</li><li>Stolen dance (Milky Chance)</li><li>Adventures of a lifetime (Coldplay)&nbsp;</li><li>Clocks (Coldplay)</li><li>Paradise (Coldplay)</li><li>The Scientist (Coldplay)</li><li>Viva la vida (Coldplay)</li><li>Something just like this (The Chainsmokers ft. Coldplay)</li><li>Lovely (Billie Eilish ft. Khalid)</li><li>Sweet dreams (Eurythmics)</li><li>Sugar (Maroon 5)</li><li>Marry you (Bruno Mars)</li><li>Thousand years (Christina Perri)</li><li>Fairytale (Alexander Rybak)</li><li>Perfect (Ed Sheeran)</li><li>Sofia (Alvaro Soler)</li><li>When I fall in love (Victor Young)</li><li>Miłość, miłość (Krzysztof Zalewski)</li></ul><p><br></p><p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p><ul><li>Aria na strunie G (J. S. Bach)</li><li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li><li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li><li>Adagio na smyczki (S. Barber)</li><li>Fur Elise (L. van Beethoven)</li><li>Taniec węgierski nr 5 (J. Brahms)</li><li>Nocturne (F. Chopin)</li><li>Duet kwiatów (L. Delibes)</li><li>Humoreska op. 101 nr 7 (A. Dvorak)</li><li>Elegia na wiolonczelę op. 24 (G. Faure)</li><li>Pavane op. 50 (G. Faure)</li><li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li><li>Finał z Jeziora łabędziego (P. Czajkowski)</li><li>temat z Koncertu fortepianowego (P. Czajkowski)</li><li>Medytacja z Thais (J. Massenet)</li><li>Kanon (J. Pachelbel)</li><li>Libertango (A. Piazzolla)</li><li>Oblivion (A. Piazzolla)</li><li>O sole mio (E. di Capua)</li><li>Łabędź (C. Saint-Saens)</li><li>Zima, II cz. Largo (A. Vivaldi)</li></ul><p><br></p><p><strong><u>4)&nbsp;muzyka rock:</u></strong></p><ul><li>Nothing else matters (Metallica)</li><li>Can’t help falling in love (Elvis Presley)</li><li>Love me tender (Elvis Presley)</li></ul><p><br></p><p><strong><u>5) inne gatunki:</u></strong></p><ul><li>Hit the road Jack (Ray Charles)</li><li>Fly me to the moon (Bart Howard) – jazz&nbsp;</li><li>The Cascades (Scott Joplin)</li><li>Country Clubs&nbsp;(Scott Joplin)</li><li>Euphonic Sounds (Scott Joplin)</li><li>Pleasant moments (Scott Joplin)</li><li>All of me (John Legend)</li><li>New York, New York (Frank Sinatra)</li><li>El Choclo (Angelo Villoldo) - tango</li><li>River flows in you (Yirumy)</li><li>sto lat (:</li></ul><p>&nbsp;</p><p>&nbsp;</p>', '/fotowoltaika', '{\"width\":1440,\"height\":1080}'),
(18, 'Nasz repertuar - uroczystości świeckie i kościelne', 'O inne tytuły pytajcie za pomocą formularza kontaktowego', 'REPERTUAR', '/uslugi', 'FORMULARZ KONTAKTOWY', '/kontakt', '2022-10-09/slub_1665332671.jpg', NULL, '2022-09-19 10:09:56', '2023-07-23 10:37:13', 1, '80% 20%', NULL, NULL, NULL, NULL, '{\"width\":1440,\"height\":1031}'),
(19, 'Piękna oprawa muzyczna Twojej uroczystości', 'Skrzypce i wiolonczela - duet smyczkowy', 'Skontaktuj się', '/kontakt', 'O nas', '/o-nas', '2022-10-09/dziewczyny_1665330664.jpg', NULL, '2021-10-12 12:56:39', '2023-07-23 08:37:13', 1, '80% 20%', NULL, NULL, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p><p class=\"ql-align-center\"><br></p><p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p><ul><li>A whole new world („Alladyn”)</li><li>Comptine d’un autre ete („Amelia”)</li><li>La valse d’Amelie („Amelia”)</li><li>Over the rainbow („Czarnoksiężnik z Krainy Oz”)</li><li>Love is all around („Cztery wesela i pogrzeb”)</li><li>Singin’ in the rain („Deszczowa piosenka”)</li><li>Can you feel the love tonight?&nbsp;(„Król lew”)</li><li>Mia &amp; Sebastian’s theme („La la land”)</li><li>The Prayer („Magiczny miecz-Legenda Camelotu”)</li><li>Obój Gabriela („Misja”)</li><li>Shallow („Narodziny gwiazdy”)</li><li>Walc („Noce i dnie”)</li><li>Tale as old as world/Tej historii bieg („Piękna i bestia”)</li><li>„Piraci z Karaibów” - temat</li><li>Walc („Pod dachami Paryża”)</li><li>„Sherlock Holmes” - temat</li><li>Hallelujah („Shrek”)</li><li>My heart will go on („Titanic”)</li><li>„Zaczarowany ogród” - temat</li><li>Tango Por una cabeza („Zapach kobiety”)</li></ul><p><br></p><p><strong><u>2) muzyka pop:</u></strong></p><ul><li>Dancing queen (ABBA)</li><li>Rolling in the deep (Adele)</li><li>What a wonderful world (Louis Armstrong)</li><li>All you need is love (The Beatles)</li><li>Havana (Camila Cabello)</li><li>You are the reason (Calum Scott &amp; Leona Lewis)</li><li>Stolen dance (Milky Chance)</li><li>Adventures of a lifetime (Coldplay)&nbsp;</li><li>Clocks (Coldplay)</li><li>Paradise (Coldplay)</li><li>The Scientist (Coldplay)</li><li>Viva la vida (Coldplay)</li><li>Something just like this (The Chainsmokers ft. Coldplay)</li><li>Lovely (Billie Eilish ft. Khalid)</li><li>Sweet dreams (Eurythmics)</li><li>Sugar (Maroon 5)</li><li>Marry you (Bruno Mars)</li><li>Thousand years (Christina Perri)</li><li>Fairytale (Alexander Rybak)</li><li>Perfect (Ed Sheeran)</li><li>Sofia (Alvaro Soler)</li><li>When I fall in love (Victor Young)</li><li>Miłość, miłość (Krzysztof Zalewski)</li></ul><p><br></p><p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p><ul><li>Aria na strunie G (J. S. Bach)</li><li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li><li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li><li>Adagio na smyczki (S. Barber)</li><li>Fur Elise (L. van Beethoven)</li><li>Taniec węgierski nr 5 (J. Brahms)</li><li>Nocturne (F. Chopin)</li><li>Duet kwiatów (L. Delibes)</li><li>Humoreska op. 101 nr 7 (A. Dvorak)</li><li>Elegia na wiolonczelę op. 24 (G. Faure)</li><li>Pavane op. 50 (G. Faure)</li><li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li><li>Finał z Jeziora łabędziego (P. Czajkowski)</li><li>temat z Koncertu fortepianowego (P. Czajkowski)</li><li>Medytacja z Thais (J. Massenet)</li><li>Kanon (J. Pachelbel)</li><li>Libertango (A. Piazzolla)</li><li>Oblivion (A. Piazzolla)</li><li>O sole mio (E. di Capua)</li><li>Łabędź (C. Saint-Saens)</li><li>Zima, II cz. Largo (A. Vivaldi)</li></ul><p><br></p><p><strong><u>4)&nbsp;muzyka rock:</u></strong></p><ul><li>Nothing else matters (Metallica)</li><li>Can’t help falling in love (Elvis Presley)</li><li>Love me tender (Elvis Presley)</li></ul><p><br></p><p><strong><u>5) inne gatunki:</u></strong></p><ul><li>Hit the road Jack (Ray Charles)</li><li>Fly me to the moon (Bart Howard) – jazz&nbsp;</li><li>The Cascades (Scott Joplin)</li><li>Country Clubs&nbsp;(Scott Joplin)</li><li>Euphonic Sounds (Scott Joplin)</li><li>Pleasant moments (Scott Joplin)</li><li>All of me (John Legend)</li><li>New York, New York (Frank Sinatra)</li><li>El Choclo (Angelo Villoldo) - tango</li><li>River flows in you (Yirumy)</li><li>sto lat (:</li></ul><p>&nbsp;</p><p>&nbsp;</p>', '/fotowoltaika', '{\"width\":1440,\"height\":1080}'),
(20, 'Nasz repertuar - uroczystości świeckie i kościelne', 'O inne tytuły pytajcie za pomocą formularza kontaktowego', 'REPERTUAR', '/uslugi', 'FORMULARZ KONTAKTOWY', '/kontakt', '2022-10-09/slub_1665332671.jpg', NULL, '2022-09-19 10:09:56', '2023-07-23 10:37:13', 1, '80% 20%', NULL, NULL, NULL, NULL, '{\"width\":1440,\"height\":1031}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `snackbar_alerts`
--

CREATE TABLE `snackbar_alerts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `error` text DEFAULT NULL,
  `delete_comment` text DEFAULT NULL,
  `add_comment` text DEFAULT NULL,
  `mail_error` text DEFAULT NULL,
  `attachments_error` text DEFAULT NULL,
  `recaptcha_error` text DEFAULT NULL,
  `login_require` text DEFAULT NULL,
  `reservation_to_accept` text DEFAULT NULL,
  `add_to_cart` text DEFAULT NULL,
  `shop_items_error` text DEFAULT NULL,
  `photo_error` text DEFAULT NULL,
  `edit_account_success` text DEFAULT NULL,
  `delete_from_cart_question` text DEFAULT NULL,
  `order_success` text DEFAULT NULL,
  `login_success` text DEFAULT NULL,
  `register_success` text DEFAULT NULL,
  `validate` text DEFAULT NULL,
  `non_activated_account` text DEFAULT NULL,
  `blocked_user` text DEFAULT NULL,
  `user_exist` text DEFAULT NULL,
  `mail_success` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `activated_account_success` text DEFAULT NULL,
  `user_does_not_exist` text DEFAULT NULL,
  `password_reminder_success` text DEFAULT NULL,
  `password_error` text DEFAULT NULL,
  `change_password_success` text DEFAULT NULL,
  `lucky_number` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `snackbar_alerts`
--

INSERT INTO `snackbar_alerts` (`id`, `error`, `delete_comment`, `add_comment`, `mail_error`, `attachments_error`, `recaptcha_error`, `login_require`, `reservation_to_accept`, `add_to_cart`, `shop_items_error`, `photo_error`, `edit_account_success`, `delete_from_cart_question`, `order_success`, `login_success`, `register_success`, `validate`, `non_activated_account`, `blocked_user`, `user_exist`, `mail_success`, `title`, `activated_account_success`, `user_does_not_exist`, `password_reminder_success`, `password_error`, `change_password_success`, `lucky_number`, `created_at`, `updated_at`) VALUES
(1, 'Błąd serwera, przepraszamy...', 'Pomyślnie usunięto komentarz!', 'Pomyślnie dodano komentarz!', 'Przepraszamy, nie udało się wysłać maila...', 'Przepraszamy, nie udało się wysłać załączników...', 'System twierdzi, że jesteś robotem...', 'Musisz się zalogować!', 'Twoja rezerwacja czeka na akceptację!', 'Pomyślnie dodano do koszyka!', 'Nie udało się załadować wariantów...', 'Przepraszamy, nie udało się dodać zdjęcia...', 'Pomyślnie edytowano użytkownika!', 'Czy na pewno usunąć z koszyka przedmiot:', 'Pomyślnie złożono zamówienie!', 'Pomyślnie zalogowano!', 'Pomyślnie zarejestrowano! Wysłano link aktywacyjny!', 'Niepoprawne dane!', 'Proszę aktywować konto!', 'Przepraszamy, Twoje konto zostało zablokowane!', 'Taki użytkownik już istnieje!', 'Pomyślnie wysłano wiadomość!', 'Komunikaty', 'Pomyślnie aktywowano konto!', 'Użytkownik nie istnieje!', 'Pomyślnie wysłano nowe hasło!', 'Hasło nieprawidłowe!', 'Pomyślnie zmieniono hasło!', 'Wylosowano szczęśliwca o identyfikatorze {id}', NULL, '2021-03-27 15:53:43');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `solar_system`
--

CREATE TABLE `solar_system` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solar_system`
--

INSERT INTO `solar_system` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'Ślub kościelny - Q&A - propozycje repertuarowe, szczegóły', NULL, NULL, '<ul><li><strong><u>Jak to wygląda, kiedy gramy podczas Mszy ślubnej, jakie są nasze propozycje repertuarowe?</u></strong></li></ul><p>	Nasza oprawa muzyczna standardowo obejmuje poniżej wymienione etapy ceremonii ślubnej. Za pozostałe części Mszy (te, śpiewane z księdzem/z wiernymi) natomiast zwyczajowo odpowiada organista z parafii. To oznacza, że my (duet) gramy w następujących momentach, a obok każdej części znajdą Państwo również naszą propozycję repertuarową:</p><ul data-checked=\"true\"><li>na wejście Pary Młodej do kościoła: R. Wagner - Marsz weselny</li><li>na Ofiarowanie: F. Schubert - Ave Maria</li><li>podczas Komunii: J.S.Bach - Aria na strunie G</li><li>na podpisanie dokumentów: E. Morricone - Obój Gabriela</li><li>na wyjście Pary Młodej z kościoła: F. Mendelssohn - Marsz weselny </li></ul><p><span style=\"color: rgb(40, 40, 40);\">Prawo kościelne dopuszcza możliwość doboru odpowiednich pieśni oraz muzyki wykonywanej na ściśle określonych instrumentach zapewniających godność oraz szacunek dla miejsca i powagi Sakramentu Małżeństwa. Zawsze staramy się spełniać wszystkie Państwa muzyczne marzenia, więc w razie bardziej niestandardowych próśb repertuarowych kontaktujemy się z organistą, by upewnić się, że zostaną one zatwierdzone przez daną parafię.</span></p><p><br></p><ul><li><strong><u>A może wokal lub większy skład instrumentalny?</u></strong></li></ul><p>Z miłą chęcią! Przez te paręnaście lat w świecie muzycznym zebrałyśmy sobie krąg zaufanych i sprawdzonych muzyków, z którymi współpracujemy przy różnych okazjach. Nie będzie więc żadnym problemem dodanie do naszego składu wokalistów czy innych instrumentalistów. Z przyjemnością spełnimy każde Państwa muzyczne życzenie dotyczące wymarzonego składu muzyków. Ta usługa podlega indywidualnej wycenie.</p><p><br></p><ul><li><strong><u>Czy organista jest niezbędny, jeśli zdecydują się Państwo na naszą usługę?</u></strong></li></ul><p>Jest taka możliwość, że organista z parafii nie będzie mógł zagrać na Państwa uroczystości lub nie będą chcieli Państwo słyszeć organów podczas Mszy. Proponujemy wówczas dwa rozwiązania: </p><ol><li>współpracujemy również z organistami, więc wystarczy, że wyrażą Państwo chęć, byśmy to my załatwiły organistę; ta usługa podlega indywidualnej wycenie;</li><li>podczas Mszy oprawione instrumentalnie zostaną wyłącznie wybrane części, natomiast podczas pozostałych, za które odpowiedzialny jest standardowo organista, ksiądz będzie śpiewał a capella (bez towarzyszenia instrumentów)</li></ol><p><br></p><ul><li><strong><u>A może rabat?</u></strong></li></ul><p>Jeśli polecą nas Państwo innym Parom Młodym biorącym ślub w tym samym dniu w tym samym kościele, rabatu udzielamy wszystkim zainteresowanym współpracą z nami w danym miejscu.</p><p><br></p><ul><li><strong><u>W razie innych, niestandardowych pytań - zapraszamy serdecznie do kontaktu!</u></strong></li></ul><p><br></p>', NULL, NULL, '2022-09-20/IMG_8679_1663628984.jpg', NULL, NULL, '2022-09-22 15:51:57');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `solar_system_call_us`
--

CREATE TABLE `solar_system_call_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `order_number` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `button_name` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solar_system_call_us`
--

INSERT INTO `solar_system_call_us` (`id`, `active`, `order_number`, `title`, `subtitle`, `description`, `short_description`, `button_name`, `link`, `photo`, `photo_alt`, `created_at`, `updated_at`, `phone`, `icon_svg`) VALUES
(1, 0, NULL, 'Chcesz, abyśmy oprawiły muzycznie Twoją uroczystość? Zapytaj o dostępne terminy!', NULL, NULL, NULL, 'Zadzwoń teraz', NULL, '2022-09-24/tempImagenwXebW_1663861300_1664045356.png', NULL, NULL, '2022-09-22 11:53:44', '+48 723 780 812', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subpages`
--

CREATE TABLE `subpages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `meta_description` text DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `page` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `photo_alt` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `photo_background_position` text DEFAULT NULL,
  `first_color` text DEFAULT NULL,
  `company` text DEFAULT NULL,
  `rodo_1` text DEFAULT NULL,
  `rodo_2` text DEFAULT NULL,
  `privace_policy` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `cookies` text DEFAULT NULL,
  `cookies_button` text DEFAULT NULL,
  `cookies_privace_button` text DEFAULT NULL,
  `shop_regulations` text DEFAULT NULL,
  `favicon` text DEFAULT NULL,
  `photo_sizes` text DEFAULT NULL,
  `li_marker` text DEFAULT NULL,
  `height` text DEFAULT NULL,
  `height_md` text DEFAULT NULL,
  `height_lg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subpages`
--

INSERT INTO `subpages` (`id`, `meta_description`, `active`, `title`, `page`, `photo`, `photo_alt`, `created_at`, `updated_at`, `photo_background_position`, `first_color`, `company`, `rodo_1`, `rodo_2`, `privace_policy`, `description`, `cookies`, `cookies_button`, `cookies_privace_button`, `shop_regulations`, `favicon`, `photo_sizes`, `li_marker`, `height`, `height_md`, `height_lg`) VALUES
(1, '<p>&nbsp;</p>\n<p>&nbsp;</p>', 1, 'Strona główna', '/', '2022-09-20/IMG_8668_1663627080.jpg', 'EleDuet w komplecie.', NULL, '2022-09-22 13:49:24', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, 1, 'Usługi', '/uslugi', '2022-09-24/613D6EA9-20CF-4FCA-9BBD-3EAA6E957AC6_1663860964_1664044745.jpg', NULL, NULL, '2022-09-24 16:39:25', '60% 40%', '#275D1AFF', 'EleDuet - skrzypce i wiolonczela - oprawa muzyczna uroczystości', '„Wyrażam zgodę na przetwarzanie danych osobowych podanych w formularzu. Podanie danych jest dobrowolne. Administratorem podanych przez Pana/ Panią danych osobowych jest {NAZWA_FIRMY} z siedzibą o adresie {ADRES_FIRMY}. Pana/Pani dane będą przetwarzane w celach związanych z udzieleniem odpowiedzi, przedstawieniem oferty usług {NAZWA_FIRMY} oraz świadczeniem usług przez administratora danych. Przysługuje Panu/Pani prawo dostępu do treści swoich danych oraz ich poprawiania.”', '„Wyrażam zgodę na otrzymywanie informacji handlowych od {NAZWA_FIRMY} dotyczących jej oferty w szczególności poprzez połączenia telefoniczne lub sms z wykorzystaniem numeru telefonu podanego w formularzu, a także zgodę na przetwarzanie moich danych osobowych w tym celu przez {NAZWA_FIRMY} oraz w celach promocji, reklamy i badania rynku.”', '2022-09-20/IMG_8668_1663627080.jpg', '<p>Eleduet - skrzypce i wiolonczela na każdą okazję - oprawa muzyczna Twojej uroczystości 🎻🎻</p>', 'Ta strona używa plików cookie w celach statystycznych oraz marketingowych. Możesz zablokować zapisywanie plików cookie na swoim dysku twardym zmieniając ustawienia swojej przeglądarki internetowej. Kontynuując korzystanie z tej strony bez zablokowania plików cookie zgadzasz się na ich zapisywanie na swoim dysku twardym. Dowiedz się więcej w naszej', 'OK', 'Polityce Prywatności.', NULL, '2022-10-01/clef-favicon_1664635163_1664636943.png', '{\"width\":0,\"height\":0}', '2022-10-02/clef_1664726851.png', '144', '144', '144'),
(3, NULL, 1, 'O nas', '/o-nas', '2022-09-22/0465c3eb-b537-4f98-8351-2a7172b39159_1663860958.JPG', NULL, NULL, '2022-09-25 16:38:50', '50% 30%', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{\"width\":null,\"height\":null}', NULL, '144', '144', '144'),
(4, '<p class=\"ql-align-center\"><strong>ślub cywilny/inne uroczystości świeckie</strong></p><p class=\"ql-align-center\"><br></p><p><strong><u>1) muzyka filmowa/z bajek:</u></strong></p><ul><li>A whole new world („Alladyn”)</li><li>Comptine d’un autre ete („Amelia”)</li><li>La valse d’Amelie („Amelia”)</li><li>Over the rainbow („Czarnoksiężnik z Krainy Oz”)</li><li>Love is all around („Cztery wesela i pogrzeb”)</li><li>Singin’ in the rain („Deszczowa piosenka”)</li><li>Can you feel the love tonight?&nbsp;(„Król lew”)</li><li>Mia &amp; Sebastian’s theme („La la land”)</li><li>The Prayer („Magiczny miecz-Legenda Camelotu”)</li><li>Obój Gabriela („Misja”)</li><li>Shallow („Narodziny gwiazdy”)</li><li>Walc („Noce i dnie”)</li><li>Tale as old as world/Tej historii bieg („Piękna i bestia”)</li><li>„Piraci z Karaibów” - temat</li><li>Walc („Pod dachami Paryża”)</li><li>„Sherlock Holmes” - temat</li><li>Hallelujah („Shrek”)</li><li>My heart will go on („Titanic”)</li><li>„Zaczarowany ogród” - temat</li><li>Tango Por una cabeza („Zapach kobiety”)</li></ul><p><br></p><p><strong><u>2) muzyka pop:</u></strong></p><ul><li>Dancing queen (ABBA)</li><li>Rolling in the deep (Adele)</li><li>What a wonderful world (Louis Armstrong)</li><li>All you need is love (The Beatles)</li><li>Havana (Camila Cabello)</li><li>You are the reason (Calum Scott &amp; Leona Lewis)</li><li>Stolen dance (Milky Chance)</li><li>Adventures of a lifetime (Coldplay)&nbsp;</li><li>Clocks (Coldplay)</li><li>Paradise (Coldplay)</li><li>The Scientist (Coldplay)</li><li>Viva la vida (Coldplay)</li><li>Something just like this (The Chainsmokers ft. Coldplay)</li><li>Lovely (Billie Eilish ft. Khalid)</li><li>Sweet dreams (Eurythmics)</li><li>Sugar (Maroon 5)</li><li>Marry you (Bruno Mars)</li><li>Thousand years (Christina Perri)</li><li>Fairytale (Alexander Rybak)</li><li>Perfect (Ed Sheeran)</li><li>Sofia (Alvaro Soler)</li><li>When I fall in love (Victor Young)</li><li>Miłość, miłość (Krzysztof Zalewski)</li></ul><p><br></p><p><strong><u>3)&nbsp;muzyka klasyczna:</u></strong></p><ul><li>Aria na strunie G (J. S. Bach)</li><li>Badinerie z II Suity orkiestrowej (J.S. Bach)</li><li>Preludium z I suity na wiolonczelę solo (J.S. Bach)</li><li>Adagio na smyczki (S. Barber)</li><li>Fur Elise (L. van Beethoven)</li><li>Taniec węgierski nr 5 (J. Brahms)</li><li>Nocturne (F. Chopin)</li><li>Duet kwiatów (L. Delibes)</li><li>Humoreska op. 101 nr 7 (A. Dvorak)</li><li>Elegia na wiolonczelę op. 24 (G. Faure)</li><li>Pavane op. 50 (G. Faure)</li><li>Hornpipe z Muzyki na wodzie (G.F. Haendel)</li><li>Finał z Jeziora łabędziego (P. Czajkowski)</li><li>temat z Koncertu fortepianowego (P. Czajkowski)</li><li>Medytacja z Thais (J. Massenet)</li><li>Kanon (J. Pachelbel)</li><li>Libertango (A. Piazzolla)</li><li>Oblivion (A. Piazzolla)</li><li>O sole mio (E. di Capua)</li><li>Łabędź (C. Saint-Saens)</li><li>Zima, II cz. Largo (A. Vivaldi)</li></ul><p><br></p><p><strong><u>4)&nbsp;muzyka rock:</u></strong></p><ul><li>Nothing else matters (Metallica)</li><li>Can’t help falling in love (Elvis Presley)</li><li>Love me tender (Elvis Presley)</li></ul><p><br></p><p><strong><u>5) inne gatunki:</u></strong></p><ul><li>Hit the road Jack (Ray Charles)</li><li>Fly me to the moon (Bart Howard) – jazz&nbsp;</li><li>The Cascades (Scott Joplin)</li><li>Country Clubs&nbsp;(Scott Joplin)</li><li>Euphonic Sounds (Scott Joplin)</li><li>Pleasant moments (Scott Joplin)</li><li>All of me (John Legend)</li><li>New York, New York (Frank Sinatra)</li><li>El Choclo (Angelo Villoldo) - tango</li><li>River flows in you (Yirumy)</li><li>sto lat (:</li></ul><p>&nbsp;</p><p>&nbsp;</p>', 0, 'Repertuar - ślub cywilny/inne uroczystości świeckie', '/fotowoltaika', '2022-09-22/c9b1a632-39b7-4eab-a7e6-c3a8d7c2b0bc_1663801168.jpg', NULL, NULL, '2022-09-21 20:59:46', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{\"width\":0,\"height\":0}', NULL, NULL, NULL, NULL),
(5, NULL, 1, 'Kontakt', '/kontakt', '2021-10-21/services-banner_1634836054.jpg', NULL, NULL, '2021-10-21 15:10:40', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{\"width\":0,\"height\":0}', NULL, '144', '144', '144'),
(6, '<p><a title=\"Marsz weselny - F. Mendelssohn\" href=\"https://www.youtube.com/watch?v=zCEYFL_KdNU\">Marsz weselny - F. Mendelssohn</a></p>\n<p><a title=\"Ob&oacute;j Gabriela - E. Morricone\" href=\"https://www.youtube.com/watch?v=nDTdhAH-aR8\">Ob&oacute;j Gabriela - E. Morricone</a></p>\n<p><a title=\"J. S. Bach - Aria na strunie G\" href=\"https://www.youtube.com/watch?v=9OUXVpnmnpw\">J. S. Bach - Aria na strunie G</a></p>', 0, 'Realizacje', '/realizacje', '2022-09-22/687C37D5-FFD9-489C-88FA-F5EDFDE74B6A_1663860970.JPG', NULL, NULL, '2022-09-22 09:58:39', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{\"width\":1125,\"height\":2000}', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `translations`
--

CREATE TABLE `translations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `order_number` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `key` text DEFAULT NULL,
  `en` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`id`, `active`, `order_number`, `created_at`, `updated_at`, `key`, `en`) VALUES
(6, 1, NULL, '2022-09-16 11:39:35', '2022-09-16 11:39:35', 'dupaKluczRazDwaTrzy', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `photo` text NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `blocked` tinyint(1) DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type`, `photo`, `active`, `blocked`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Moderator', 'dany97971@gmail.com', '2020-09-27 08:46:39', '$2y$10$6XXh0PLYfKnPpNlUzciOOe7vdnObdN7xGcF8Opc4UqE9h23ndkZO.', 'Moderator', '', 1, 0, 'EfTdygXp8YPcbmUqfAtt3tZ9NCbCaVoqGgst8CLhc7xpPY8TVBH4II79jqNb', NULL, NULL),
(2, ' Dunia Lascar', 'biuro@eleduet.pl', '2020-09-27 08:46:39', '$2y$10$/PQ2SIIaHPO55WPXrJp.IO1IdSE2aTCAOrvGsojlNA1CC8KHY81Jq', 'Admin', '', 1, 0, 'EfTdygXp8YPcbmUqfAtt3tZ9NCbCaVoqGgst8CLhc7xpPY8TVBH4II79jqNb', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `validation_rules`
--

CREATE TABLE `validation_rules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `required` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password_length` text DEFAULT NULL,
  `file_size` text DEFAULT NULL,
  `password_confirm` text DEFAULT NULL,
  `reservation_min_time` text DEFAULT NULL,
  `reservation_exist` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `validation_rules`
--

INSERT INTO `validation_rules` (`id`, `title`, `required`, `email`, `password_length`, `file_size`, `password_confirm`, `reservation_min_time`, `reservation_exist`, `created_at`, `updated_at`) VALUES
(1, 'Opisy', 'To pole jest wymagane!', 'Niepoprawny e-mail.', 'Hasło musi mieć co najmniej 8 liter!', 'Pliki powinny ważyć mniej niż 5 MB!', 'Hasła muszą być takie same!', 'Minimalny czas rezerwacji to 30 minut!', 'Taka rezerwacja już istnieje!', NULL, NULL);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `about_page`
--
ALTER TABLE `about_page`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `attributes_desc`
--
ALTER TABLE `attributes_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `contact_links`
--
ALTER TABLE `contact_links`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `default_crud_tables`
--
ALTER TABLE `default_crud_tables`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `execution_process`
--
ALTER TABLE `execution_process`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `execution_process_desc`
--
ALTER TABLE `execution_process_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `home_call_us`
--
ALTER TABLE `home_call_us`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `home_services_desc`
--
ALTER TABLE `home_services_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `home_solar_system_desc`
--
ALTER TABLE `home_solar_system_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `mails`
--
ALTER TABLE `mails`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indeksy dla tabeli `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indeksy dla tabeli `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indeksy dla tabeli `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indeksy dla tabeli `opinions`
--
ALTER TABLE `opinions`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `opinions_desc`
--
ALTER TABLE `opinions_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeksy dla tabeli `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `services_attributes`
--
ALTER TABLE `services_attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `services_call_us`
--
ALTER TABLE `services_call_us`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `services_page_desc`
--
ALTER TABLE `services_page_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `services_service_categories`
--
ALTER TABLE `services_service_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_service_categories_service_id_foreign` (`service_id`),
  ADD KEY `services_service_categories_service_category_id_foreign` (`service_category_id`);

--
-- Indeksy dla tabeli `service_categories`
--
ALTER TABLE `service_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `snackbar_alerts`
--
ALTER TABLE `snackbar_alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `solar_system`
--
ALTER TABLE `solar_system`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `solar_system_call_us`
--
ALTER TABLE `solar_system_call_us`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `subpages`
--
ALTER TABLE `subpages`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeksy dla tabeli `validation_rules`
--
ALTER TABLE `validation_rules`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `about_page`
--
ALTER TABLE `about_page`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `attributes_desc`
--
ALTER TABLE `attributes_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_links`
--
ALTER TABLE `contact_links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `default_crud_tables`
--
ALTER TABLE `default_crud_tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `execution_process`
--
ALTER TABLE `execution_process`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `execution_process_desc`
--
ALTER TABLE `execution_process_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `home_call_us`
--
ALTER TABLE `home_call_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_services_desc`
--
ALTER TABLE `home_services_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_solar_system_desc`
--
ALTER TABLE `home_solar_system_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mails`
--
ALTER TABLE `mails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `opinions`
--
ALTER TABLE `opinions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `opinions_desc`
--
ALTER TABLE `opinions_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `services_attributes`
--
ALTER TABLE `services_attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services_call_us`
--
ALTER TABLE `services_call_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services_page_desc`
--
ALTER TABLE `services_page_desc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services_service_categories`
--
ALTER TABLE `services_service_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `service_categories`
--
ALTER TABLE `service_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `snackbar_alerts`
--
ALTER TABLE `snackbar_alerts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `solar_system`
--
ALTER TABLE `solar_system`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `solar_system_call_us`
--
ALTER TABLE `solar_system_call_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subpages`
--
ALTER TABLE `subpages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `validation_rules`
--
ALTER TABLE `validation_rules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services_service_categories`
--
ALTER TABLE `services_service_categories`
  ADD CONSTRAINT `services_service_categories_service_category_id_foreign` FOREIGN KEY (`service_category_id`) REFERENCES `service_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `services_service_categories_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
