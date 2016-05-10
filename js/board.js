var Board = function() {
  this.grid = [
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"]];
};

var initialTiles = [2,4];


Board.prototype.isBoardFull = function() {
  for (var r = 0; r < 4; r++) {
    if (this.grid[r].includes("X")) {
      return true;
    }
  }
  return false;
};

Board.prototype.findEmptySpaces = function() {
  var emptySpaces = [];
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (this.grid[r][c] === "X") {
        emptySpaces.push([r,c]);
      }
    }
  }
  return emptySpaces;
};

Board.prototype.placeNewTile = function() {
  var emptySpaces = this.findEmptySpaces();
  var tileValue = initialTiles[Math.floor(Math.random() * initialTiles.length)];
  var coordinates = [Math.floor(Math.random() * emptySpaces.length)];
  this.grid[emptySpaces[coordinates][0]][emptySpaces[coordinates][1]] = tileValue;
};

Board.prototype.canAnyTilesMove = function() {
  return this.canAnyTileMoveUp() || this.canAnyTileMoveDown() || this.canAnyTileMoveLeft() || this.canAnyTileMoveRight();
};

Board.prototype.canAnyTileMoveUp = function() {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (this.grid[r][c] != "X") {
        if ((r !== 0) && (this.grid[r - 1][c] === "X")) {
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.canAnyTileMoveDown = function() {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (this.grid[r][c] != "X") {
        if ((r != 3) && (this.grid[r + 1][c] === "X")) {
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.canAnyTileMoveLeft = function() {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (this.grid[r][c] != "X") {
        if ((c !== 0) && (this.grid[r][c - 1] === "X")) {
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.canAnyTileMoveRight = function() {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      if (this.grid[r][c] != "X") {
        if ((c != 3) && (this.grid[r][c + 1] === "X")) {
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.moveUp = function() {
  for (var count = 1; count < 4; count++) {
    for (var r = 1; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if ((this.grid[r][c] != "X") && (this.grid[r - 1][c] === "X")) {
          this.grid[r - 1][c] = this.grid[r][c];
          this.grid[r][c] = "X";
        }
      }
    }
  }
};

Board.prototype.moveDown = function() {
  for (var count = 1; count < 4; count++) {
    for (var r = 2; r > -1; r--) {
      for (var c = 0; c < 4; c++) {
        if ((this.grid[r][c] != "X") && (this.grid[r + 1][c] === "X")) {
          this.grid[r + 1][c] = this.grid[r][c];
          this.grid[r][c] = "X";
        }
      }
    }
  }
};

Board.prototype.moveLeft = function() {
  for (var count = 1; count < 4; count++) {
    for (var r = 0; r < 4; r++) {
      for (var c = 1; c < 4; c++) {
        if ((this.grid[r][c] != "X") && (this.grid[r][c - 1] === "X")) {
          this.grid[r][c - 1] = this.grid[r][c];
          this.grid[r][c] = "X";
        }
      }
    }
  }
};

Board.prototype.moveRight = function() {
  for (var count = 1; count < 4; count++) {
    for (var r = 0; r < 4; r++) {
      for (var c = 2; c > -1; c--) {
        if ((this.grid[r][c] != "X") && (this.grid[r][c + 1] === "X")) {
          this.grid[r][c + 1] = this.grid[r][c];
          this.grid[r][c] = "X";
        }
      }
    }
  }
};

// Create start game button => will instantiate 2 tiles

// After a user input
  // ask if any tile can move
    // if not, game over
  // if one tile can move, then we move all tiles and combine tile

  //
  // can tile move (up, down, left, right)?
  // can tiles moveToCombine? (UDLR) ?


// GAME OVER IF
  // every tile is full &&
    // no tile can moveToCombine
