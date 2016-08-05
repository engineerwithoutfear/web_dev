// set dimensions 
var canvasHeight = 600;
var canvasWidth = 900;
// set angle
var theta = 0;
// bigger dtheta = faster animation
var dtheta = -0.01;
//set radius and amplitude
var amp = 100;
var freq = 5;
var t = 0;
var yvalues = [];
var toggleSpotsButton, showSpots;
var toggleWavesButton, showWaves;
var resolution = 1;
var resDiv = 1;
var alignX = 10;
var alignY = 25;

// setup the stuffs
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createToggles();
  spawnSliders();
}

// constantly redrawing all the things
function draw() {
  clear();
  //make end of lines not blocky
  strokeCap(ROUND);
  //circle business
  push();
  // center the canvas, a lil off to the left
  translate(canvasWidth / 2, canvasHeight / 3);
  // get x and y coords for point on circle at angle theta
  var x = amp * cos(freq * t + theta);
  var y = amp * sin(freq * t + theta);

  // draw the full circle
  drawCircle(amp);
  // draw the axes
  drawAxes();
  // decompose and draw the cos and sin lines + hypotenuse inside the circle
  drawDecomp(x, y);
  // draw the orbiting point
  drawOrbital(x, y);
  // draw the sine/cos waves off to the side
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

  //keep yvalues from becoming too long
  if (yvalues.length < Math.abs(TWO_PI / dtheta)) {
    console.log(TWO_PI / dtheta)
      //update yvalues
    yvalues.push(y);
  }
  // increment the angle and time
  theta += dtheta;
  t += .001;

  updateSettings(x, y);
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

function createToggles() {
  showSine = true;
  toggleSpotsButton = createButton('toggle    sine');
  toggleSpotsButton.position(alignX * 2, alignY);
  toggleSpotsButton.mousePressed(toggleSine);
  showCos = true;
  toggleWavesButton = createButton('toggle cosine');
  toggleWavesButton.position(alignX * 2, alignY * 2);
  toggleWavesButton.mousePressed(toggleCos);
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
  var ang = (freq * t + theta);
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = Math.sin(ang) * amp;
    ang += dtheta;
  }
}

function calcCosWave() {
  var ang = (freq * t + theta);
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
    curveVertex(x * resolution / resDiv, yvalues[x]);
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
    curveVertex(yvalues[x], x * resolution / resDiv);
  }
  endShape();
  pop();
}

function drawSineSpot(y, amp) {
  // draw sine-spot
  push();
  strokeWeight(6);
  stroke('green');
  point(amp, y);
  pop();
}

function drawCosSpot(x, amp) {
  //draw cos-spot
  push();
  strokeWeight(6);
  stroke('blue');
  point(x, amp);
  pop();
}

function spawnSliders() {
  push();
  ampSlider = createSlider(0, 200, amp);
  freqSlider = createSlider(0, 100, freq);
  //resolutionSlider = createSlider(1, 10, resolution);
  ampSlider.position(alignX, alignY * 13);
  freqSlider.position(alignX, alignY * 15);
  //resolutionSlider.position(alignX, alignY * 16);
  pop();
}

function updateSettings(x, y) {
  amp = ampSlider.value();
  freq = -freqSlider.value();
  //resolution = resolutionSlider.value();
  yOffset = -15;
  push();
  stroke('purple');
  text("amplitude: " + amp, alignX, alignY * 13 + yOffset);
  pop();
  push();
  stroke('orange');
  text("frequency: " + Math.abs(freq), alignX, alignY * 15 + yOffset);
  pop();
  //text("resolution", alignX, alignY * 16 + yOffset);
  text("y(t) = amplitude * [sin(frequency*t + theta)]", alignX, alignY * 18 + yOffset);
  console.log(amp)
  text(y.toFixed(2) * -1 + " = " + amp.toFixed(3) + " * [sin(" + freq.toFixed(3) * -1 + "*" + t.toFixed(3) + "+" + theta.toFixed(2) * -1 + ")]", alignX, alignY * 19 + yOffset);

}