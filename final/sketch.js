var backgroundColor = 100;
var gridSize;
var numberOfSqr = 20;
var marginX;
var marginY;
var balls = [];
var ballSpeed;
var ballSpeedUserInput = 1;
var draggingNewBall = false;
var notes = [];
var draggingNewNote = false;
var ballButton;
var noteButtonC;
var noteButtonD;
var noteButtonE;
var noteButtonF;
var noteButtonG;
var noteButtonA;
var noteButtonB;
var noteButtonCTwo;
var playIsOn = false;

let nameC;
let nameD;
let nameE;
let nameF;
let nameG;
let nameA;
let nameB;
let nameCTwo;
let upSlashC;
let upSlashD;
let upSlashE;
let upSlashF;
let upSlashG;
let upSlashA;
let upSlashB;
let upSlashCTwo;
let downSlashC;
let downSlashD;
let downSlashE;
let downSlashF;
let downSlashG;
let downSlashA;
let downSlashB;
let downSlashCTwo;

function preload () {
  nameC = loadImage('image/nameC.png');
  nameD = loadImage('image/nameD.png');
  nameE = loadImage('image/nameE.png');
  nameF = loadImage('image/nameF.png');
  nameG = loadImage('image/nameG.png');
  nameA = loadImage('image/nameA.png');
  nameB = loadImage('image/nameB.png');
  nameCTwo = loadImage('image/nameC2.png');
  upSlashC = loadImage('image/upSlashC.png');
  upSlashD = loadImage('image/upSlashD.png');
  upSlashE = loadImage('image/upSlashE.png');
  upSlashF = loadImage('image/upSlashF.png');
  upSlashG = loadImage('image/upSlashG.png');
  upSlashA = loadImage('image/upSlashA.png');
  upSlashB = loadImage('image/upSlashB.png');
  upSlashCTwo = loadImage('image/upSlashC2.png');
  downSlashC = loadImage('image/downSlashC.png');
  downSlashD = loadImage('image/downSlashD.png');
  downSlashE = loadImage('image/downSlashE.png');
  downSlashF = loadImage('image/downSlashF.png');
  downSlashG = loadImage('image/downSlashG.png');
  downSlashA = loadImage('image/downSlashA.png');
  downSlashB = loadImage('image/downSlashB.png');
  downSlashCTwo = loadImage('image/downSlashC2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSize = (width -200) / numberOfSqr;
  //create buttons
  ballButton = new BallButton();
  playButton = new PlayButton(100,75);
  noteButtonC = new NoteButtonC();
  noteButtonD = new NoteButtonD();
}



function draw() {
  background(backgroundColor);
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
  //update buttons
  ballButton.hover();
  ballButton.show();
  playButton.hover();
  playButton.show();
  noteButtonC.hover();
  noteButtonC.show();
  noteButtonD.hover();
  noteButtonD.show();
  //draw new objects on mouse during drag
  if (draggingNewBall){
    balls[balls.length - 1].moveOnMouseDuringNewDrag();
  }
  if (draggingNewNote){
    notes[notes.length - 1].moveOnMouseDuringNewDrag();
  }
  //show balls & balls interaction
  for (var i = 0; i < balls.length; i++) {
    balls[i].moveOnMouse();
    balls[i].show();
    if (playIsOn) {
      balls[i].move();
      balls[i].bounce();
    } else {
      balls[i].returnToReturnPosition();
      if(balls[i].dragging == false){
          balls[i].showDirectionLine();
      }
    }
  }
  //show note blocks
  for (var i = 0; i < notes.length; i++) {
    notes[i].moveOnMouse();
    notes[i].show();
  }
}

function mousePressed(){
  for (var i = 0; i < balls.length; i++) {
    balls[i].mouseOverBall();
  }
  for (var i = 0; i < notes.length; i++) {
    notes[i].mouseOverNote();
  }
  //initiate draggingNewBall
  if (dist(mouseX, mouseY, ballButton.x, ballButton.y) < ballButton.d/2){
    draggingNewBall = true;
    let b = new Ball(mouseX, mouseY);
    balls.push(b);
  }
  //initiate draggingNewNote for C
  if (dist(mouseX, mouseY, noteButtonC.x, noteButtonC.y) < noteButtonC.s/2){
    print("hey");
    draggingNewNote = true;
    let n = new NoteBlock(mouseX, mouseY);
    notes.push(n);
  }
  //toggle play on and off
  if (mouseX < playButton.x3 && mouseX > playButton.x1 && mouseY > playButton.y1 && mouseY < playButton.y2) {
    playIsOn = !playIsOn;
  }
}

function mouseReleased(){
  for (var i = 0; i < balls.length; i++) {
    balls[i].setDirection();
    balls[i].release();
    //don't allow user to place a ball on a square that's already occupied by a ball
    // for (var iOther = 0; iOther < balls.length; iOther++) {
    //   if (i !== iOther && dist(balls[iOther].x, balls[iOther].y, balls[i].x, balls[i].y) < gridSize/2 && balls[iOther].y > (balls[i].y - gridSize / 2) && balls[iOther].y < (balls[i].y + gridSize/2)) {
    //     print("CALLED");
    //     print(draggingNewBall);
    //     if(draggingNewBall == true) {
    //       draggingNewBall = false;
    //       print("should splice");
    //       splice(balls, balls.length - 1, 1);
    //     } else {
    //       balls[i].returnToReturnPosition();
    //       print("should return");
    //     }
    //   }
    // }
  }
  if (draggingNewBall == true){
    draggingNewBall = false;
    let grid = calculateGridPos(mouseX, mouseY);
    balls[balls.length - 1].xGrid = grid.x;
    balls[balls.length - 1].yGrid = grid.y;
    let pos = calculateXY(grid.x, grid.y)
    balls[balls.length - 1].x = pos.x;
    balls[balls.length - 1].y = pos.y;
    balls[balls.length - 1].setReturnPosition();
  }
  //for note blocks
  for (var i = 0; i < notes.length; i++) {
    notes[i].setDirection();
    notes[i].release();
  }
  if (draggingNewNote == true){
    draggingNewNote = false;
    let grid = calculateGridPos(mouseX, mouseY);
    notes[notes.length - 1].xGrid = grid.x;
    notes[notes.length - 1].yGrid = grid.y;
    let pos = calculateXY(grid.x, grid.y)
    notes[notes.length - 1].x = pos.x;
    notes[notes.length - 1].y = pos.y;
    // notes[notes.length - 1].setReturnPosition();
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
    balls[i].y = pos.y;
    balls[i].setReturnPosition();
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
    var grid = calculateGridPos(tempX, tempY);
    this.xGrid = grid.x;
    this.yGrid = grid.y;
    this.x = tempX;
    this.y = tempY;
    this.returnPositionX;
    this.returnPositionY;
    this.dragging = false;
    this.direction = 0;
  }
  mouseOverBall(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2){
      this.dragging = true;
    }
  }
  // intersects(other){
  //   if (dist(balls[other].x, balls[other].y, this.x, this.y) < gridSize/2 && balls[other].y > (this.y - gridSize / 2) && balls[other].y < (this.y + gridSize/2)){
  //     return true;
  //     print("true!");
  //   } else {
  //     return false;
  //   }
  // }
  setDirection(){
    // if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.returnPositionY - gridSize / 2) && mouseY < (this.returnPositionY + gridSize/2)){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.y - gridSize / 2) && mouseY < (this.y + gridSize/2)){
      if (this.direction <= 2){
        this.direction = this.direction + 1;
      } else {
        this.direction = 0;
      }
    }
  }
  moveOnMouse(){
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
      this.showDirectionLine();
    }
  }
  moveOnMouseDuringNewDrag(){
    this.x = mouseX;
    this.y = mouseY;
    this.showDirectionLine();
  }
  release(){
    if(this.dragging){
      this.dragging = false;
      var grid = calculateGridPos(mouseX, mouseY);
      this.xGrid = grid.x;
      this.yGrid = grid.y;
      var pos = calculateXY(grid.x, grid.y);
      this.x = pos.x;
      this.y = pos.y;
      this.setReturnPosition();
    }
  }
  setReturnPosition(){
    this.returnPositionX = this.x;
    this.returnPositionY = this.y;
  }
  bounce(){
    //bounces if moving right
    if (this.direction == 0) {
      for (var i = 0; i < notes.length; i++) {
        if((notes[i].y - gridSize/2) < this.y && this.y < (notes[i].y + gridSize/2) && notes[i].x <= this.x && this.x < (notes[i].x + gridSize/2)) {
          this.direction = 3;
        }
      }
    }
  }
  move(){
    ballSpeed = (gridSize/30)*ballSpeedUserInput;
    if (this.direction == 0) {
      this.x = this.x + ballSpeed;
    } else if (this.direction == 1) {
      this.y = this.y + ballSpeed;
    } else if (this.direction == 2) {
      this.x = this.x - ballSpeed;
    } else if (this.direction == 3) {
      this.y = this.y - ballSpeed;
    }
  }
  returnToReturnPosition(){
    this.x = this.returnPositionX;
    this.y = this.returnPositionY;
  }
  show(){
    fill(0);
    strokeWeight(1);
    ellipse(this.x, this.y, gridSize/4, gridSize/4);
    //print(this.x);
    //print(this.y);
  }
  showDirectionLine(){
    if (this.direction == 0) {
      strokeWeight(2);
      line(this.x, this.y, this.x + gridSize/2, this.y);
      line(this.x + gridSize/2, this.y, (this.x + gridSize/2) - 5, this.y - 5);
      line(this.x + gridSize/2, this.y, (this.x + gridSize/2) - 5, this.y + 5);
      this.show();
    } else if (this.direction == 1) {
      strokeWeight(2);
      line(this.x, this.y, this.x, this.y  + gridSize/2);
      line(this.x, this.y + gridSize/2, this.x + 5, (this.y + gridSize/2) - 5);
      line(this.x, this.y + gridSize/2, this.x - 5, (this.y + gridSize/2) - 5);
      this.show();
    } else if (this.direction == 2) {
      strokeWeight(2);
      line(this.x, this.y, this.x - gridSize/2, this.y);
      line(this.x - gridSize/2, this.y, (this.x - gridSize/2) + 5, this.y - 5);
      line(this.x - gridSize/2, this.y, (this.x - gridSize/2) + 5, this.y + 5);
      this.show();
    } else {
      strokeWeight(2);
      line(this.x, this.y, this.x, this.y  - gridSize/2);
      line(this.x, this.y - gridSize/2, this.x + 5, (this.y - gridSize/2) + 5);
      line(this.x, this.y - gridSize/2, this.x - 5, (this.y - gridSize/2) + 5);
      this.show();
    }
  }
}


