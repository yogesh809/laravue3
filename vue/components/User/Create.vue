<template>
    <div class="section">
        <h4>Create User</h4>
        <p>Name</p>
        <input v-model="name" placeholder="Name" />
        <p>Email</p>
        <input v-model="email" placeholder="Email" />
        <button @click="save()">Save</button>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: 'Create',
    data(){
        return {
            name: null,
            email: null
        };
    },
    computed: {
        ...mapGetters("user", [
            'getUsers',
            'getIsFetchUsers'
        ]),
    },
    methods: {
        ...mapActions("user", [
            'saveUser',
            'fetchUsers',
        ]),
        save() {
            this.saveUser({name: this.name, email: this.email});
        }
    }
}
</script>
<style scoped>
.section {
    float: right;
    padding: 10px;
}
</style>
