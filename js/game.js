$(document).ready(function(){
  var view = new View();
  var board = new Board("2424424224244242");
  view.renderBoard(board);
  window.game = new Game(view, board);

  Mousetrap.bind('up', function(){
    game.resolveAllMoves('up')
  }, 'keyup');
  Mousetrap.bind('down', function(){
    game.resolveAllMoves('down')
  }, 'keyup');
  Mousetrap.bind('left', function(){
    game.resolveAllMoves('left')
  }, 'keyup');
  Mousetrap.bind('right', function(){
    game.resolveAllMoves('right')
  }, 'keyup');
});

var Game = function(view, board){
  this.view = view;
  this.board = board;
}

Game.prototype.resolveAllMoves = function(direction) {

  this.board.resolveAllMoves(direction);
  if (this.gameOver()){
    alert("Game Over");
    this.board = new Board("0000000000000000");
  } else {
    this.board.placeNewPiece();
  }
  this.view.renderBoard(this.board);
};

Game.prototype.gameOver = function() {
  return this.board.emptySquares().length === 0 && this.board.combinations().length === 0
}