class NoteBlock {
  constructor(tempX = mouseX, tempY = mouseY){
    var grid = calculateGridPos(tempX, tempY);
    this.xGrid = grid.x;
    this.yGrid = grid.y;
    this.x = tempX;
    this.y = tempY;
    this.returnPositionX;
    this.returnPositionY;
    this.dragging = false;
    this.upDirection = true;
  }
  mouseOverNote(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2){
      this.dragging = true;
    }
  }
  setDirection(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.returnPositionY - gridSize / 2) && mouseY < (this.returnPositionY + gridSize/2)){
      this.upDirection = !this.upDirection;
    }
  }
  moveOnMouse(){
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
    }
  }
  moveOnMouseDuringNewDrag(){
    this.x = mouseX;
    this.y = mouseY;
  }
  release(){
    if(this.dragging){
      this.dragging = false;
      var grid = calculateGridPos(mouseX, mouseY);
      this.xGrid = grid.x;
      this.yGrid = grid.y;
      var pos = calculateXY(grid.x, grid.y);
      this.x = pos.x;
      this.y = pos.y;
      // this.setReturnPosition();
    }
  }
  show(){
    image(upSlashC, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
  }
}


class BallButton {
  constructor() {
    this.x = 200;
    this.y = 100;
    this.d = 50;
    this.color = 0;
  }
  hover() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.d/2) {
      this.color = 50;
    } else {
      this.color = 0;
    }
  }
  show() {
    fill(this.color);
    strokeWeight(4);
    ellipse(this.x, this.y, this.d);
  }
}

