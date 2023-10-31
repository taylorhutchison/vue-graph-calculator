<script setup lang="ts">
import { onMounted, onBeforeUpdate } from 'vue'
import { DrawingService } from '@/DrawingService.js'

const props = defineProps<{
  step: number
  labelsOn: boolean
}>()

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

function drawCanvas() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);

  const size =
    canvas.parentElement!.offsetWidth < canvas.parentElement!.offsetHeight
      ? canvas.parentElement!.offsetWidth
      : canvas.parentElement!.offsetHeight

  canvas.width = size
  canvas.height = size

  context.translate(canvas.width / 2, canvas.height / 2)
  context.scale(1, -1)

  const drawingService = new DrawingService(canvas, context)

  drawingService.drawGraph(canvas.width, canvas.height, props.step, props.labelsOn)

  drawingService.drawSlope(9, -12, 10, { color: 'red', width: 2 })
}

onBeforeUpdate(() => {
  drawCanvas();
})

onMounted(() => {
  canvas = document.getElementById('graph') as HTMLCanvasElement
  context = canvas.getContext('2d') as CanvasRenderingContext2D
  drawCanvas();
});
</script>

<template>
  <canvas id="graph"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
