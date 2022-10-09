import store from "@/store/store";
import webpExtensions from "@/helpers/files/webp-extensions";
import getExtensionFromPath from "@/helpers/files/get-extension-from-path";

export default function existingPhotoPath(path) {
    const extension = getExtensionFromPath(path);
    const destroyPrimalPhoto =
        store.state.Settings.settings.destroy_primal_photo;

    if (destroyPrimalPhoto && webpExtensions.includes(extension)) {
        return `${path}.webp`;
    }

    return path;
}
