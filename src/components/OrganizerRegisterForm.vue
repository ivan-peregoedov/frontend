<template>
<div>
    <form @submit.prevent class="grid">
        <h3 v-if="isOrgan">Название организации</h3>
        <h3 v-else>Имя Фамилия</h3>
        <reg-auth-input v-model="user.name" input-type="text"/>
        
        <h3>Телефонный номер</h3>

        <reg-auth-input v-model="user.phone" maxLength="11" placeholder="+7 (___) ___ __ __" input-type="tel"/>

        <h3>Почтовый адрес</h3>

        <reg-auth-input v-model="user.email" input-type="email"/>

        <h3>Пароль</h3>

        <reg-auth-input v-model="user.password" input-type="password"/>

        <reg-auth-button type="submit" class="btn mt-5" @click="createuser">Зарегистрироваться</reg-auth-button>
        <slot></slot>
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

<style scoped>
    h3 {
       @apply mb-1
    }
</style>