import randomString from "@/helpers/string/random-string";

export default {
    state: {
        toasts: []
    },
    mutations: {
        toast(state, toast) {
            let newToast = {
                id: randomString(5),
                message: "",
                variant: "first-color"
            };
            if (toast.constructor === String) {
                newToast.message = toast;
            }
            if (toast.constructor === Object) {
                for (let key in toast) {
                    if (toast[key]) newToast[key] = toast[key];
                }
            }
            state.toasts.push(newToast);
            setTimeout(() => {
                this.commit("closeToast", newToast.id);
            }, 3000);
        },
        closeToast(state, toastId) {
            state.toasts.splice(
                state.toasts.findIndex(toast => toast.id == toastId),
                1
            );
        }
    }
};
