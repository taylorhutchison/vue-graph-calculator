<script setup lang="ts">
import type { SlopeFormula } from '@/types'
import FormulaItem from './FormulaItem.vue'
defineProps<{
  formulas: SlopeFormula[]
}>()

const emits = defineEmits(['addFormula', 'updateColor', 'removeFormula', 'toggleVisibility'])

function addFormula() {
  emits('addFormula')
}

function updateColor(color: string, index: number) {
  emits('updateColor', color, index)
}

function removeFormula(index: number) {
  emits('removeFormula', index)
}

function toggleVisibility(index: number) {
  emits('toggleVisibility', index)
}
</script>

<template>
  <div v-for="(formula, index) in formulas" :key="index">
    <FormulaItem
      :formula="formula"
      @update-color="updateColor($event, index)"
      @remove-formula="removeFormula(index)"
      @toggle-visibility="toggleVisibility(index)"
    />
  </div>
  <v-btn class="add" @click="addFormula()">Add Formula</v-btn>
</template>

<style scoped>
.add {
  margin: 20px 10px;
  font-size: 1rem;
}
</style>
