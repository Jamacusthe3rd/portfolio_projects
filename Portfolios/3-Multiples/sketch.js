//creates array
let balls = []

function setup() {
  createCanvas(400, 400);
  background(220);
  fill(200,200,0)
  noStroke()
}


function draw() {
  background(220)
  //loops for the number of balls there are.
  for (i=0;i<balls.length;i+=4){
    //fetches the previous colour of each ball so when redrawn, they are the same colour.
    fill(balls[i+3])
    //fetches the previous position of each ball so when redrawn, they are the in the same place but moved down a little.
    balls[i+1] += 1

    //draws circle 
    //      x_pos     y_pos     ball_size
    circle(balls[i],balls[i+1],balls[i+2])
    //if ball is below the canvas:
    if (balls[i+1]>450){
      //x_pos changed to a random value within the canvas space.
      balls[i] = random(20,380)
      //y_pos changed to a value just above the canvas space
      balls[i+1] = random(-40,-20)
    }
  }
}
// when a key is pressed:
function keyPressed() {
  //add a set of values for a new ball to the balls array
  //             x_pos          y_pos        ball_size   colour: R             G         B        A
  balls.push(random(20,380),random(-40,-20),random(5,20),[random(50,200),random(50,200),255,random(50,150)])
}