<template>
<div class="container">
    <form @submit.prevent>
        <h3>Название организации</h3>

        <reg-auth-input v-model="organ.name" input-type="text"/>
        
        <h3>Телефонный номер</h3>

        <reg-auth-input v-model="organ.phone" maxLength="11" placeholder="+7 (___) ___ __ __" input-type="tel"/>

        <h3>Почтовый адрес</h3>

        <reg-auth-input v-model="organ.email" input-type="email"/>

        <h3>Пароль</h3>

        <reg-auth-input v-model="organ.password" input-type="password"/>

        <reg-auth-button type="submit" class="btn" @click="createOrgan">Зарегистрироваться</reg-auth-button>

    </form>

</div>
</template>

<script>
export default {
    
    data() {
        return {

            organ: {
                name: '',
                phone: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        createOrgan() {
            this.organ.id = Date.now();
            this.$emit('register', this.organ);
            this.organ = {
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
