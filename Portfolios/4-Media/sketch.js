
let slide = 1;

//noLoop() ensures the draw function does not automatically loop. 
//This was a simple way of stopping the audio from looping multiple times simultaniously.
//it also means the computer doesn't have to reload the same image constantly.
function setup() {
  createCanvas(1500, 1100);
  noLoop()
}

//giving a variable name to each of the images and audios
function preload() {
  img1 = loadImage('images/slide1.jpeg')
  img2 = loadImage('images/slide2.jpeg')
  img3 = loadImage('images/slide3.jpeg')
  img4 = loadImage('images/slide4.jpeg')
  img5 = loadImage('images/slide5.jpeg')
  img6 = loadImage('images/slide6.jpeg')
  img7 = loadImage('images/slide7.jpeg')
  img8 = loadImage('images/slide8.jpeg')
  img9 = loadImage('images/slide9.jpeg')
  audio1 = loadSound('audios/audio1.wav')
  audio2 = loadSound('audios/audio2.wav')
  audio3 = loadSound('audios/audio3.wav')
  audio4 = loadSound('audios/audio4.wav')
  audio5789 = loadSound('audios/audio5789.wav')
  audio6 = loadSound('audios/audio6.wav')
}

//draws an image and loops a corresponding audio . Also stops whatever previous audio was playing
function draw() {
  background(220);
  console.log (slide)

  if (slide == 1){
    audio2.stop()
    image(img1,0,0,1500,1100)
    audio1.loop()
  }
  if (slide == 2){
    audio1.stop()
    audio3.stop()
    image(img2,0,0,1500,1100)
    audio2.loop()
  }
  if (slide == 3){
    audio2.stop()
    audio4.stop()
    image(img3,0,0,1500,1100)
    audio3.loop()
  }
  if (slide == 4){
    audio3.stop()
    audio5789.stop()
    image(img4,0,0,1500,1100)
    audio4.loop()
  }
  if (slide == 5){
    audio4.stop()
    audio6.stop()
    image(img5,0,0,1500,1100)
    audio5789.loop()
  }
  if (slide == 6){
    audio5789.stop()
    image(img6,0,0,1500,1100)
    audio6.loop()
  }
  if (slide == 7){
    audio6.stop()
    audio5789.stop()
    image(img7,0,0,1500,1100)
    audio5789.loop()
  }
  if (slide == 8){
    image(img8,0,0,1500,1100)
  }
  if (slide == 9){
    image(img9,0,0,1500,1100)
  }
}

//changes the value of the variable 'slide' depending on which arrow key is pressed
function keyPressed(){
  //the (9 > slide) here locks the user on the final slide. Reasoning behind this in the readme.md file
  if (keyCode === LEFT_ARROW && 9 > slide && slide>1){
    slide = slide - 1
    redraw()
  }
  if (keyCode === RIGHT_ARROW && slide < 9){
    slide = slide + 1
    redraw()
  }
  //redraw() causes the draw funtion to be called once. 
  //this means the screen (image and audio) gets updated only when a key is pressed
  //if redraw was here, then whenever any key was pressed, the screen would redraw but still be on the same slide, and the audio would begin playing multiple times simultaniously.
  //so the redraw() was moved, to happen only when a left or right arrow key was pressed, solving the issue.
}