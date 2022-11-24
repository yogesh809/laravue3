import {mutations} from './mutations'
import {actions} from "./actions";
import {getters} from "./getters";
import {initState} from "./state";

export const user = {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations
}
