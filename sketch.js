var rx = 100;
var ry = 100;
var rw = 50;
var rh = 50;
var speed = 2;
var ts = "";



var score = 0;
var doonce = 1;

var squarestate = 1;

rectMode(CORNER);

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(85);

  textSize(32);
  text(score, width/2, 32);

  textSize(32);
  text(ts, width/2, height/2);

fill(150);
rect(0, 330, 640, 200);
noStroke();


fill(255);
noStroke();






if(rx > 390 && rx < 590 && ry == 380){
if(doonce == 1 && squarestate == 1){
  background(85);
  ts = "Level Up";
  score++;
  doonce = 0;
}
squarestate = 0;
} else {

  if(squarestate == 1) {

    push();
    fill(255, 255, 0);
    rect(540, 330, rw, rh);
    rect(490, 330, rw, rh);
    rect(440, 330, rw, rh);
    rect(390, 330, rw, rh);
    rect(390, 380, rw, rh);
    rect(490, 380, rw, rh);
    rect(540, 380, rw, rh);
    pop();
    push();
    fill(150);
    rect(rx - 50, ry, rw, rh);
    rect(rx + 50, ry, rw, rh);
    rect(rx + 100, ry, rw, rh);
    rect(rx, ry - 50, rw, rh);
    rect(rx - 50, ry - 50, rw, rh);
    rect(rx + 50, ry - 50, rw, rh);
    rect(rx + 100, ry - 50, rw, rh);
    pop();
    }
  doonce = 1;
}




  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
      ry-=speed;
    }
    if(key == "a"){
      println("left");
      rx-=speed;
    }
    if(key == "s"){
      println("back");
      ry+=speed;

    }
    if(key == "d"){
      println("right");
      rx+=speed;
    }

    // if(keyCode == SHIFT){
    // speed = 10;
    // } else {
    //  speed = 1;
    // }
    }
  }
