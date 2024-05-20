<template>
<div>
    <h1>Ваши мероприятия</h1>
    <div class="events">
        <div>
            <div>ID</div>
        </div>
        
        <div>
            <div>Название</div>
        </div>
        <div> 
            <div>Тип мероприятия</div>
        </div>
        <div> 
            <div>Жанр</div>
        </div>
        <div> 
            <div>Город</div>
        </div>
        <div> 
            <div>Локация</div>
        </div>
        <div> 
            <div>Описание</div>
        </div>
        <div> 
            <div>Дата проведения</div>
        </div>
        <div> 
            <div>Билеты</div>
        </div>
    </div>
    <div>
        <event-item class="events" v-for="event in events" :key="event.id" :event="event"/>
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
    }

}
</script>

<style>
.events {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    
    width: 50%;
    padding: 2%;
    border: 1px solid green;
    text-align: center;
}
h1{
    font-size: 30px;
    color: #fff;
}
</style>
