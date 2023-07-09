import { createStore as _createStore } from 'vuex'

export function createStore(router) {
    return _createStore({
        state: {
            get route() {
                return router.currentRoute.value
            },
            get router() {
                return router
            }
        }
    });
} 
