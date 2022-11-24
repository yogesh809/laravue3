<template>
    <div class="container">
        <User></User>
        <Create></Create>
    </div>
</template>
<script>
import User from "./User.vue";
import Create from "./Create.vue";
export default {
    name: 'UserModule',
    components: {Create, User}
}
</script>
<style scoped>
.container {
    width: 80%;
}
</style>
