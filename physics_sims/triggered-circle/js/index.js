// set dimensions 
var canvasHeight = 600;
var canvasWidth = 900;
// set angle
var theta = 0;
// bigger dtheta = faster animation
var dtheta = 0.01;
//set radius and amplitude
var amp = 150;
// other minor bits and pieces
var yvalues = [];
var toggleSpotsButton, showSpots;
var toggleWavesButton, showWaves;
var resolution = 1;

// setup the stuffs
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createToggles();
  frameRate(60);
}

// constantly redrawing all the things
function draw() {
  clear();
  //make end of lines not blocky
  strokeCap(ROUND);

  //circle business
  // center the canvas, a lil off to the left
  translate(canvasWidth / 3, canvasHeight / 3);
  // get x and y coords for point on circle at angle theta
  var x = amp * cos(theta);
  var y = amp * sin(theta);

  // draw the full circle
  drawCircle(amp);
  // draw the axes
  drawAxes();
  // decompose and draw the cos and sin lines + hypotenuse inside the circle
  drawDecomp(x, y);
  // draw the orbiting point
  drawOrbital(x, y);
  // draw the sine/cos waves off to the side
  if (showWaves == true) {
    calcSineWave();
    renderSineWave();
    calcCosWave()
    renderCosWave()
  }
  // draw the external spots that trace the sin/cos
  if (showSpots == true) {
    drawSpots(x, y, amp);
  }
  //keep yvalues from becoming too long
  if (yvalues.length < (TWO_PI/dtheta)) {
    console.log(TWO_PI/dtheta)
    //update yvalues
    yvalues.push(y);
  }
  // increment the angle and time
  theta += dtheta;
}

function toggleSpots() {
  if (showSpots) {
    showSpots = false;
  } else {
    showSpots = true;
  }
}

function toggleWaves() {
  if (showWaves) {
    showWaves = false;
  } else {
    showWaves = true;
  }
}

function createToggles() {
  showSpots = true;
  toggleSpotsButton = createButton('hide ur spots');
  toggleSpotsButton.position(25, 25);
  toggleSpotsButton.mousePressed(toggleSpots);
  showWaves = true;
  toggleWavesButton = createButton('hide ur waves');
  toggleWavesButton.position(25, 50);
  toggleWavesButton.mousePressed(toggleWaves);
}

function drawAxes() {
  stroke('black');
  strokeWeight(1);
  line(0, canvasHeight * 2, 0, -canvasHeight * 2);
  line(canvasWidth * 2, 0, -canvasWidth * 2, 0);
}

function drawCircle(amp) {
  noFill();
  fill(235);
  stroke('black');
  ellipse(0, 0, amp * 2);
}

function drawOrbital(x, y) {
  stroke('purple');
  fill('purple');
  ellipse(x, y, 10, 10);
}

function drawDecomp(x, y) {
  // hypotenuse
  strokeWeight(4);
  stroke('purple');
  line(0, 0, x, y);
  // cosine
  strokeWeight(1);
  stroke('blue');
  line(0, y, x, y);
  // sine
  stroke('green');
  line(x, 0, x, y);
}

function calcSineWave() {
  var ang = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = Math.sin(ang) * amp;
    ang += dtheta;
  }
}

function calcCosWave() {
  var ang = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = Math.cos(ang) * amp;
    ang += dtheta;
  }
}

function renderSineWave() {
  push();
  translate(amp, 1);
  noFill();
  stroke('green');
  beginShape();
  for (var x = 0; x < yvalues.length; x += 1) {
    curveVertex(x * resolution, yvalues[x]);
  }
  endShape();
  pop();
}

function renderCosWave() {
  push();
  translate(1, amp);
  noFill();
  stroke('blue');
  beginShape();
  for (var x = 0; x < yvalues.length; x += 1) {
    curveVertex(yvalues[x], x * resolution);
  }
  endShape();
  pop();
}

function drawSpots(x, y, amp) {
  // draw sine-spot
  push();
  strokeWeight(6);
  stroke('green');
  point(amp, y);
  pop();
  //draw cos-spot
  push();
  strokeWeight(6);
  stroke('blue');
  point(x, amp);
  pop();
}