class PlayButton {
  constructor(topLeftX, topLeftY){
    this.x1 = topLeftX;
    this.y1 = topLeftY;
    this.x2 = topLeftX;
    this.y2 = topLeftY + 50;
    this.x3 = topLeftX + 30;
    this.y3 = topLeftY + 25;
    this.colorR = 0;
    this.colorG = 150;
    this.colorB = 0;
  }
  hover() {
    var d = dist(this.x3, this.y3, mouseX, mouseY);
    if (mouseX < this.x3 && mouseX > this.x1 && mouseY > this.y1 && mouseY < this.y2) {
      this.colorR = 50;
      this.colorG = 200;
      this.colorB = 50;
    } else {
      this.colorR = 0;
      this.colorG = 150;
      this.colorB = 0;
    }
  }
  show(){
    fill(this.colorR, this.colorG, this.colorB);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

class NoteButtonC {
  constructor(){
    this.x = 300;
    this.y = 100;
    this.s = 50;
    this.color = backgroundColor;
  }
  hover() {
    if (mouseX > this.x - this.s/2 && mouseX < this.x + this.s/2 && mouseY > this.y - this.s/2 && mouseY < this.y + this.s/2) {
      this.color = backgroundColor + 50;
    } else {
      this.color = backgroundColor;
    }
  }
  show(){
    fill(this.color);
    strokeWeight(0);
    rectMode(CENTER);
    square(this.x, this.y, this.s);
    image(nameC, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonD {
  constructor(){
    this.x = 350;
    this.y = 100;
    this.s = 50;
    this.color = backgroundColor;
  }
  hover() {
    if (mouseX > this.x - this.s/2 && mouseX < this.x + this.s/2 && mouseY > this.y - this.s/2 && mouseY < this.y + this.s/2) {
      this.color = backgroundColor + 50;
    } else {
      this.color = backgroundColor;
    }
  }
  show(){
    fill(this.color);
    strokeWeight(0);
    rectMode(CENTER);
    square(this.x, this.y, this.s);
    image(nameD, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}
