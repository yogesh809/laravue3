<template>
    <div class="section">
        <h4>Users</h4>
        <table border="1">
            <tr>
                <th>UserId</th>
                <th>Name</th>
                <th>Email</th>
                <th>View</th>
            </tr>
            <tr v-if="users.length" v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td></td>
            </tr>
            <tr v-else>
                <td colspan="4">No rows</td>
            </tr>
        </table>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: 'User',
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters("user", [
            'getUsers',
            'getIsFetchUsers'
        ]),
        users() {
            return (this.getUsers || [])
        },
    },
    mounted() {
        this.fetchUsers()
    },
    methods: {
        ...mapActions("user", [
            'fetchUsers'
        ]),
    }
}
</script>
<style scoped>
.section{
    float:left;
    padding: 10px;
}
</style>
