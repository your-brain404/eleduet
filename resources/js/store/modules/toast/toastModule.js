export default {
    state: {
        toasts: []
    },
    mutations: {
        toast(state, text) {
            state.toasts.push(text);
        }
    }
};
