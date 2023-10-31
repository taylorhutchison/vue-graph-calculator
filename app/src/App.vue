<script setup lang="ts">
import GraphCanvas from './components/GraphCanvas.vue'
import GraphControls from './components/GraphControls.vue'
import { ref } from 'vue';

const defaultStep = 10;
const step = ref(defaultStep);


function decreaseStep() {
  if(step.value > 1) {
    step.value = step.value - 1;
  }
}

function increaseStep() {
  if(step.value < 20) {
    step.value = step.value + 1;
  }
}

</script>

<template>
  <div class="container">
    <div class="graphContainer">
      <h2>Graph</h2>
      <div class="canvasWrapper">
        <GraphCanvas :step=step />
        <GraphControls :step=step @decrease-step="decreaseStep" @increase-step="increaseStep"/>
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
