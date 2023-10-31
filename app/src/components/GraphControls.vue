<script setup lang="ts">
    import { defineEmits } from 'vue';

    defineProps<{
        step: number;
    }>();

    const emit = defineEmits(['decreaseStep', 'increaseStep']);

    function decreaseStep() {
        emit ('decreaseStep');
    }

    function increaseStep() {
        emit('increaseStep');
    }

</script>

<template>
    <button @click="decreaseStep">-</button>
    {{ step }}
    <button @click="increaseStep">+</button>
</template>

<style scoped>
    button {
        width: 30px;
        height: 20px;
        margin: 5px;
        text-align: center;
    }
</style>