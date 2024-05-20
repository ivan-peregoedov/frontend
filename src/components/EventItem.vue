<template>
    <tr
        class="bg-zinc-800 border-b text-white  transition duration-300 ease-in-out hover:bg-zinc-950 w-full"
    >
        <td>
            {{ event.name }}
        </td>
        <td>
            {{ event.parent_genre }}
        </td>
        <td>
            {{ event.genre }}
        </td>
        <td>
            {{ event.city }}
        </td>
        <td>
            {{ event.location }}
        </td>
        <td :title="event.description" :style="{maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}">
            {{ event.description.length > 150 ? event.description.slice(0, 150) + '...' : event.description }}
        </td>
        <td>
            {{ event.date_time }}
        </td>
        <td>
            <button
                type="button"
                @click="$emit('showTickets', event)"
                class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Посмотреть все билеты
            </button>
        </td>
        <td class="p-3 px-5 flex justify-end">
            <button
                type="button"
                @click="$emit('edit', event)"
                class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Изменить
            </button>
            <button
                type="button"
                @click="$emit('delete', event)"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Удалить
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
td {
    @apply text-sm font-bold px-6 py-4 whitespace-nowrap max-w-48;
}
</style>