// ball catch

var ballx =300;
var bally = 300;
var ballSize =40;
var score =0;
var gameState = "L1";
var img, img2, img3, bg1, bg2, bg3;

// TIMER VARIABLES
var cheeseTimer = 0;
var cheeseMaxTime = 5;  
var cheeseAlpha = 255;

function preload() {
  
bg1 = loadImage('https://goddddos.github.io/grass.jpeg')
bg2 = loadImage('https://goddddos.github.io/trip1.jpeg')
bg3 = loadImage('https://goddddos.github.io/trip2.jpeg')
  img = loadImage('https://goddddos.github.io/boom.jpg');
  img2 = loadImage('https://goddddos.github.io/blueshroom.png')
  img3 = loadImage('https://goddddos.github.io/mouse.png')
   //img4 = loadImage()
}

function setup() {
  
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
} // end of setup


function draw() {
  
  
  updateCheeseTimer(); //fade timer
background(bg1);
if(gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "win"){
  winGame();
}
text(("score: " + score), width/2, 40); 

{
noCursor();
image(img3, mouseX - 20, mouseY - 20, 40, 40); 

}

//  timer

function resetCheese() {
  cheeseTimer = millis();
  cheeseAlpha = 255;
}

function updateCheeseTimer() {
  let elapsed = (millis() - cheeseTimer) / 1000;  // seconds

  let fade = map(elapsed, 0, cheeseMaxTime, 255, 20); 
  cheeseAlpha = constrain(fade, 20, 255);

  if (elapsed >= cheeseMaxTime) {
    // Cheese "disappears" and moves automatically
    ballx = random(width);
    bally = random(height);
    resetCheese();
  }
}


} // end of draw

function levelOne(){
  text("level 1", width/2, height -20);
  
  cheeseMaxTime = .5;
  
 let distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
  ballx = random(width);
  bally=random(height);
  score = score +1; 
  
  }
  if(score>=5){
    gameState = "L2"
    background(bg1);
  }
  
  image(img2, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} //end of level 1 

function levelTwo(){
  background(bg2);
  text("level 2", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
  ballx = random(width);
  bally=random(height);
  score = score +1; 
  
  }
  if(score>=10){
    gameState = "L3";
    
    background(bg2);
  }
  
  image(img2, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  
} //end of level 2 


function levelThree(){
  background(bg3);
  text("level 3", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
  ballx = random(width);
  bally=random(height);
  score = score +1; 
  ballSize = ballSize -8;
  
  }
  
  if(score>=15){
  gameState = "win";
 
    
  }
  
  image(img2, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  
} //end of level 3 

function winGame(){
  textSize(60)
  text("You Won yippie", width/2, height /2);
  
} //end win game
