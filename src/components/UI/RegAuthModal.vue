<template>
<div class="dialog" v-if="show">
    <div class="dialog_content">
        <span class="close" @click.stop="closeDialog">&#10005;</span>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'reg-auth-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDialog() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style>
.dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.dialog_content {
    border-radius: 12px;
    background: radial-gradient(black, rgb(2, 41, 2));
    ;
    /* min-height: 50px;
        min-width: 300px; */
    padding: 20px;
    text-align: center;
    width: 30%;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: rgb(255, 255, 255);
}
</style>
