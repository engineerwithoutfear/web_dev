//http://xahlee.info/comp/unicode_arrows.html

// set dimensions 
var canvasWidth = 600;
var canvasHeight = 300;
var blockWidth = 60;
var blockHeight = 40;
var distanceScalingFactor = 10;
var massScalingFactor = 1.2;
// define placement of origin
var zeroX = 0;
var zeroY = canvasHeight * (.99);
//pretend it's kg
var blockMass = 2;
// how hard to push the block
var pushX = 400;
var pushY = 0;
// spacing for drawn text
var offset = 10;
// initial placement of block
var x = 0;
var y = 0;
// friction business
var cofKinetic = .4;
var cofStatic = .9;
var gravity = 9.8;

//var distance = 0;
var notShovedYet = true;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  //frameRate(30);
  spawnButtons();
  spawnSliders();
  block = new Block(blockMass, x, y);
}

function draw() {
  clear();
  translate(zeroX, zeroY);
  drawGround();
  // →Fa = force applied to block
  if (notShovedYet) {
    shoveForce = createVector(blockPushSlider.value(), pushY);
    block.applyForce(shoveForce);
    notShovedYet = false;
  }
  // ↓Fg = mg
  gravityForce = createVector(0, block.mass * gravity);
  block.applyForce(gravityForce);
  // ↑Fn = -mg
  floorNormalForce = createVector(0, normal);
  block.applyForce(floorNormalForce);
  // ←Ff =  μg 
  if ((block.velocity.x > 0) || (block.velocity.y > 0)) {
    frictionForce = calcKineticFriction(block);
  } else {
    frictionForce = calcStaticFriction(block);
  };
  block.applyForce(frictionForce);

  // update the block with all calculated forces
  block.update();
  // keep the block from weirdly sliding backwards when stationary
  if ((block.velocity.x <= 0) && (block.velocity.y <= 0)) {
    block.halt();
  }
  // make the block reappear on the left if it's run off the right
  block.checkEdges();
  // draw the block
  block.display();
  // text that displays velocity & distance
  displayStats();
};

function drawGround() {
  line(0, 0, canvasWidth, 0);
}

function calcKineticFriction(block) {
  frictionMag = cofKinetic * gravity;
  friction = block.velocity.copy();
  friction.mult(-1);
  friction.normalize();
  friction.mult(frictionMag);
  return friction;
}

function calcStaticFriction(block) {
  frictionMag = cofStatic * gravity;
  friction = block.velocity.copy();
  friction.mult(-1);
  friction.normalize();
  friction.mult(frictionMag);
  return friction;
}

var Block = function(m, x, y) {
  this.distance = 0;

  this.mass = m;
  normal = -this.mass * gravity;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    //update distance, mass, normal force
    if ((this.velocity.x > 0) || (this.velocity.y > 0)) {
      this.distance += (this.position.x - x)/1000;
    }
    this.mass = blockMassSlider.value();
    this.push = blockPushSlider.value();
    normal = -this.mass * gravity;
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // reset acceleration for next round of calculations
    this.acceleration.mult(0);

  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    rect((this.position.x) / distanceScalingFactor, this.position.y - blockHeight / 2, blockWidth, blockHeight);
  };

  this.checkEdges = function() {
    if ((this.position.x / distanceScalingFactor - blockWidth / 2) > (canvasWidth)) {
      this.position.x = 0;
    }
  };

  this.halt = function() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  };

};

function displayStats() {
  text("velocity: " + block.velocity.x.toFixed(2) + " m/s\ndistance: " + block.distance.toFixed(2) + " m\nmass: " + block.mass + " kg\nforce push: " + blockPushSlider.value() + " N", canvasWidth * (0.2), -canvasHeight * (0.95));
};

function spawnButtons() {
  button = createButton('shove block');
  button.position(20, 20);
  button.mousePressed(reshoveBlock);
  button = createButton('reset block');
  button.position(20, 20 * 3);
  button.mousePressed(resetBlock);
};

function spawnSliders() {
  blockMassSlider = createSlider(0, 100, blockMass);
  blockMassSlider.position(20, 20 * 5);
  blockPushSlider = createSlider(0, 400, pushX);
  blockPushSlider.position(20, 20 * 7);
}

function resetBlock() {
  block = new Block(blockMass, x, y);
}

function reshoveBlock() {
  notShovedYet = true;
}