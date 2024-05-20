<template>
<div>
    <div class="organs" v-for="organ in organs" :key="organ.id">
        <div>id
            <div>{{ organ.id }}</div>
        </div>
        <div>Название организации
            <div>{{ organ.name }}</div>
        </div>
        <div>Номер телефона
            <div>{{ organ.phone }}</div>
        </div>
        <div>Почтовый адрес
            <div>{{ organ.email }}</div>
        </div>
        <div>Пароль
            <div>{{ organ.password }}</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    props: {
        organs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.organs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    background-color: #fff;
    margin: 20px auto;
    width: 50%;
    padding: 2%;
    border: 10px solid green;
    text-align: center;
}
</style>
