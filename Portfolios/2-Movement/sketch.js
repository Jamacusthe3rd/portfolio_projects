let x_pos = -1000
let y_pos = -1000
let x_vel = 0
let y_vel = 0
let max_speed = 3
let size = 5
//let delay = 0
function setup() {
  createCanvas(500, 500)
  background(50,50,50)
}

function draw() {
  console.log(x_pos)
  console.log(y_pos)

  //controlled movement. uses a velocity variable to create a more complex movement for a sprite. (not just up down left right. also takes a bit of inertia into account, a bit like moving on ice)
  // if (keyIsDown(RIGHT_ARROW) === true){
  //   x_vel += 0.1
  // }
  // if (keyIsDown(LEFT_ARROW) === true){
  //   x_vel -= 0.1
  // }
  // if (keyIsDown(UP_ARROW) === true){
  //   y_vel -= 0.1
  // }
  // if (keyIsDown(DOWN_ARROW) === true){
  //   y_vel += 0.1
  // }

  //random movement
  let x_move_change = random(-1,1)
  let y_move_change = random(-1,1)
  

  x_vel += x_move_change
  y_vel += y_move_change


  //limit on speed
  if (x_vel > max_speed) {
    x_vel = max_speed
  }
  if (x_vel < -max_speed) {
    x_vel = -max_speed
  }
  if (y_vel > max_speed) {
    y_vel = max_speed
  }
  if (y_vel < -max_speed) {
    y_vel = -max_speed
  }
  
  x_pos = x_pos + x_vel
  y_pos = y_pos + y_vel
  circle(x_pos,y_pos,size)

  //reset and recolour if coordinates reach corner of screen
  if (x_pos > 500) {
    x_pos = 250
    y_pos = 250
    x_vel = 0
    y_vel = 0
    colour = [0,0,random(100,255)]
    stroke(colour)
    fill(colour)
  }
  if (x_pos < 0) {
    x_pos = 250
    y_pos = 250
    x_vel = 0
    y_vel = 0
    colour = [0,0,random(100,255)]
    stroke(colour)
    fill(colour)
  }
  if (y_pos > 500) {
    x_pos = 250
    y_pos = 250
    x_vel = 0
    y_vel = 0
    colour = [0,0,random(100,255)]
    stroke(colour)
    fill(colour)
  }
  if (y_pos < 0) {
    x_pos = 250
    y_pos = 250
    x_vel = 0
    y_vel = 0
    colour = [0,0,random(100,255)]
    stroke(colour)
    fill(colour)
  }

  //random colour remover. empties random areas of the screen after a number of draw loops occour (currently 100)
  // delay += 1
  // if (delay === 100) {
  //   fill(50,50,50)
  //   stroke(50,50,50)
  //   circle(random(50,950),random(50,350),100)
  //   delay = 0
  // }
}