<template>
    <div>
        <div>
            <div>{{ event.id }}</div>
        </div>
        
        <div>
            <div>{{ event.name }}</div>
        </div>
        <div> 
            <div>{{ event.parent_genre }}</div>
        </div>
        <div> 
            <div>{{ event.genre }}</div>
        </div>
        <div> 
            <div>{{ event.city }}</div>
        </div>
        <div> 
            <div>{{ event.location }}</div>
        </div>
        <div> 
            <div>{{ event.description }}</div>
        </div>
        <div> 
            <div>{{ event.date_time }}</div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>