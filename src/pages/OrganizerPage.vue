<template>
    <div class="bg-gradient-to-b from-zinc-800 via-green-800 to-green-700 h-screen w-screen">
        <div>
            <Events v-model="events" :events="events"/>
        </div>

        <button class="btn">Создать</button>
        
    </div>

</template>

<script>
import Events from '@/components/EventsList.vue'
import axios from 'axios'
export default {
    components: {
        Events,
    },
    data() {
        return {
            events: [
                {
                    id : 1,
                    name: 'Концерт Мумий тролль', 
                    parent_genre: 'Концерт',
                    genre: 'Рок',
                    city: 'Владивосток',
                    location: 'Владивосток 2000',
                    description: 'Концерт Мумий тролля в Владивостоке. ВЛАДИВОСТОК 2000',
                    date_time: '2024-06-21 21:00:00',
                    tickets: 10
                    
                },
                {
                    id : 2,
                    name: 'Сибирь - Авангард', 
                    parent_genre: 'Другое',
                    genre: 'Спорт',
                    city: 'Новосибирск',
                    location: 'Сибирь Арена',
                    description: 'Матч Сибирь - Авангард в Новосибирске',
                    date_time: '2024-12-11 18:00:00'
                },
                {
                    id : 3,
                    name: 'Щелкунчик', 
                    parent_genre: 'Театр',
                    genre: 'Балет',
                    city: 'Новосибирск',
                    location: 'НОВАТ',
                    description: 'Известный балетист в Новосибирске',
                    date_time: '2024-06-11 19:00:00'
                },

            ],
        }
    }

}
</script>

<style>

</style>