// set dimensions
var canvasHeight = 600;
var canvasWidth = 900;
// line widths scale off this base unit
var lineW = 2;
// set initial time and angle
var t = 0;
// time increment
var dt = .001;
//set initial radius/amplitude and frequency
var amp = 100;
var freq = 10;
// permits these vars to be accessed by all functions
var x, y;
var timeStopped, oldFreq;
var toggleSpotsButton, showSpots;
var toggleWavesButton, showWaves;
// for graphing the waves
var res = 45;
var noOfPoints = 90;
var xx = new Array(noOfPoints);
var yy = new Array(noOfPoints);
// text alignment business
var alignX = 10;
var alignY = 25;

// setup the stuffs
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);  
  createToggles();
  spawnSliders();
}


// constantly redrawing all the things
function draw() {
  background(255);
  //make end of lines not blocky
  strokeCap(ROUND);
  //circle business
  push();
  // center the unit circle
  translate(width / 2, height / 3);
  // get x and y coords for point on circle at a given time
  x = amp * cos(freq * t);
  y = amp * sin(freq * t);
  // draw the full circle
  drawCircle(amp);
  // draw the axes
  drawAxes();
  // decompose and draw the cos and sin lines + orbiting hypotenuse inside the circle
  drawDecomp(x, y);
  // calc and render the sine and cosine waves if requested
  strokeWeight(lineW-1);
  if (showSine == true) {
    calcSineWave();
    renderSineWave();
    drawSineSpot(y, amp);
  }
  if (showCos == true) {
    calcCosWave();
    renderCosWave();
    drawCosSpot(x, amp);
  }
  pop();
  // increment the angle and time
  t += dt;
  updateSettings(x, y);
}

function drawCircle(amp) {
  noFill();
  fill(235);
  stroke('black');
  strokeWeight(1);
  ellipse(0, 0, amp * 2);
}

function drawAxes() {
  stroke('black');
  strokeWeight(1);
  line(0, height * 2, 0, -height * 2);
  line(width * 2, 0, -width * 2, 0);
}

function drawDecomp(x, y) {
  //cos
  if (showCos == true) {
    strokeWeight(lineW-1);
    stroke('blue');
    line(0, y, x, y);
  }
  // sine
  if (showSine == true) {
    stroke('green');
    line(x, 0, x, y);
  }
  drawOrbital();
}

function drawOrbital(x, y) {
  push();
  fill('purple');
  stroke('purple');
  strokeWeight(lineW+2);
  rotate(t * freq);
  line(0, 0, amp, 0);
  translate(amp, 0);
  ellipse(0, 0, 10, 10);
  pop();
}
function calcSineWave() {
  for (i=0;i<(2+noOfPoints);i++){
    xx[i] = i*5;
    yy[i] = amp*Math.sin(xx[i]/res+freq*t);
  }
}

function calcCosWave() {
  for (i=0;i<(2+noOfPoints);i++){
    xx[i] = i*5;
    yy[i] = amp*Math.cos(xx[i]/res+freq*t);
  }
}

function renderSineWave() {
  push();
  translate(amp, 1);
  noFill();
  stroke('green');
  beginShape();
  for (var i = -1; i< (2+noOfPoints); i += 1) {
    curveVertex(xx[i],yy[i]);
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
  for (var i = -1; i< (2+noOfPoints); i += 1) {
    curveVertex(yy[i],xx[i]);
  }
  endShape();
  pop();
}

function drawSineSpot(y, amp) {
  // draw sine-spot
  push();
  fill('green');  
  ellipse(amp, y, lineW * 3);
  pop();
}

function drawCosSpot(x, amp) {
  //draw cos-spot
  push();
  fill('blue');
  ellipse(x, amp, lineW* 3);
  pop();
}

function updateSettings(x, y) {
  amp = ampSlider.value();
  freq = -freqSlider.value();
  yOffset = -15;
  push();
  text("amplitude: " + amp, alignX, alignY * 13 + yOffset);
  pop();
  push();
  text("frequency: " + Math.abs(freq), alignX, alignY * 15 + yOffset);
  pop();
  text("amplitude * sin(frequency*t) = y(t)", alignX, alignY * 18 + yOffset);
  text(amp + " * [sin(" + freq * -1 + "*" + t.toFixed(2) + ")]"  + " = " +y.toFixed(0) * -1 , alignX, alignY * 19 + yOffset);
}

function spawnSliders() {
  push();
  ampSlider = createSlider(0, 200, amp);
  freqSlider = createSlider(0, 100, freq);
  ampSlider.position(alignX, alignY * 13);
  freqSlider.position(alignX, alignY * 15);
  pop();
}

function createToggles() {
  showSine = true;
  toggleSpotsButton = createButton('toggle    sine');
  toggleSpotsButton.position(alignX * 2, alignY);
  toggleSpotsButton.mousePressed(toggleSine);
  showCos = true;
  toggleWavesButton = createButton('toggle cosine');
  toggleWavesButton.position(alignX * 2, alignY * 2);
  toggleWavesButton.mousePressed(toggleCos);
  running = true;
  onoff = createButton('stop');
  onoff.position(alignX * 2, alignY * 3);
  onoff.mousePressed(turnonoff);
}

function toggleSine() {
  if (showSine) {
    showSine = false;
  } else {
    showSine = true;
  }
}

function toggleCos() {
  if (showCos) {
    showCos = false;
  } else {
    showCos = true;
  }
}

function stopEverything() {
  dt = 0.00;
  t = 0;
  timeStopped = t;  
}

function startEverything() {
  dt = 0.001;
}

function turnonoff() {
  // and of course it's nice to be able to stop it if things get crazy
  if (!running) {
    running = true;
    loop();
    onoff.html("stop");
    return
  }

  if (running) {
    running = false;
    noLoop()
    onoff.html("start");
    return
  }

}