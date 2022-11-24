import {StateInterface} from "./state"

export const getters = {
    getIsFetchUsers: (state: StateInterface) => state.fetchUser,
    getUsers: (state: StateInterface) => state.users,
}
