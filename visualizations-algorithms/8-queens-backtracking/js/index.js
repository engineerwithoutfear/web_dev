var board = $(".chess-board");
var manualButton = $(".mode-manual");
var resetButton = $(".button-reset");
var runAuto = $(".mode-auto");
var runningButton = $(".button-running");
var boardData = Array(64).fill(0);
var running = true;
var stack = [];

var d = 8;
var step = 0;
var loop = void 0;
var unoccupied = 0;
var considering = 2;
var consideringAndOccupied = 7;
var invalid = -1;
var occupied = 1;
var current = 5;

var valid = 10;
var fps = 500;
var speedController = $("#slider-speed");
speedController.on("input", function () {
  fps = 1001 - this.value;
  console.log("change", fps);
});

console.log("///");
init();
function init() {
  var blank = Array(64).fill(0);
  blank[0] = 1;
  stack.push(blank.slice());
  solver(blank, 1);
  draw();
  loop = requestAnimationFrame(increment);
}

resetButton.on("click", function () {
  if (running) {
    pauseSim();
  }
  clearBoard();
});
runningButton.on("click", function () {
  running ? pauseSim() : startSim();
});
function startSim() {
  if (step >= stack.length) {
    step = 0;
  }
  running = true;
  requestAnimationFrame(increment);
}

function pauseSim() {
  running = false;
  cancelAnimationFrame(loop);
}
function clearBoard() {
  step = 0;
  boardData = stack[step];
  draw();
}
function render(boardData) {
  var state = "";
  for (var i = 0; i < Math.pow(d, 2); i++) {
    if (boardData[i] == considering) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square"><div class="considering"></div></div></div>';
    } else if (boardData[i] == consideringAndOccupied) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square-queen-bg "><div class="queen considering">&#9813;</div></div></div>';
    } else if (boardData[i] == current) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square-queen-bg"><div class="current">??</div></div></div>';
    } else if (boardData[i] == valid) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square-queen-bg"><div class="queen valid ">✔</div></div></div>';
    } else if (boardData[i] == invalid) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square-queen-bg"><div class="queen invalid">X</div></div></div>';
    } else if (boardData[i] === occupied) {
      state += '<div class="board-square" data-key="' + i + '">' + '<div class="board-square-queen-bg"><div class="queen">&#9813;</div></div></div>';
    } else {
      state += '<div class="board-square" data-key="' + i + '">' + "</div>";
    }
  }
  return state;
}

function draw() {
  board.html(render(boardData));
}

function increment() {
  draw();
  boardData = stack[step];
  if (running && step < stack.length) {
    step += 1;
    setTimeout(function () {
      loop = requestAnimationFrame(increment);
    }, fps);
  }
}

function solver(boardData2, x) {
  var trail = boardData2.slice();
  if (x == d) {
    return true;
  }
  for (var y = 0; y < d; y++) {
    var s = x + y * d;
    if (isLegal(boardData2, s)) {
      boardData2[s] = 1;
      var next = solver(boardData2, x + 1);
      if (next) {
        return true;
      }
      boardData2[s] = 0;
      stack.push(snapshot(trail, s, invalid));
    }
  }
  return false;
}

function isLegal(board2, s) {
  var board = board2.slice();
  var trail = board2.slice();
  var x = s % d;
  var y = Math.floor(s / d); //console.log(x, y);
  trail[s] = occupied;
  stack.push(snapshot(trail, s, occupied));
  for (var i = x, j = y; i >= 0 && j >= 0; i -= 1, j -= 1) {
    if (x !== i) {
      stack.push(snapshot(trail, j * d + i, current));
    }
    if (board[i + j * d] == 1) {
      stack.push(snapshot(trail, j * d + i, invalid));
      return false; // high left diag
    }
  }
  for (var _i = x - 1; _i >= 0; _i--) {
    stack.push(snapshot(trail, y * d + _i, current));
    if (board[y * d + _i] == 1) {
      stack.push(snapshot(trail, y * d + _i, invalid));
      return false; // left hor
    }
  }
  for (var _i2 = x, _j = y; _i2 >= 0 && _j < d; _i2 -= 1, _j += 1) {
    if (x !== _i2) {
      stack.push(snapshot(trail, _j * d + _i2, current));
    }
    if (board[_i2 + _j * d] == 1) {
      stack.push(snapshot(trail, _i2 + _j * d, invalid));
      return false; // low left diag
    }
  }
  stack.push(snapshot(trail, s, valid));
  return true;
}

function snapshot(board, i, status) {
  var tempArray = board.slice();
  tempArray[i] = status;
  return tempArray;
}