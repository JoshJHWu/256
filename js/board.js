var Board = function(gridString){
  this.grid = this.parseGrid(gridString)
}

Board.prototype.parseGrid = function(gridString){
  var gridArray = []
  for (var i = 0; i < 4; i++) {
    start = 0 + (i*4);
    end = 4 + (i*4);
    gridArray.push(gridString.slice(start, end).split(""));
  }
  return gridArray.map(function(row){
    return row.map(function(value) {
      return parseInt(value);
    });
  });
}

Board.prototype.full = function() {
  if (this.grid.find(function(row) {
    return row.indexOf(0) != -1
  })) {
    return false;
  } else {
    return true;
  }
}

Board.prototype.assignValue = function(position, value) {
  this.grid[position[0]][position[1]] = value;
}

Board.prototype.emptySquares = function() {
  var empties = []
  for (var row = 0; row < 4; row++){
    for (var col = 0; col < 4; col++){
      if (this.grid[row][col] === 0){
        empties.push([row, col]);
      };
    }
  }
  return empties;
}

Board.prototype.sampleEmpties = function(){
  return this.emptySquares()[Math.floor(Math.random() * this.emptySquares().length)];
}

Board.prototype.placeNewPiece = function(){
  if (this.emptySquares().length != 0){
    this.assignValue(this.sampleEmpties(), 2);
  }
}



Board.prototype.canMove = function(pos) {
  var nextPos = [pos[0] - 1, pos[1]];
  if (nextPos[0] < 0) {
    return false;
  } else {
    return (this.grid[nextPos[0]][nextPos[1]] === 0)
  };
};

Board.prototype.move = function(pos) {
  var nextPos = [pos[0] - 1, pos[1]];
  this.grid[nextPos[0]][nextPos[1]] = this.grid[pos[0]][pos[1]]
  this.grid[pos[0]][pos[1]] = 0;
};

Board.prototype.canCombine = function(pos) {
  var posAbove = [pos[0] - 1, pos[1]];
  while (posAbove[0] >= 0) {
    if (this.grid[posAbove[0]][posAbove[1]] === this.grid[pos[0]][pos[1]] && this.grid[pos[0]][pos[1]] != 0) {
      return true;
    } else if (this.grid[posAbove[0]][posAbove[1]] != 0) {
      return false;
    } else {
      posAbove[0]--;
    }
  };
  return false;
};

Board.prototype.combine = function(pos) {
  var posAbove = [pos[0] - 1, pos[1]];
  while (posAbove[0] >= 0) {
    if (this.grid[posAbove[0]][posAbove[1]] === this.grid[pos[0]][pos[1]]) {
      this.grid[posAbove[0]][posAbove[1]] = this.grid[posAbove[0]][posAbove[1]] * 2;
      this.grid[pos[0]][pos[1]] = 0;
      break;
    } else {
      posAbove[0]--;
    }
  };
};

Board.prototype.resolveMove = function(pos){
  var position = pos
  while (this.canMove(position)) {
    this.move(position);
    position[0]--;
  };
};

Board.prototype.transpose = function() {
  var newGrid = this.grid
  newGrid = newGrid[0].map(function(col, i){
    return newGrid.map(function(row) {
      return row[i];
    })
  });
  this.grid = newGrid;
}

Board.prototype.reverse = function() {
  this.grid.reverse();
}

Board.prototype.combinations = function() {
   var tilesThatCanCombine = []
   for (var row = 1; row < 4; row++){
    for (var col = 0; col < 4; col++){
      if (this.canCombine([row, col])){
        tilesThatCanCombine.push([row,col]);
      };
    };
  };
  return tilesThatCanCombine;
}

Board.prototype.iterateThroughCombinations = function() {
  var combinations = this.combinations();
  for (var i = 0; i < combinations.length; i++){
    this.combine(combinations[i]);
  };
};

Board.prototype.iterateThroughMoves = function() {
  for (var row = 1; row < 4; row++){
    for (var col = 0; col < 4; col++){
      this.resolveMove([row, col], "up")
    };
  };
}

Board.prototype.noCombinations = function() {
  var numberOfCombos = 0;
  numberOfCombos += this.combinations().length;
  this.transpose();
  numberOfCombos += this.combinations().length;
  this.transpose();
  this.reverse();
  numberOfCombos += this.combinations().length;
  this.reverse();
  this.transpose();
  this.reverse();
  numberOfCombos += this.combinations().length;
  this.reverse();
  this.transpose();
  return numberOfCombos === 0;
}

Board.prototype.resolveAllMoves = function(direction){
  switch(direction) {
    case "up":
      this.iterateThroughCombinations();
      this.iterateThroughMoves();
      break;
    case "down":
      this.reverse();
      this.iterateThroughCombinations();
      this.iterateThroughMoves();
      this.reverse();
      break;
    case "left":
      this.transpose();
      this.iterateThroughCombinations();
      this.iterateThroughMoves();
      this.transpose();
      break;
    case "right":
      this.transpose();
      this.reverse();
      this.iterateThroughCombinations();
      this.iterateThroughMoves();
      this.reverse();
      this.transpose();
      break;
  }
}
