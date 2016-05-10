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

Board.prototype.placePiece = function(piece) {
  this.grid[piece.xPos][piece.yPos] = piece.value;
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

Board.prototype.createNewPiece = function(){
  emptyPos = this.sampleEmpties();
  return new Piece({xPos: emptyPos[0], yPos: emptyPos[1]})
}

Board.prototype.placeNewPiece = function(){
  this.placePiece(this.createNewPiece());
}
