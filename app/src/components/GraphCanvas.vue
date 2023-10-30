<script setup lang="ts">
import { onMounted } from 'vue';
import { DrawingService } from '@/DrawingService.js';
defineProps<{
  width: number;
  height: number;
}>();

onMounted(() => {
  const canvas = document.getElementById('graph') as HTMLCanvasElement;
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(1, -1);

  const drawingService = new DrawingService(canvas, context);

  drawingService.drawGraph(-100, 100, 10);

  drawingService.drawSlope(9, -12, 10, {color: "red", width: 2});

});

</script>

<template>
  <canvas id="graph" width="500" height="500"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid black;
  width: 500px;
  height: 500px;
}
</style>