$(document).ready(function(){
  var view = new View();
  var board = new Board("0000000002000222");
  view.renderBoard(board);
  window.game = new Game(view, board);
});

var Game = function(view, board){
  this.view = view;
  this.board = board;
}

Game.prototype.resolveAllMoves = function(direction) {
  this.board.resolveAllMoves(direction);
  this.view.renderBoard(this.board);
};



// Mousetrap.bind('up', function(){
//   console.log('it works')
// }, 'keyup');
