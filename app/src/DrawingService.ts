export class DrawingService {

  constructor(private canvas: HTMLCanvasElement, private context: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.context = context
  }

  drawGraph(
    xrange: number,
    yrange: number,
    step: number
  ) {
    // Set the line style for the grid lines
    this.context.strokeStyle = '#bbb'
    this.context.lineWidth = 1

    const xMin = -xrange;
    const xMax = xrange;
  
    // Draw the vertical grid lines
    for (let x = xMin; x <= xMax; x += step) {
      const xPos = x * (this.canvas.width / (xMax - xMin))
      this.context.beginPath()
      this.context.moveTo(xPos, -this.canvas.height / 2)
      this.context.lineTo(xPos, this.canvas.height / 2)
      this.context.stroke()
    }

    const yMin = -yrange;
    const yMax = yrange;
  
    // Draw the horizontal grid lines
    for (let y = yMin; y <= yMax; y += step) {
      const yPos = y * (this.canvas.height / (yMax - yMin))
      this.context.beginPath()
      this.context.moveTo(-this.canvas.width / 2, yPos)
      this.context.lineTo(this.canvas.width / 2, yPos)
      this.context.stroke()
    }
  
    // Set the line style for the axes
    this.context.strokeStyle = 'black'
    this.context.lineWidth = 2
  
    // Draw the x-axis
    this.context.beginPath()
    this.context.moveTo(-this.canvas.width / 2, 0)
    this.context.lineTo(this.canvas.width / 2, 0)
    this.context.stroke()
  
    // Draw the y-axis
    this.context.beginPath()
    this.context.moveTo(0, -this.canvas.height / 2)
    this.context.lineTo(0, this.canvas.height / 2)
    this.context.stroke()
  }
  
  drawSlope(slope: number, yIntercept: number, step: number, lineStyle: { color: string; width: number }) {
      yIntercept = yIntercept / (step != 0 ? step : 1);
      slope = slope / (step != 0 ? step : 1);
  
      const startX = 0 - this.canvas.width / 2;
      const startY = yIntercept + slope * startX;
      const endX = this.canvas.width;
      const endY = slope * endX + yIntercept;
      
      // Set the line style and draw the line
      this.context.strokeStyle = lineStyle.color;
      this.context.lineWidth = lineStyle.width;
      this.context.beginPath();
      this.context.moveTo(startX, startY);
      this.context.lineTo(endX, endY);
      this.context.stroke();
  }


}


