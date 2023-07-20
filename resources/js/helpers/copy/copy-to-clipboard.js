import { createStore } from "@/store/store.js";

export default async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        const store = createStore()
        store.commit("toast", "Skopiowano link do schowka!");
    } catch (error) {
        console.error(error);
    }
}
