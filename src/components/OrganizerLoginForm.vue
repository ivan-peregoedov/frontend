<template>
<div >
    <form class="grid" @submit.prevent>
        
        <h3>Почтовый адрес</h3>

        <reg-auth-input v-model="organ.email" input-type="email"/>

        <h3>Пароль</h3>

        <reg-auth-input v-model="organ.password" input-type="password"/>

        <reg-auth-button type="submit" class="btn mt-5" @click="login">Войти</reg-auth-button>
        <slot></slot>
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

<style scoped>
h3 {
       @apply mb-1
    }
</style>