let font

function setup() {
  createCanvas(400, 400, WEBGL);
}

function preload() {
font = loadFont('Inter-SemiBold.otf')

}

function draw() {
  background(220);
  
  textFont(font)
  textSize(80)
  textAlign(CENTER, CENTER)
  fill(0)
  
   let time = millis();
  rotateY(time / 1000);
  // rotateZ(time / 1234);  
  
  text('hello', 0, 0)
  
 
}