<template>

<h1>Регистрация оргнизации</h1>
<div>
    <organ-form @add-organ="createOrgan" />


</div>
</template>

<script>
import OrganForm from './components/OrganizerForm.vue';
import axios from 'axios';
export default {
    components: {
        
        OrganForm
    },
    data() {
        return {
            organs: [
            ],

        }
    },
    methods: {
        createOrgan(organ) {
            axios.post('http://localhost:9090/register', {
                    'name': organ.name,
                    'phone': organ.phone,
                    'email': organ.email,
                    'password': organ.password,
                    'role' : 'ORGANIZER'
                })
                .then(response => {
                    console.log('Ответ сервера:', response.data);
                })
                .catch(error => {
                    console.error('Ошибка при выполнении POST-запроса:', error);
                });

        },

    }
}
</script>

<style>


h1 {
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px darkgreen;
    ;
    margin: 1% 0 1% 0;
    text-align: center;
}
</style>