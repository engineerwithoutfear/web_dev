function setup() {
  canvasWidth = 500;
  canvasHeight = 300;
  rampWidth = canvasWidth;
  canvas = createCanvas(canvasWidth, canvasHeight);
  cofKinetic = .6; // kinetic friction
  cofStatic = .4; // static friction
  m = 5; // mass of block
  w = 40; // width
  h = 30; // height
  g = 9.8; //gravity
  rh = 0; // initial ramp height
  mu = cofStatic; // initial friction setting
  arrowWidth = 5;
  // creates the reset button and ramp height slider
  spawnControls();
  resetBlock();
  frameRate(20);
}

function draw() {
  clear();
  push();
  console.log(block.position.x)
  if (rampHeight !== rampSlider.value()) {
    resetBlock();
  }
  // →Fa = force applied to block
  if (notShovedYet) {
    shoveBlock();
  }
  // ←Ff =  -μmgcos(θ) 
  if ((block.velocity.mag() > 0)) {
    mu = cofKinetic;
  } else {
    mu = cofStatic;
  };
  friction = calcFriction(block, mu, g, theta);
  // ↓Fg = mgsin(θ)
  rampGrav = createVector(0, m * g * sin(theta));
  // ↑Fn = -mgsin(θ)
  normal = createVector(0, -m * g * sin(theta));
  normalFix(rampGrav, normal);
  block.applyForce(rampGrav);
  block.applyForce(friction);
  block.applyForce(normal);
  // keep the block from weirdly sliding backwards when stationary
  if ((block.velocity.x <= 0) && (block.velocity.y <= 0)) {
    block.halt();
  }
  ramp.display();
  block.update();
  block.checkEdges();
  block.display();
  pop();
  displayStats(mu);
}

function normalFix(rampGrav, normal) {
  //keeps box in equilibrium until gravity overcomes friction
  if (normal.mag() >= rampGrav.mag()) {
    normal = rampGrav;
  };
}

function calcFriction(block, mu, g, theta) {
  frictionMag = mu * g * block.mass * cos(theta);
  frict = block.velocity.copy();
  // guard against evil NaNs
  if (frict.mag() !== 0) {
    frict.mult(-1);
    frict.normalize();
    frict.mult(frictionMag);
  }
  return frict;
}
var Block = function(m, x, y, w, h) {
  this.distance = 0;
  this.mass = m;
  this.width = w;
  this.height = h;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    // update distance if the block is movin'
    if ((this.velocity.mag() > 0)) {
      this.distance += Math.abs(this.position.mag() - center.mag());
    }
    // check if the user made the block fatter
    this.mass = massSlider.value();
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };
  this.display = function() {
    push();
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    rectMode(CENTER);
    // temporarily scoot grid origin to middle of block, so rotation works properly
    translate(this.position.x, this.position.y); //translates coordinate to center so box rotates correctly
    rotate(radians(theta));
    rect(0, -this.height / 2, this.width, this.height);
    //drawForceArrows();
    pop();
  };

  this.checkEdges = function() {
    if ((this.position.x - block.width / 2) > (canvasWidth)) {
      this.position.x = 0;
      // add this.position.y for ramp looping w/incline here
    }
  };
  this.halt = function() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  };

};

function resetBlock() {
  rampHeight = rampSlider.value();
  m = massSlider.value();
  calcRamp();
  block = new Block(m, center.x, center.y, w, h);
  notShovedYet = true;
}

function displayStats(mu) {
  if (mu == cofStatic) {
    whichFriction = "static"
  } else {
    whichFriction = "kinetic"
  }
  text("angle: " + theta.toFixed(2) + "\nramp height: " + rampHeight.toFixed(2) + " m" + "\nvelocity: " + block.velocity.x.toFixed(2) + " m/s\ndistance: " + (block.distance / 1000).toFixed(2) + " m\nmass: " + block.mass + " kg\nforce push: " + shoveSlider.value() + " N" + "\nfriction mode: " + mu + " - " + whichFriction, 360, 20);
};

function shoveBlock() {
  shoveForce = createVector(shoveSlider.value(), 0);
  block.applyForce(shoveForce);
  notShovedYet = false;
}

var Ramp = function(x1, y1, x2, y2, x3, y3) {
  this.x1 = x1;
  this.x2 = x2;
  this.x3 = x3;
  this.y1 = y1;
  this.y2 = y2;
  this.y3 = y3;
  this.display = function() {
    triangle(x1, y1, x2, y2, x3, y3);
  }
}

function calcRamp() {
  calcCorners();
  theta = degrees(atan((rampHeight) / rampWidth));
  //calculate middle of incline to center box
  center = new createVector((topCorner.x + rightCorner.x) / 2, (topCorner.y + rightCorner.y) / 2);
  ramp = new Ramp(leftCorner.x, leftCorner.y, topCorner.x, topCorner.y, rightCorner.x, rightCorner.y);
}

function calcCorners() {
  //setup ramp triangular coordinates using vectors
  leftCorner = new createVector(0, canvasHeight);
  topCorner = new createVector(0, canvasHeight - rampHeight);
  rightCorner = new createVector(rampWidth, canvasHeight);
}

function spawnControls() {
  button1 = createButton('shove block');
  button1.position(450, 450);
  button1.mousePressed(shoveBlock);
  button2 = createButton('reset');
  button2.position(450, 480);
  button2.mousePressed(resetBlock);
  rampSlider = createSlider(0, 250, rh);
  rampSlider.position(10, 450);
  massSlider = createSlider(1, 100, m);
  massSlider.position(150, 450);
  shoveSlider = createSlider(0, 400, 10);
  shoveSlider.position(250, 450);
}

function drawForceArrows() {
  drawGravArrow();
  drawNormalArrow();
}

function drawGravArrow() {
  push();
  rectMode(CORNER);
  ellipse(block.x, block.y, 2, 2);
  blockVector = createVector(block.x, block.y);
  blockVector2 = createVector(block.x, 20);

  gravVector = new Arrow(blockVector, blockVector2);
  gravVector.width = arrowWidth;
  gravVector.color = color('blue');
  gravVector.update();
  gravVector.display();
  pop();
}

function drawNormalArrow() {
  push();
  rectMode(CORNER);
  var startpoint = createVector(block.x / 2, block.y);
  var endpoint = createVector(block.x, -60);
  normVector = new Arrow(startpoint, endpoint);
  normVector.width = arrowWidth;
  normVector.color = color('green');
  normVector.update();
  normVector.display();
  pop();
}