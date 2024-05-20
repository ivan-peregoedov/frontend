<template>
<div class="container">
    <form @submit.prevent>
        <h3 v-if="isOrgan">Название организации</h3>
        <h3 v-else>Имя Фамилия</h3>
        <reg-auth-input v-model="user.name" input-type="text"/>
        
        <h3>Телефонный номер</h3>

        <reg-auth-input v-model="user.phone" maxLength="11" placeholder="+7 (___) ___ __ __" input-type="tel"/>

        <h3>Почтовый адрес</h3>

        <reg-auth-input v-model="user.email" input-type="email"/>

        <h3>Пароль</h3>

        <reg-auth-input v-model="user.password" input-type="password"/>

        <reg-auth-button type="submit" class="btn" @click="createuser">Зарегистрироваться</reg-auth-button>

    </form>

</div>
</template>

<script>
export default {
    props: {
        isOrgan: Boolean
    },
    data() {
        return {

            user: {
                name: '',
                phone: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        createuser() {
            this.user.id = Date.now();
            this.$emit('register', this.user);
            this.user = {
                name: '',
                phone: '',
                email: '',
                password: ''
            }
        },
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
