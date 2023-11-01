<script setup lang="ts">
    import FormulaItem  from './FormulaItem.vue'
    defineProps<{
        formulas: {m: number, b: number, color: string}[]
    }>()

    const emits = defineEmits(['addFormula', 'updateColor', 'removeFormula'])

    function addFormula() {
        emits('addFormula');
    }

    function updateColor(color: string, index: number) {
        emits('updateColor', color, index);
    }

    function removeFormula(index: number) {
        emits('removeFormula', index);
    }

</script>

<template>
    <div v-for="(formula, index) in formulas" :key="index">
        <FormulaItem :formula="formula" 
            @update-color="updateColor($event, index)"
            @remove-formula="removeFormula(index)" />
    </div>
    <v-btn class="add" @click="addFormula()">Add Formula</v-btn>
</template>

<style scoped>
    .add {
        margin:20px 10px;
        font-size: 1rem;
    }
</style>