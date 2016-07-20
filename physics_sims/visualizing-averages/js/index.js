// set dimensions 
var canvasHeight = 500;
var canvasWidth = 600;
// set default min, max, average, rectWidth
var theMin = 100;
var theMax = 300;
var theAverage = (theMax + theMin) / 2;
var rectWidths = 100;
var fontSize = 15;
var textOffset = rectWidths / 3;

function setup() {

  createCanvas(canvasWidth, canvasHeight);

  // create sliders and set default fontsize
  spawnSliders();
  textSize(fontSize);

}

function draw() {
  clear();
  // update values
  updateBars();
  //draw the small fellow
  drawSmall();
  // label the small fellow
  labelSmall();
  offset += rectWidths;
  //draw the average fellow
  drawAverage();
  // label the average fellow
  push();
  labelAverage();
  pop();
  offset += rectWidths;
  //draw the large fellow
  push();
  drawLarge();
  pop();
  // label the large fellow
  push();
  labelLarge();
  pop();
  //label the sliders
  labelSliders();
}

function Bar(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

function spawnSliders() {
  minSlider = createSlider(0, 450, theMin);
  minSlider.position(400, 20);
  maxSlider = createSlider(0, 450, theMax);
  maxSlider.position(400, 50);

}

function labelSliders() {
  var sliderAlignment = 320;
  fill(rectSmall.color);
  text("min: " + theMin, sliderAlignment, 30);
  fill(rectLarge.color);
  text("max: " + theMax, sliderAlignment, 60);
  fill(rectAverage.color);
  text("average: (" + theMin + "+" + theMax + ")/2 = " + theAverage, sliderAlignment, 90);
}

function updateBars() {

  offset = 0;
  theMin = minSlider.value();
  theMax = maxSlider.value();

  theAverage = (theMax + theMin) / 2;
  rectSmall = new Bar(rectWidths, theMin, 'blue');
  rectLarge = new Bar(rectWidths, theMax, 'red');
  rectAverage = new Bar(rectWidths, theAverage, 'purple');
}

function drawSmall() {
  fill(rectSmall.color);
  rect(offset, 0, rectSmall.x, rectSmall.y);
}

function labelSmall() {
  fill('black');

  text("min", offset + textOffset, rectSmall.y + textOffset);
}

function labelAverage() {
  fill('black');
  rectMode(CENTER);
  text("   (min + max)", offset, rectAverage.y + textOffset);
  text("   _________", offset, rectAverage.y + textOffset * 1.2);
  text("            2", offset, rectAverage.y + textOffset * 1.8);
}

function drawAverage() {
  fill(rectAverage.color);
  rect(offset, 0, rectAverage.x, rectAverage.y)
}

function drawLarge() {
  fill(rectLarge.color);
  rect(offset, 0, rectLarge.x, rectLarge.y)
}

function labelLarge() {
  fill('black');
  text("max", offset + textOffset, rectLarge.y + textOffset);
}