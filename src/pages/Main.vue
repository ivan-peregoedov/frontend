<template>
<div class="bg-gradient-to-b from-zinc-800 via-green-800 to-green-500 h-screen w-screen flex items-center">
    <div class="h-max mx-auto flex flex-col items-center bg-green-500 rounded-2xl px-10">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 select-none">
                {{isRegister ? "Регистрация" : "Вход в аккаунт" }}
            </h2>
        </div>
        <div class="mt-10 w-full">
            <div v-if="isRegister" class="flex text-gray-700 w-full text-center text-xl select-none">
                <span class="w-1/2" @click="showOrgRegAuth(false)" :class="{
                            'text-white': userStatus == 'CLIENT'
                        }" :style="{cursor: userStatus == 'CLIENT' ? 'default' : 'pointer'}">
                    Клиента</span>
                <span class="text-black"> | </span>
                <span class="w-1/2 ml-2" @click="showOrgRegAuth(true)" :class="{
                            'text-white': userStatus == 'ORGANIZER'
                        }" :style="{cursor: userStatus == 'ORGANIZER' ? 'default' : 'pointer'}">Организации </span>

            </div>
            <hr v-if="isRegister" color="" class="mb-5">
            <div class="text-xl w-full">
                <div v-if="isRegister">
                    <organ-register-form @register="createOrgan" :isOrgan="userStatus == 'ORGANIZER'"><span class="txt" @click="changeStateRegister(false)">или войти</span></organ-register-form>

                </div>
                <div v-else>
                    <organ-login-form @login="loginOrgan">
                        <span class="txt" @click="changeStateRegister(true)">или зарегистрироваться</span>
                    </organ-login-form>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import OrganRegisterForm from "@/components/OrganizerRegisterForm.vue";
import OrganLoginForm from "@/components/OrganizerLoginForm.vue";
import axios from "axios";
export default {
    components: {
        OrganRegisterForm,
        OrganLoginForm,
    },
    data() {
        return {
            organs: [],
            dialogRegStatus: false,
            dialogAuthStatus: false,
            userStatus: "CLIENT",
            isRegister: true
        };
    },
    methods: {
        createOrgan(organ) {
            this.organs.push(organ);
            axios
                .post("http://localhost:9090/register", {
                    name: organ.name,
                    phone: organ.phone,
                    email: organ.email,
                    password: organ.password,
                    role: this.userStatus,
                })
                .then((response) => {
                    console.log("Ответ сервера:", response.data);
                    if (this.userStatus == 'ORGANIZER') {
                        localStorage.setItem("token", response.data.token);
                        
                        this.$router.push('/organizer');
                    } else {
                        localStorage.setItem("token", response.data.token);

                        this.$router.push('/client');
                    }

                })
                .catch((error) => {
                    console.error("Ошибка при выполнении POST-запроса:", error);
                });
        },
        loginOrgan(organ) {
            
            axios
                .post("http://localhost:9090/login", {
                    email: organ.email,
                    password: organ.password,
                })
                .then((response) => {
                    
                    console.log("Ответ сервера:", response.data);
                    if (this.userStatus == 'ORGANIZER') {
                        localStorage.setItem("token", response.data.token);
                        
                        this.$router.push('/organizer');
                    } else {
                        localStorage.setItem("token", response.data.token);

                        this.$router.push('/client');
                    }
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении POST-запроса:", error);
                });
        },
        showOrgRegAuth(org) {
            this.userStatus = org ? "ORGANIZER" : "CLIENT";
        },

        changeStateRegister(register) {
            this.isRegister = register;
        },
    },
};
</script>

<style>
.txt {
    @apply text-gray-900 select-none text-right w-full cursor-pointer;
}
</style>
