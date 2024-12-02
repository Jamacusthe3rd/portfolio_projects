let palette_size = 40
let brush_size = 20
let paletteY = 30
let rgb = [0,0,0]

function setup() {
  createCanvas(1000, 800)
  background(255,255,255)
}

function draw() {
  //paints circles on the mouses location whenever the mouse button is clicked/held down
  if (mouseIsPressed) {
  noStroke()
  fill(rgb[0],rgb[1],rgb[2])
  circle(mouseX,mouseY,brush_size)
  }
  
  //palette area on the left side of the canvas
  stroke(0,0,0)
  fill(100,100,100)
  rect(0,0,50,800)
  //adds circles to the palette, representing colours for the brush
  fill(255,255,255)
  circle(25,paletteY,palette_size)
  fill(0,0,0)
  circle(25,paletteY+60,palette_size)
  fill(255,0,0)
  circle(25,paletteY+120,palette_size)
  fill(0,255,0)
  circle(25,paletteY+180,palette_size)
  fill(0,0,255)
  circle(25,paletteY+240,palette_size)

  //adds an example of what the brush will look like, in the bottom left
  noStroke()
  fill(rgb[0],rgb[1],rgb[2])
  circle(25,750,brush_size)
}

//checks if the mouse is on any of the colour choices
function mousePressed(){
  distance = dist(25, paletteY, mouseX, mouseY); 
  if(distance <= palette_size/2){
    rgb = [255,255,255]
  }
  distance = dist(25, paletteY+60, mouseX, mouseY); 
  if(distance <= palette_size/2){
    rgb = [0,0,0]
  }
  distance = dist(25, paletteY+120, mouseX, mouseY); 
  if(distance <= palette_size/2){
    rgb = [255,0,0]
  }
  distance = dist(25, paletteY+180, mouseX, mouseY); 
  if(distance <= palette_size/2){
    rgb = [0,255,0]
  }
  distance = dist(25, paletteY+240, mouseX, mouseY); 
  if(distance <= palette_size/2){
    rgb = [0,0,255]
  }
}

// uses the mouses scroll wheel to change the size of the brush when painting
function mouseWheel(event) {
  if (event.delta < 0) {
    if (brush_size<50) {
      brush_size += 1
    }
  } 
  else {
    if (brush_size>1) {
      brush_size += -1
    }
  }
}