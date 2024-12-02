//loads image (to be made transparent for the texture 
function preload() {
  texture= loadImage("images/texture1.JPG")
}
function setup() {
  createCanvas(500, 500);
}

//draws the circles making up the image.
function draw() {
  background(255,0,0);
  fill(255,255,0);
  circle(250,250,400)
  fill(0,0,255)
  circle(250,250,300)
  stroke(0,0,0,0)
  fill(255,255,0);
  circle(250,250,200)
  fill(0,0,255)
  circle(250,250,100)
  tint(255,100)//alpha (the 2nd value in the brackets) sets the opacity/transparency.
  image(texture,0,0,500,500)//loads the image for the texture.
}