let x, y, speedX, speedY;
let paddleX, paddleY;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  speedX = 2
  speedY = 1
  paddleX = 20;
  paddleY = height/2 - 50;
}

function draw() {
  paddleY = mouseY
  background(222)
  noStroke()
  fill(255, 0, 0)
  rect(x, y, 10, 10)
  
  rect(paddleX, paddleY, 10, 100)
  x += speedX;
  y += speedY;
  if(x > width -25) {
    speedX *= -1
  }
  if(paddleY  <= 0) {
    paddleY = 0
  }
  if(paddleY  > height -100) {
    paddleY = height - 100
  }
  // 
  if(x + 10 > paddleX &&
    x < paddleX + 10 &&
    y + 10 > paddleY &&
    y < paddleY + 100 
    )  {
    speedX *= -1
  }
  if(y > height - 10 ) {
    speedY *= -1
  }
  if(y  < 10  - 10 ) {
    speedY *= -1
  }
}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    paddleY -= 20
  }
  if(keyCode === RIGHT_ARROW) {
    paddleY += 20
  }
}
