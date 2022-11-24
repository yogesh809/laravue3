import {UserInterface} from "../../../interface/UserInterface";

export interface StateInterface{
    users: UserInterface;
    fetchUser: boolean;
    response: string;
}

export const initState: StateInterface = {
    users: null,
    fetchUser: false,
    response: null
}
