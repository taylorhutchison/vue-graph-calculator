<script setup lang="ts">
import type { SlopeFormula } from '@/types';
import { defineProps } from 'vue'

defineProps<{
  formula: SlopeFormula
}>()

const emits = defineEmits(['updateColor', 'toggleVisibility', 'removeFormula'])

function backgroundColor(color: string) {
    return `background-color: ${color}`
}

function updateColor(color: string) {
    emits('updateColor', color);
}

function toggleVisibility() {
    emits('toggleVisibility');
}

function removeFormula() {
    emits('removeFormula');
}

</script>

<template>
  <div class="formula">
    <span>Y = <input type="text" :value="formula.m" />X + <input type="text" :value="formula.b" /></span>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <span class="colorSelect" :style="backgroundColor(formula.color)" v-bind="props"></span>
      </template>
      <v-color-picker @update:model-value="updateColor($event)"/>
    </v-menu>
    <v-btn density="compact" class="formulaAction" @click="toggleVisibility">{{ formula.visible ? 'Hide' : 'Show' }}</v-btn>
    <v-btn density="compact" class="formulaAction" @click="removeFormula">Remove</v-btn>
  </div>
</template>

<style scoped>
.formula {
  display: flex;
  margin: 10px;
  font-size: 1.5rem;
}
.formulaAction {
    margin-left: 10px;
    font-size:0.75rem;
}
input {
  width: 20px;
  text-align: center;
  font-size: 1.5rem;
}
.colorSelect {
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 1px solid black;
}
</style>
