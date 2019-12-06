var gridSize;
var numberOfSqr = 20;
var halfGrid = gridSize / 2;
var marginX;
var marginY;
var balls = [];
var ballButton;

function preload () {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSize = (width -200) / numberOfSqr;
  balls[0]  = new Ball(4, 4);
}



function draw() {
  background(100);
  // draw grid
  marginX = (width - (numberOfSqr*gridSize))/2;
  marginY = (height - (numberOfSqr*gridSize))/3;
  for (var x = 0; x <= numberOfSqr; x ++) {
    for (var y = 0; y <= numberOfSqr/2; y ++) {
      strokeWeight(4);
      stroke(255);
      noFill();
      rectMode(CENTER);
      rect(100 + x*gridSize, 200 + y*gridSize, gridSize, gridSize);
    }
  }
  //draw buttons
  ballButton = new BallButton();
  ballButton.hover();
  ballButton.show();
  //show balls & balls interaction
  for (var i = 0; i < balls.length; i++) {
    balls[i].show()
    balls[i].moveOnMouse();
  }
}

function mouseClicked(){

}

function mousePressed(){
  for (var i = 0; i < balls.length; i++) {
    balls[i].mouseOverBall();
  }
  ballButton.mouseOverButton();
}

function mouseReleased(){
  for (var i = 0; i < balls.length; i++) {
    balls[i].release();
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gridSize = (width -200) / numberOfSqr;
  for (var i = 0; i < balls.length; i++) {
    var x = balls[i].xGrid;
    var y = balls[i].yGrid;
    var pos = calculateXY(x, y);
    balls[i].x = pos.x;
    balls[i].y = pos.y
  }
}

function calculateGridPos(x, y){
  var tempX;
  if(x < 100){
    tempX = 0;
  } else if(x > width-100){
    tempX = numberOfSqr;
  } else{
    tempX = round((x -100)/gridSize);
  }
  var tempY;
  if(y < 200){
    tempY  = 0;
  } else if(y > 200 + (numberOfSqr/2) * gridSize){
    tempY  = numberOfSqr/2;
  } else{
    tempY = round((y - 200)/gridSize);
  }
  return {x:tempX, y:tempY};
}

function calculateXY(x, y){
  var tempX = 100 + x*gridSize;
  var tempY = 200 + y*gridSize;
  return {x:tempX, y:tempY};
}





class Ball {
  constructor(tempX, tempY){
    var pos = calculateXY(tempX, tempY);
    this.x = pos.x;
    this.y = pos.y;
    this.xGrid = tempX;
    this.yGrid = tempY;
    this.dragging = false;
  }

  mouseOverBall(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2){
      this.dragging = true;
    }
  }

  release(){
    if(this.dragging){
      this.dragging = false;
      var grid = calculateGridPos(mouseX, mouseY);
      var pos = calculateXY(grid.x, grid.y);
      this.x = pos.x;
      this.y = pos.y;
    }
  }

  moveOnMouse(){
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
    }

  }
  show(){
    fill(0);
    strokeWeight(1);
    ellipse(this.x, this.y, 15, 15);
  }
}



class BallButton {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.d = 50;
    this.color = 0;
    this.dragging = false;
  }
  mouseOverButton(){
    if(dist(mouseX, mouseY, this.x, this.y) < this.d/2){
      balls.push(new Ball());
      balls[balls.length - 1].x = this.x;
      balls[balls.length - 1].y = this.y;
      print(this.dragging);
    }
  }

  hover() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.d/2) {
      this.color = 50;
    }
  }
  show() {
    fill(this.color);
    strokeWeight(4);
    ellipse(this.x, this.y, this.d);
  }
}
