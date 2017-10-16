var t = 0;
var dt = 0.01;
var Sim;
var UI;

function setup() {
  createCanvas(windowWidth, windowHeight);
  statsContainer = createDiv("").parent("stats-holder");
  UI = new UserInterface();
  Sim = new UnitCircle();
  UI.createToggles();
  UI.createSliders();
  strokeCap(ROUND); //make end of lines not blocky
}

function draw() { 
  background("white");
  // noLoop();
  translate(windowWidth / 2, windowHeight / 2); // center the unit circle
  Sim.increment();
  t += dt;
  UI.updateSettings();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  UI.updateSettings();
  //  Sim.increment();
  // t += dt;
}

function UnitCircle() {
  this.styles = {
    line: { thin: 1, medium: 3, thick: 6 },
    color: {
      orbital: "hsl(286, 100%, 30%)",
      area: "hsl(263, 100%, 95%)", // of circle
      graph: "hsl(0, 0%, 40%)",
      cosine: "hsl(120, 100%, 40%)",
      sine: "hsl(240, 100%, 40%)"
    }
  };
  this.point = { x: 0, y: 0 };
  this.visible = { cosine: true, sine: true };
  this.running = true;
  this.amp = UI.amplitude.init || 0;
  this.frequency = UI.frequency.init || 0;
  this.numPoints = 150;
  this.waves = {
    spacing: 15,
    resolution: 150,
    numPoints: this.numPoints,
    xx: new Array(this.numPoints),
    yy: new Array(this.numPoints)
  };
  this.increment = function(){
    this.point.x = this.amp * cos(this.freq * t); // get x and y coords for point on circle
  this.point.y = this.amp * sin(this.freq * t);
  this.drawCircle();
this.drawAxes();
  this.drawTriangleLegs(); // draw the cos and sin lines
  this.drawHypotenuse(); // draw the orbiting hypotenuse
  if (this.visible.sine == true) {
    this.displayWave("sine");
  }
  if (this.visible.cosine == true) {
    this.displayWave("cosine");
  }
  }
  this.drawHypotenuse = function() {
    push();
    fill(this.styles.color.orbital);
    stroke(this.styles.color.orbital);
    strokeWeight(this.styles.line.thick);
    rotate(t * this.freq);
    line(0, 0, this.amp, 0);
    translate(this.amp, 0);
    ellipse(0, 0, 10, 10);
    pop();
  };

  this.drawAxes = function() {
    stroke(this.styles.color.graph);
    strokeWeight(this.styles.line.thin);
    line(0, windowHeight * 2, 0, -windowHeight * 2);
    line(windowWidth * 2, 0, -windowWidth * 2, 0);
  };
  this.drawTriangleLegs = function() {
    strokeWeight(this.styles.line.thin + 1);
    if (this.visible.sine == true) {
      stroke(this.styles.color.sine);
      line(this.point.x, 0, this.point.x, this.point.y);
    }
    if (this.visible.cosine == true) {
      stroke(this.styles.color.cosine);
      line(0, this.point.y, this.point.x, this.point.y);
    }
  };
  this.drawCircle = function() {
    noFill();
    fill(this.styles.color.area);
    stroke(this.styles.color.graph);
    strokeWeight(this.styles.line.thin);
    ellipse(0, 0, this.amp * 2);
  };

  this.displayWave = function(wave) {
    this.calcWave(wave);
    this.renderWave(wave);
    this.renderWaveHeader(wave);
  };

  this.calcWave = function(wave) {
    if (wave == "sine") {
      for (i = 0; i < 2 + this.waves.numPoints; i++) {
        this.waves.xx[i] = i * this.waves.spacing;
        this.waves.yy[i] =
          this.amp *
          Math.sin(this.waves.xx[i] / this.waves.resolution + this.freq * t);
      }
    }
    if (wave == "cosine") {
      for (i = 0; i < 2 + this.waves.numPoints; i++) {
        this.waves.xx[i] = i * this.waves.spacing;
        this.waves.yy[i] =
          this.amp *
          Math.cos(this.waves.xx[i] / this.waves.resolution + this.freq * t);
      }
    }
  };
  this.renderWave = function(wave) {
    push();
    noFill();
    stroke(this.styles.color[wave]);
    strokeWeight(this.styles.line.medium);
    beginShape();
    if (wave == "sine") {
      translate(this.amp, 1);
      for (var i = -1; i < 2 + this.waves.numPoints; i += 1) {
        curveVertex(this.waves.xx[i], this.waves.yy[i]);
      }
    }
    if (wave == "cosine") {
      translate(1, this.amp);
      for (var i = -1; i < 2 + this.waves.numPoints; i += 1) {
        curveVertex(this.waves.yy[i], this.waves.xx[i]);
      }
    }
    endShape();
    pop();
  };
  this.renderWaveHeader = function(wave) {
    push();
    strokeWeight(this.styles.line.medium - 1);
    fill(this.styles.color[wave]);
    stroke(this.styles.color[wave]);
    if (wave == "sine") {
      ellipse(this.amp, this.point.y, this.styles.line.medium * 3);
    }
    if (wave == "cosine") {
      ellipse(this.point.x, this.amp, this.styles.line.medium * 3);
    }
    pop();
  };
}

function UserInterface() {
  this.stats = "";
  this.amplitude = { min: 25, max: 360, init: 180 };
  this.frequency = { min: 0, max: 12, init: 4 };
  this.adjustingFrequency =false;
  this.createToggles = function() {
    sineButton = createDiv("toggle sine")
      .parent("button-holder")
      .class("button")
      .value("sine");
    cosineButton = createDiv("toggle cosine")
      .parent("button-holder")
      .class("button")
      .value("cosine");
    powerButton = createDiv("stop")
      .class("button")
      .parent("button-holder");
    sineButton.mousePressed(this.toggleWave);
    cosineButton.mousePressed(this.toggleWave);
    powerButton.mousePressed(this.togglePower);
  };
  this.createSliders = function() {
    ampSlider = createSlider(
      this.amplitude.min,
      this.amplitude.max,
      this.amplitude.init
    )
      .parent("slider-holder")
      .class("slider");
    freqSlider = createSlider(
      this.frequency.min,
      this.frequency.max,
      this.frequency.init
    )
      .parent("slider-holder")
      .class("slider")
      .mousePressed(this.changeFrequency)
      .mouseReleased(this.togglePower);
  };
this.changeFrequency = function (){
    Sim.running= false;
       powerButton.html("start");
    noLoop();
}
  this.toggleWave = function() {
    Sim.visible[this.elt.value] = !Sim.visible[this.elt.value];
  };
  this.togglePower = function() {
    Sim.running = !Sim.running;
    powerButton.html(Sim.running ? "stop" : "start");
    Sim.running ? loop() : noLoop();
  };
  this.updateSettings = function() {
    Sim.amp = ampSlider.value();
    Sim.freq = -freqSlider.value();
    this.updateStats();
  };
  this.updateStats = function() {
    this.stats = "<div class = 'formula'>&nbsp;&nbsp;&nbsp;y(t) = amp * sin(f*t)</div>";
    this.stats +=
      "<div class='equation'><div class='equation-left'>" +
      Sim.point.y.toFixed(0) * -1 +
      " </div><div class='equation-right'>&nbsp; = " +
      Sim.amp +
      " * [sin(" +
      Sim.freq * -1 +
      "*" +
      t.toFixed(1) +
      ")]" +
      "</div></div>";
    statsContainer.html(this.stats);
  };
}
