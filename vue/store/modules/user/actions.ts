import {FETCH_USER, SAVE_USER, POST_RESOURCE, UPDATE_USER_LIST} from "./mutations";
import {UserInterface} from "../../../interface/UserInterface";
import axios from "axios";

export const actions = {
    async fetchUsers(context) {

        if (context.state.fetchUser) {
            return;
        }
        context.commit(FETCH_USER, true)

        const response = await axios.get<UserInterface>('http://example-app.test/users');

        context.commit(SAVE_USER, response.data)
        context.commit(FETCH_USER, false)
    },
    async saveUser(context, {name, email}) {
        context.commit(POST_RESOURCE, true)
        try {
            const requestData =  {
                name: name,
                email: email
            };
            const response = await axios.post('http://example-app.test/user/create', requestData);
            context.commit(POST_RESOURCE, false);
            if(response.data) {
                context.commit(UPDATE_USER_LIST, response.data);
            }
        } catch (e) {
            context.commit(OPERATION_SAVE, 'error');
        }
    }
}
