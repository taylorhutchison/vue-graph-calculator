<script setup lang="ts">
import GraphCanvas from './components/GraphCanvas.vue'
import GraphControls from './components/GraphControls.vue'
import FormulaList from './components/FormulaList.vue'
import { ref } from 'vue';

const defaultStep = 10;
const step = ref(defaultStep);
const labelsOn = ref(true);

const formulas = ref([{m: 2, b: 3, color: '#f00'}, {m: 3, b: 4, color: '#0f0'}, {m: 4, b: 5, color: '#00f'}]);


function decreaseStep() {
  if(step.value > 2) {
    step.value = step.value - 2;
  }
}

function increaseStep() {
  if(step.value < 20) {
    step.value = step.value + 2;
  }
}

function toggleLabels() {
 labelsOn.value = !labelsOn.value;
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addFormula() {
  const randomColor = '#' + Math.floor(Math.random()*(16777215/8)).toString(16).padEnd(6, '0');
  formulas.value = [...formulas.value, ({m: randomNumber(1, 10), b: randomNumber(0, 10), color: randomColor}) ];
}

function updateColor(color: string, index: number) {
  formulas.value[index].color = color;
}

function removeFormula(index: number) {
  formulas.value.splice(index, 1);
}


</script>

<template>
  <div class="container">
    <div class="graphContainer">
      <h2>Graph</h2>
      <div class="canvasWrapper">
        <GraphCanvas :labels-on="labelsOn" :step=step :formulas="formulas" />
        <GraphControls :labelsOn="labelsOn" :step=step @decrease-step="decreaseStep" @increase-step="increaseStep" 
        @toggle-labels="toggleLabels"/>
      </div>
    </div>

    <div class="formulasContainer">
      <h2>Slope-Intercept Formulas</h2>
      <FormulaList :formulas="formulas" @add-formula="addFormula()" 
        @update-color="($event, index) => updateColor($event, index)"
        @remove-formula="removeFormula($event)"/>
    </div>


  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin:10px;
  height: 100%;
}
.graphContainer {
  height: 100%;
  h2 {
    height: 30px;
  }
  .canvasWrapper {
    height: calc(100% - 40px);
    width: calc(100% - 30px);
  }
}
</style>
