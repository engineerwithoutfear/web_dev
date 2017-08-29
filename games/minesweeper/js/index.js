var startTime, endTime, timer, currentRow, currentSquare;
var gameInProgress = false;
var gridSize = 9;
var numMines = 10;
var board = $(".game-board");
var row = $("<div class='line'></div>");
var square = $("<div class='square'></div>");
var firstRound = true;

$(document).ready(function() {
  // create gameboard
createGrid();
// new game button
  $(".new-game button").on("click", function() {
    if (firstRound){
      newGame();
    firstRound = false;
    }
    else {
          currentGame.clearGame();
          delete currentGame;
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
        if (currentGame.cells[parentI][parentJ] == -1) {currentGame.gameLost();}
        else {
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
  this.inBounds = function(cellIndex){
      return cellIndex >= 0 && cellIndex < gridSize;
  }
  this.createMines = function() {
    var cellI, cellJ, cond;
    var indArr = [];
    var elem = [];
    for (var i = 0; i < gridSize; i++) {
      this.cells[i] = [];
    }
    for (var i = 0; i < numMines; i++) {
      do {
        cellI = Math.floor(Math.random() * gridSize);
        cellJ = Math.floor(Math.random() * gridSize);
        elem = [cellI, cellJ];
        cond = false;
        for (var j = 0; j < indArr.length; j++) {
          if (indArr[j][0] == elem[0] && indArr[j][1] == elem[1]) {
            cond = true;
            break;
          }
        }
      } while (cond);
      indArr.push(elem);
      this.cells[cellI][cellJ] = -1;
    }
  };
  this.createProximityCounters = function() {
    var counter, i1, i2, j1, j2;
    for (var i = 0; i < gridSize; i++) {
      i1 = i - 1;
      i2 = i + 1;
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] == -1) continue;
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
  };
  this.addCounter = function(parentI, parentJ, result) {
    if (this.inBounds(parentI) && this.inBounds(parentJ) && this.cells[parentI][parentJ] == -1){ return ++result;}
    else {return result;}
  };
  this.startTimer = function() {
    startTime = new Date();
    timer = setInterval(incrementTimer, 1000);
  };
  this.stopTimer = function() {
    clearInterval(timer);
  };
  this.checkForWin = function() {
    if (
      currentGame.mines == numMines &&
      $(".square.cleared").length == gridSize * gridSize - numMines
    )
      this.gameWon();
  };
  this.gameLost = function() {
    this.stopTimer();
    this.showMines();
    gameInProgress = false;
    $(".alert-lose").show();
  };
  this.gameWon = function() {
    this.stopTimer();
    this.showRemainingMines();
    gameInProgress = false;
    $(".alert-win").show();
  };
  this.showMines = function() {
    $(".square").html("").removeClass("red").addClass("cleared");
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] == -1)
          $(".line")
            .eq(i)
            .find(".square")
            .eq(j)
            .html("M");
      }
    }
  };
  this.highlightClearedMines = function() {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        if (this.cells[i][j] == -1)
          $(".line")
            .eq(i)
            .find(".square")
            .eq(j)
            .removeClass("red")
            .addClass("red");
      }
    }
  };
  this.clearGame = function() {
    $(".square")
      .html("")
      .removeClass("cleared")
      .removeClass("red")
      .removeClass("grey");
    $("#timer").text("00:00");
  };
  
  this.addMine = function() {
    this.mines+=1;
  };
  this.removeMine = function() { 
    this.mines-=1;
  };
}



function incrementTimer() {
  var currentTime = new Date() - startTime;
  var seconds = currentTime / 1000;
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  seconds = Math.round(seconds);
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) {seconds = "0" + seconds};
  $("#timer").text(minutes + ":" + seconds);
}

function createGrid(){
    for (var i = 0; i < gridSize; i++) {
    currentRow = row.clone();
    board.append(currentRow);
    for (var j = 0; j < gridSize; j++) {
      currentSquare = square.clone();
      currentRow.append(currentSquare);
    }
  }
}

function newGame(){
   $(".alert").hide();
      currentGame = new Game();
    currentGame.createMines();
    currentGame.createProximityCounters();
    currentGame.startTimer();
    gameInProgress = true;
}