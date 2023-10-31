<script setup lang="ts">
import GraphCanvas from './components/GraphCanvas.vue'
import GraphControls from './components/GraphControls.vue'
import { ref } from 'vue';

const defaultStep = 10;
const step = ref(defaultStep);
const labelsOn = ref(true);


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


</script>

<template>
  <div class="container">
    <div class="graphContainer">
      <h2>Graph</h2>
      <div class="canvasWrapper">
        <GraphCanvas :labels-on="labelsOn" :step=step />
        <GraphControls :labelsOn="labelsOn" :step=step @decrease-step="decreaseStep" @increase-step="increaseStep" 
        @toggle-labels="toggleLabels"/>
      </div>
    </div>

    <div class="formulasContainer">
      <h2>Slope-Intercept Formulas</h2>
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
