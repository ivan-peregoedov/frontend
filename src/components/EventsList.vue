<template>
<div>
    <h1 class="text-center text-4xl text-white py-5">Ваши мероприятия</h1>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-green-800 text-white-200 border-b">
                            <tr class="text-sm font-medium text-white text-left">
                                <th scope="col" class="px-6 py-4">
                                    Название
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Тип мероприятия
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Жанр
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Город
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Локация
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Описание
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    Дата проведения
                                </th>
                                <th scope="col" class="px-6 py-4"></th>
                                <th scope="col" class="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody class="items-center justify-between overflow-y-scroll w-full"  style="height: 20vh;">
                            <event-item class="events" v-for="event in events" :key="event.id" :event="event"/>
                            <tr
                                class="bg-zinc-800 text-black border-b transition duration-300 ease-in-out hover:bg-zinc-950 w-full"
                            >
                                <td>
                                    <input type="text">
                                </td>
                                <td>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>{{ events[0].parent_genre }}</option>
                                        <option v-for="type_ in uniqueTypesEvent.slice(1)" :key="type_" :value="type_">{{ type_ }}</option>                                 
                                    </select>
                                </td>
                                <td>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>{{ genresEvent[0] }}</option>
                                        <option v-for="genre in genresEvent.slice(1)" :key="genre" :value="genre">{{ genre }}</option>                                 
                                    </select>
                                </td>
                                <td>
                                    <input>
                                </td>
                                <td>
                                    <input>
                                </td>
                                <td>
                                    <textarea> </textarea>
                                </td>
                                <td>
                                    <input type="datetime-local">
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        @click="$emit('showTickets', event)"
                                        class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Создать
                                    </button>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import EventItem from './EventItem.vue'
export default {
  components: { EventItem },
    props: {
        events: {
            type: Array,
        }
    },
    data(){
        return {
            uniqueTypesEvent:[],
            genresEvent: [
                "Рок", "Спорт", "Балет"
            ]
        }
    },
    mounted(){
        this.uniqueTypesEvent = [...new Set(this.events.map(event => event.parent_genre))]
    }

}
</script>

<style scoped>
input {
    @apply pl-2
}
</style>