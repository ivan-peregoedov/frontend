<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'reg-auth-button'
}
</script>

<style>
.btn {
    margin-top: 3%;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    background-color: rgb(29, 70, 29);
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-radius: 60px;
    border: 2px solid rgb(59, 153, 59);
}

.btn:hover {
    background: radial-gradient(black, rgb(2, 41, 2));
    color: rgb(59, 153, 59);
}
</style>
