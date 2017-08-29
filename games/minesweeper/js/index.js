var currentRow, currentSquare;
var gameInProgress = false;
var gridSize = 9;
var numMines = 20;
var board = $(".game-board");
var row = $("<div class='line'></div>");
var square = $("<div class='square'></div>");
var firstRound = true;

$(document).ready(function() {
  // create gameboard
  createGrid();
  // new game button
  $(".new-game button").on("click", function() {
    if (firstRound) {
      newGame();
      firstRound = false;
    } else {
      currentGame.clearGame();
      newGame();
    }
  });
  // left and right clicks on a square
  $(".square").on("mousedown", function(event) {
    var parentI, parentJ, parentLine, squares;
    if (gameInProgress) {
      parentLine = $(this).parents(".line");
      squares = parentLine.find(".square");
      parentI = $(".line").index(parentLine);
      parentJ = squares.index(this);
      if (event.which == 1) {
        if (currentGame.cells[parentI][parentJ] == -1) {
          currentGame.gameLost();
        } else {
          $(this).addClass("cleared");
          $(this).text(currentGame.cells[parentI][parentJ]);
          currentGame.checkForWin();
        }
      } else if (event.which == 3) {
        if ($(this).hasClass("red")) {
          $(this).removeClass("red").html("");
          currentGame.removeMine();
        } else {
          $(this).html("F").addClass("red");
          currentGame.addMine();
          currentGame.checkForWin();
        }
      }
    }
  });
  //suppress normal right click popup
  $(".square").bind("contextmenu", function(event) {
    event.preventDefault();
    return false;
  });
});

function Game() {
  this.cells = [];
  this.mines = 0;
  this.inBounds = function(cellIndex) {
    return cellIndex >= 0 && cellIndex < gridSize;
  };
  this.createMines = function() {
    var cellI, cellJ, continueOn;
    var indexArr = [];
    var currentCell = [];
    for (var i = 0; i < gridSize; i++) {
      this.cells[i] = [];
    }
    for (var i = 0; i < numMines; i++) {
      cellI = Math.floor(Math.random() * gridSize);
      cellJ = Math.floor(Math.random() * gridSize);
      currentCell = [cellI, cellJ];
      continueOn = false;
      for (var j = 0; j < indexArr.length; j++) {
        if (indexArr[j][0] == currentCell[0] && indexArr[j][1] == currentCell[1]) {
          continueOn = true;
          break;
        }
      }
      if (continueOn);
      indexArr.push(currentCell);
      this.cells[cellI][cellJ] = -1;
    }
  };
  this.createProximityCounters = function() {
    var counter, i1, i2, j1, j2;
    for (var i = 0; i < gridSize; i++) {
      i1 = i - 1;
      i2 = i + 1;
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] !== -1) {
          j1 = j - 1;
          j2 = j + 1;
          counter = 0;
          counter = this.addCounter(i1, j1, counter);
          counter = this.addCounter(i1, j, counter);
          counter = this.addCounter(i1, j2, counter);
          counter = this.addCounter(i, j1, counter);
          counter = this.addCounter(i, j2, counter);
          counter = this.addCounter(i2, j1, counter);
          counter = this.addCounter(i2, j, counter);
          counter = this.addCounter(i2, j2, counter);
          this.cells[i][j] = counter;
        }
      }
    }
  };
  this.addCounter = function(parentI, parentJ, result) {
    if (
      this.inBounds(parentI) &&
      this.inBounds(parentJ) &&
      this.cells[parentI][parentJ] == -1
    ) {
      return ++result;
    } else {
      return result;
    }
  };
  this.checkForWin = function() {
    if (
      currentGame.mines == numMines &&
      $(".square.cleared").length == gridSize * gridSize - numMines
    )
      this.gameWon();
  };
  this.gameLost = function() {
    this.showMines();
    gameInProgress = false;
    $(".alert-lose").show();
  };
  this.gameWon = function() {
    this.showRemainingMines();
    gameInProgress = false;
    $(".alert-win").show();
  };
  this.showMines = function() {
    $(".square").html("").removeClass("red").addClass("cleared");
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] == -1)
          $(".line").eq(i).find(".square").eq(j).html("M");
      }
    }
  };
  this.highlightClearedMines = function() {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] == -1)
          $(".line").eq(i).find(".square").eq(j).addClass("red");
      }
    }
  };
  this.clearGame = function() {
    $(".square")
      .html("")
      .removeClass("cleared")
      .removeClass("red")
      .removeClass("grey");
  };

  this.addMine = function() {
    this.mines += 1;
  };
  this.removeMine = function() {
    this.mines -= 1;
  };
}

function createGrid() {
  for (var i = 0; i < gridSize; i++) {
    currentRow = row.clone();
    board.append(currentRow);
    for (var j = 0; j < gridSize; j++) {
      currentSquare = square.clone();
      currentRow.append(currentSquare);
    }
  }
}

function newGame() {
  $(".alert").hide();
  currentGame = new Game();
  currentGame.createMines();
  currentGame.createProximityCounters();
  gameInProgress = true;
}