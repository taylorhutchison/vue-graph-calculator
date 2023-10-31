<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{
  step: number
  labelsOn: boolean
}>()

const emit = defineEmits(['decreaseStep', 'increaseStep', 'toggleLabels'])

function decreaseStep() {
  emit('decreaseStep')
}

function increaseStep() {
  emit('increaseStep')
}

function toggleLabels() {
  emit('toggleLabels')
}

</script>

<template>
  <div class="control-container">
    <div>
    <button @click="decreaseStep">-</button>
    {{ step }}
    <button @click="increaseStep">+</button>
    </div>

    <div>
      <input type="checkbox" id="step" :checked="labelsOn" @click="toggleLabels" />
      <label for="step">Labels</label>
    </div>
  </div>
</template>

<style scoped>
.control-container {
    display: flex;
}
button {
  width: 30px;
  height: 20px;
  margin: 5px;
  text-align: center;
}
input[type='checkbox'] {
  width: 20px;
  height: 20px;
  margin: 5px;
}
label {
    height: 20px;
    line-height:10px;
}
</style>
