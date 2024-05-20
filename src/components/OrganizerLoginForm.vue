<template>
<div class="container">
    <form @submit.prevent>
        
        <h3>Почтовый адрес</h3>

        <reg-auth-input v-model="organ.email" input-type="email"/>

        <h3>Пароль</h3>

        <reg-auth-input v-model="organ.password" input-type="password"/>

        <reg-auth-button type="submit" class="btn" @click="login">Войти</reg-auth-button>

    </form>

</div>
</template>

<script>
export default {
    
    data() {
        return {
            organ: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){

            this.$emit('login', this.organ);
                this.organ = {
                    email: '',
                    password: ''
                }
        }
    }
}

</script>

<style>

form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

h3 {
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px darkgreen;
}

.container {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
