<template>
    <div id="Login">
        <input v-model="userName" type="text">
        <input v-model="password" type="text">
        <button v-on:click="login">login</button>
    </div>
</template>

<script>
    import * as types from '../../store/types'
    export default {
        name: "Login",
        data:function () {
            return {
                userName:"yqf",
                password:"123456",
                login:()=>{
                    this.axios.post("/login",{
                        userName:this.userName,
                        password:this.password
                    }).
                    then((res)=>{
                        // eslint-disable-next-line no-console
                        console.log(res)
                        if(res.status==200){
                            this.$store.commit(types.LOGIN, res.data.token);
                            window.location = "/"
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>