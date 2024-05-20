<template>
    <div>
     <h1 className="underline">
      Hello world!
    </h1>
        <div class="reg-auth">
            <reg-auth-button @click="showOrgRegAuth(true)" :active="userStatus == 'ORGANIZER'"
                >Вы организация?</reg-auth-button
            >
            <reg-auth-button @click="showOrgRegAuth(false)" :active="userStatus == 'CLIENT'">
                Вы клиент?</reg-auth-button
            >
        </div>
        <div class="reg-auth" v-if="userStatus != null">
            <reg-auth-button class="" @click="showRegDialog"
                >Регистрация</reg-auth-button
            >
            <reg-auth-modal v-model:show="dialogRegStatus">
                <organ-register-form
                    @register="createOrgan"
                    :isOrgan="userStatus == 'ORGANIZER'"
                />
            </reg-auth-modal>

            <reg-auth-button class="" @click="showAuthDialog"
                >Авторизация</reg-auth-button
            >
            <reg-auth-modal v-model:show="dialogAuthStatus">
                <organ-login-form @login="loginOrgan" />
            </reg-auth-modal>
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
            userStatus: null,
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
                    role: "ORGANIZER",
                })
                .then((response) => {
                    console.log("Ответ сервера:", response.data);
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
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении POST-запроса:", error);
                });
        },
        showOrgRegAuth(org) {
            this.userStatus = org ? "ORGANIZER" : "CLIENT";
        },

        showRegDialog() {
            this.dialogRegStatus = true;
        },
        showAuthDialog() {
            this.dialogAuthStatus = true;
        },
    },
};
</script>

<!-- <style>

.background {
    background: radial-gradient(black, rgb(2, 41, 2));
    /* height: 100%; */
}

h1 {
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px darkgreen;

    margin: 1% 0 1% 0;
    text-align: center;
}

.btnReg {
    margin-top: 3%;
    padding: 20px;
    text-align: center;
    /* font-size: 70px; */
    background-color: rgb(29, 70, 29);
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-radius: 60px;
    border: 2px solid rgb(59, 153, 59);
}

.reg-auth {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
</style> -->
