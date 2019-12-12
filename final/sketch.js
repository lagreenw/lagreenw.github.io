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
let trash;

let noteCSound;
let noteDSound;
let noteESound;
let noteFSound;
let noteGSound;
let noteASound;
let noteBSound;
let noteC2Sound;

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
  trash = loadImage('image/trash.png');
  soundFormats('mp3');
  noteCSound = loadSound('sound/noteCSound.mp3');
  noteDSound = loadSound('sound/noteDSound.mp3');
  noteESound = loadSound('sound/noteESound.mp3');
  noteFSound = loadSound('sound/noteFSound.mp3');
  noteGSound = loadSound('sound/noteGSound.mp3');
  noteASound = loadSound('sound/noteASound.mp3');
  noteBSound = loadSound('sound/noteBSound.mp3');
  noteC2Sound = loadSound('sound/noteC2Sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSize = (width -200) / numberOfSqr;
  //create buttons
  ballButton = new BallButton();
  playButton = new PlayButton(100,75);
  noteButtonC = new NoteButtonC();
  noteButtonD = new NoteButtonD();
  noteButtonE = new NoteButtonE();
  noteButtonF = new NoteButtonF();
  noteButtonG = new NoteButtonG();
  noteButtonA = new NoteButtonA();
  noteButtonB = new NoteButtonB();
  noteButtonCTwo = new NoteButtonCTwo();
  trashButton = new TrashButton();
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
  noteButtonE.hover();
  noteButtonE.show();
  noteButtonF.hover();
  noteButtonF.show();
  noteButtonG.hover();
  noteButtonG.show();
  noteButtonA.hover();
  noteButtonA.show();
  noteButtonB.hover();
  noteButtonB.show();
  noteButtonCTwo.hover();
  noteButtonCTwo.show();
  trashButton.hover();
  trashButton.show();
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
      balls[i].returnToReturnDirection();
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
  //notes have number values in order of pitch
  //C - 0
  //D - 1
  //E - 2
  //F - 3
  //G - 4
  //A - 5
  //B - 6
  //C (octave) - 7
  //initiate draggingNewNote for C
  if (dist(mouseX, mouseY, noteButtonC.x, noteButtonC.y) < noteButtonC.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(0, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for D
  if (dist(mouseX, mouseY, noteButtonD.x, noteButtonD.y) < noteButtonD.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(1, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for E
  if (dist(mouseX, mouseY, noteButtonE.x, noteButtonE.y) < noteButtonE.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(2, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for F
  if (dist(mouseX, mouseY, noteButtonF.x, noteButtonF.y) < noteButtonF.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(3, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for G
  if (dist(mouseX, mouseY, noteButtonG.x, noteButtonG.y) < noteButtonG.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(4, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for A
  if (dist(mouseX, mouseY, noteButtonA.x, noteButtonA.y) < noteButtonA.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(5, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for B
  if (dist(mouseX, mouseY, noteButtonB.x, noteButtonB.y) < noteButtonB.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(6, mouseX, mouseY);
    notes.push(n);
  }
  //initiate draggingNewNote for C (octave)
  if (dist(mouseX, mouseY, noteButtonCTwo.x, noteButtonCTwo.y) < noteButtonCTwo.s/2){
    draggingNewNote = true;
    let n = new NoteBlock(7, mouseX, mouseY);
    notes.push(n);
  }
  //toggle play on and off
  if (mouseX < playButton.x3 && mouseX > playButton.x1 && mouseY > playButton.y1 && mouseY < playButton.y2) {
    playIsOn = !playIsOn;
  }
}

//does this actually do anything??
function touchStarted (){
  if (getAudioContext().state !== 'running'){
    getAudioContext.resume();
  }
}

function mouseReleased(){
  for (var i = 0; i < balls.length; i++) {
    if(mouseX > (trashButton.x - trashButton.s/2) && mouseX < (trashButton.x + trashButton.s/2) && mouseY > (trashButton.y - trashButton.s/2) && mouseY < (trashButton.y + trashButton.s/2)){
      //is there a way to add "|| draggingNewBall" and not have it break?
      if(balls[i].dragging){
        print(balls[i].dragging);
        print(draggingNewBall);
        balls.splice(i, 1);
      }
    } else {
      balls[i].setDirection();
      balls[i].release();
    }
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
    if(mouseX > (trashButton.x - trashButton.s/2) && mouseX < (trashButton.x + trashButton.s/2) && mouseY > (trashButton.y - trashButton.s/2) && mouseY < (trashButton.y + trashButton.s/2)){
      if(notes[i].dragging){
        print(notes[i].dragging);
        print(draggingNewNote);
        notes.splice(i, 1);
      }
    } else {
      notes[i].setDirection();
      notes[i].release();
    }
  }
  if (draggingNewNote == true){
    draggingNewNote = false;
    let grid = calculateGridPos(mouseX, mouseY);
    notes[notes.length - 1].xGrid = grid.x;
    notes[notes.length - 1].yGrid = grid.y;
    let pos = calculateXY(grid.x, grid.y)
    notes[notes.length - 1].x = pos.x;
    notes[notes.length - 1].y = pos.y;
    notes[notes.length - 1].setReturnPosition();
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
  for (var i = 0; i < notes.length; i++) {
    var x = notes[i].xGrid;
    var y = notes[i].yGrid;
    var pos = calculateXY(x, y);
    notes[i].x = pos.x;
    notes[i].y = pos.y;
    notes[i].setReturnPosition();
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
    this.returnDirection = 0;
    this.moveTimerOn = false;
    this.moveTimer = 0;
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
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.returnPositionY - gridSize / 2) && mouseY < (this.returnPositionY + gridSize/2)){
    // if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.y - gridSize / 2) && mouseY < (this.y + gridSize/2)){
      if (this.direction <= 2){
        this.direction = this.direction + 1;
        this.returnDirection = this.returnDirection + 1;
      } else {
        this.direction = 0;
        this.returnDirection = 0;
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
    if(!this.moveTimerOn){
      //bounces if moving right
      if (this.direction == 0) {
        for (var i = 0; i < notes.length; i++) {
          if((notes[i].y - gridSize/2) < this.y && this.y < (notes[i].y + gridSize/2) && notes[i].x <= this.x && this.x < (notes[i].x + gridSize/2)) {
            notes[i].playNote();
            if(notes[i].upDirection){
              this.direction = 3;
              this.moveTimerOn = true;
            } else {
              this.direction = 1;
              this.moveTimerOn = true;
            }
          }
        }
      } else
      //bounces if moving down
      if (this.direction == 1) {
        for (var i = 0; i < notes.length; i++) {
          if((notes[i].x - gridSize/2) < this.x && this.x < (notes[i].x + gridSize/2) && notes[i].y <= this.y && this.y < (notes[i].y + gridSize/2)) {
            notes[i].playNote();
            if(notes[i].upDirection){
              this.direction = 2;
              this.moveTimerOn = true;
            } else {
              this.direction = 0;
              this.moveTimerOn = true;
            }
          }
        }
      } else
      //bounces if moving left
      if (this.direction == 2) {
        for (var i = 0; i < notes.length; i++) {
          if((notes[i].y - gridSize/2) < this.y && this.y < (notes[i].y + gridSize/2) && notes[i].x >= this.x && this.x > (notes[i].x - gridSize/2)) {
            notes[i].playNote();
            if(notes[i].upDirection){
              this.direction = 1;
              this.moveTimerOn = true;
            } else {
              this.direction = 3;
              this.moveTimerOn = true;
            }
          }
        }
      } else
      if (this.direction == 3) {
        for (var i = 0; i < notes.length; i++) {
          if((notes[i].x - gridSize/2) < this.x && this.x < (notes[i].x + gridSize/2) && notes[i].y >= this.y && this.y > (notes[i].y - gridSize/2)) {
            notes[i].playNote();
            if(notes[i].upDirection){
              this.direction = 0;
              this.moveTimerOn = true;
            } else {
              this.direction = 2;
              this.moveTimerOn = true;
            }
          }
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
    if(this.moveTimerOn){
      if (this.moveTimer < 16) {
        this.moveTimer = this.moveTimer + 1;
      } else {
        this.moveTimerOn = false;
        this.moveTimer = 0;
      }
    }
  }
  returnToReturnPosition(){
    this.x = this.returnPositionX;
    this.y = this.returnPositionY;
  }
  returnToReturnDirection(){
    this.direction = this.returnDirection;
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
  constructor(note, tempX = mouseX, tempY = mouseY){
    var grid = calculateGridPos(tempX, tempY);
    this.xGrid = grid.x;
    this.yGrid = grid.y;
    this.x = tempX;
    this.y = tempY;
    this.returnPositionX;
    this.returnPositionY;
    this.dragging = false;
    this.upDirection = true;
    this.note = note;
  }
  mouseOverNote(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2){
      this.dragging = true;
    }
  }
  setDirection(){
    if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.returnPositionY - gridSize / 2) && mouseY < (this.returnPositionY + gridSize/2)){
    //if(dist(mouseX, mouseY, this.x, this.y) < gridSize/2 && mouseY > (this.y - gridSize / 2) && mouseY < (this.y + gridSize/2)){
        this.upDirection = !this.upDirection;
    }
  }
  setReturnPosition(){
    this.returnPositionX = this.x;
    this.returnPositionY = this.y;
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
      this.setReturnPosition();
    }
  }
  playNote(){
    if(this.note == 0){
      noteCSound.play();
    }
    if(this.note == 1){
      noteDSound.play();
    }
    if(this.note == 2){
      noteESound.play();
    }
    if(this.note == 3){
      noteFSound.play();
    }
    if(this.note == 4){
      noteGSound.play();
    }
    if(this.note == 5){
      noteASound.play();
    }
    if(this.note == 6){
      noteBSound.play();
    }
    if(this.note == 7){
      noteC2Sound.play();
    }
  }
  show(){
    if (this.upDirection == true) {
      if (this.note == 0){
        image(upSlashC, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 1){
        image(upSlashD, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 2){
        image(upSlashE, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 3){
        image(upSlashF, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 4){
        image(upSlashG, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 5){
        image(upSlashA, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 6){
        image(upSlashB, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 7){
        image(upSlashCTwo, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      }
    } else {
      if (this.note == 0){
        image(downSlashC, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 1){
        image(downSlashD, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 2){
        image(downSlashE, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 3){
        image(downSlashF, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 4){
        image(downSlashG, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 5){
        image(downSlashA, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 6){
        image(downSlashB, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      } else
      if (this.note == 7){
        image(downSlashCTwo, this.x - gridSize/2, this.y - gridSize/2, gridSize, gridSize);
      }
    }
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

class NoteButtonE {
  constructor(){
    this.x = 400;
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
    image(nameE, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonF {
  constructor(){
    this.x = 450;
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
    image(nameF, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonG {
  constructor(){
    this.x = 500;
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
    image(nameG, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonA {
  constructor(){
    this.x = 550;
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
    image(nameA, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonB {
  constructor(){
    this.x = 600;
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
    image(nameB, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class NoteButtonCTwo {
  constructor(){
    this.x = 650;
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
    image(nameCTwo, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}

class TrashButton {
  constructor(){
    this.x = 750;
    this.y = 100;
    this.s = 70;
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
    image(trash, this.x - this.s*.5, this.y - this.s*.5, this.s, this.s);
  }
}
