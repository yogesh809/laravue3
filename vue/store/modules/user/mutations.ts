import {UserInterface} from "../../../interface/UserInterface";
import {StateInterface} from "./state";

export const FETCH_USER = 'FETCH_USER'
export const SAVE_USER = 'SAVE_USER'
export const POST_RESOURCE = 'POST_RESOURCE'
export const UPDATE_USER_LIST = 'UPDATE_USER_LIST'

export const mutations = {
    FETCH_USER: (state: StateInterface, isFetch: boolean) => {
        state.fetchUser = isFetch
    },
    SAVE_USER: (state: StateInterface, data: UserInterface) => {
        state.users = data
    },
    POST_RESOURCE: (state: StateInterface, isFetch: boolean) => {
        state.fetchUser = isFetch
    },
    UPDATE_USER_LIST: (state: StateInterface, responseData) => {
        state.users.push(responseData);
    }
}
