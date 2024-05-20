<template>

    <input :value="modelValue" @input="updateInput" :type="inputType" :maxlength="maxLength">

</template>

<script>
export default {
    name: 'reg-auth-input',
    props: {
        modelValue: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            required: true
        }
    },

    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style>
input {
    padding: 10px;
    /* margin-bottom: 20px; */
    margin: 5px 0 20px 0;
    /* margin: 1%; */
    font-size: 20px;
    border-radius: 20px;

}
</style>
