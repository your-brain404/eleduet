import store from "@/store/store";

export default async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        store.commit("toast", "Skopiowano link do schowka!");
    } catch (error) {
        console.error(error);
    }
}
