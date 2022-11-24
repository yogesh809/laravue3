import {createApp} from 'vue';
import UserModule from "./components/User/UserModule.vue";
import {store} from './store'

createApp(UserModule)
    .use(store)
    .mount("#app");
