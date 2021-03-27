score = 0;
var pipes = []
var bird, birdImage;
var bgImage;
var pipesImage, pipesReversedImage;

function preload(){
  birdImage = loadImage("bird.png");
  bgImage = loadImage("bg.png");
  pipesImage = loadImage("pipes.png");
  pipesReversedImage = loadImage("pipesReversed.png");
}

function setup() {
  createCanvas(400, 500);
  bird = new Bird();
 pipes.push(new Pipe());
}

function draw() {
  background(bgImage);
  fill(200, 0, 0);
  textSize(32);
  text(score/2, 50, 50);
    
   for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
		
    if (pipes[i].hits(bird)) {
      score = 0;
    }else if(frameCount%100 == 0){
      score = score + 1;
    } 
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)

    }
  }
  
  
  bird.show();
  bird.update();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());

  }
  
  if (score == 1) {
    score += 1
}
      }

function keyPressed() {
  if (key == ' ') {
    //console.log("w is pressed");
    bird.up();
  }

}