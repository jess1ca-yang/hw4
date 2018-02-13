//A "musical instrument" inspired by notes on a music staff. 
//Play around with the 'A', 'S', 'D', 'F', 'G', & 'H' keys and the mouse to see what funky colors and sounds you make.
//mp3 files needed are in the repository 
//click to start! (note: the volume gets a little loud) 


var mySound;

function preload() {
  mySound = loadSound('assets/bubbles.mp3');
  sSound = loadSound('assets/clay.mp3');
  dSound = loadSound('assets/moon.mp3');
  fSound = loadSound('assets/piston-2.mp3');
  gSound = loadSound('assets/prism-2.mp3');
  hSound = loadSound('assets/dotted-spiral.mp3');
  clickSound = loadSound('squiggle/dotted-spiral.mp3');
}



function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  var counter = 10;
	while(counter <= 50) {
    line(0, counter, 400, counter)
    counter = counter + 10
  }
  var counter = 80;
  while(counter <= 120) {
    line(0, counter, 400, counter)
    counter = counter + 10
  }
  var counter = 150;
  while(counter <= 190) {
    line(0, counter, 400, counter)
    counter = counter + 10
  }
  var counter = 220;
  while(counter <= 260) {
    line(0, counter, 400, counter)
    counter = counter + 10
  }
  var counter = 290;
  while(counter <= 330) {
    line(0, counter, 400, counter)
    counter = counter + 10
  }
}

function mousePressed() {
  print("mouse is pressed");
  if (mouseIsPressed){
    var counter = 10;
	while(counter < 400) {
    fill(255, random(255), random(255), 20);
  stroke(255, random(255), random(255), 20);
     background(255, 255, 255, 70);
    ellipse(200, 200, counter, counter)
    counter = counter + 30;
    clickSound.play();
  }
}
}


function keyPressed() {
  print(key);
  if (key == 'A') {
    background(255, 255, 255, 10);
    stroke(255, random(255), random(255));
    fill(255, 255, random(360));
    ellipse(random(width), random(height), random(20, 40))
    mySound.play();
  } else if (key == 'S') {
    background(255, 255, 255, 10);
    stroke(255, random(255), random(255), 50);
    fill(255, random(360), 255);
    ellipse(random(width), random(height), random(50, 40))
    sSound.play();
  } else if (key == 'D') {
    background(255, 255, 255, 10);
   stroke(random(100), random(255), random(255), 50);
    fill(random(360), 255, 255);
    ellipse(random(width), random(height), random(10, 20))
    dSound.play();
  } else if (key == 'F') {
		background(255, 255, 255, 10);
    stroke(255, 100, random(360));
    fill(random(360), 255, 255);
    ellipse(random(width), random(height), random(20, 40))
    fSound.play();
  } else if (key == 'G') {
    background(255, 255, 255, 10);
    stroke(255, random(255), random(255));
    fill(random(360), 255, random(360));
      ellipse(random(width), random(height), random(60, 80))
    gSound.play();
  } else if (key == 'H') {
    background(255, 255, 255, 10);
    stroke(100, random(10), 255, 50);
    fill(255, random(50), random(100), 50);
      ellipse(random(width), random(height), random(20, 40))
    hSound.play();
  }
}





