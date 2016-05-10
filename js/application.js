$(document).ready(function() {

var boardView = new BoardView();
var board = new Board();
board.placeNewTile();
board.placeNewTile();
boardView.renderBoard(board.grid);

  $(document).on('keyup', function(event) {
    event.preventDefault();
    if(event.keyCode == 38) {
      board.moveUpToCombine();
      board.removeTheBigO();
      board.moveUp();
      nextMove();
    }
    if(event.keyCode == 40) {
       board.moveDownToCombine();
       board.removeTheBigO();
       board.moveDown();
       nextMove();
    }
    if(event.keyCode == 37) {
      board.moveLeftToCombine();
      board.removeTheBigO();
      board.moveLeft();
      nextMove();
    }
    if(event.keyCode == 39) {
      board.moveRightToCombine();
      board.removeTheBigO();
      board.moveRight();
      nextMove();
    }
    if(board.isBoardFull() && !board.canAnyTilesMoveToCombine()) {
      boardView.gameOver();
    }
  });

var nextMove = function() {
  if (!board.isBoardFull()) {
  board.placeNewTile();
  boardView.renderBoard(board.grid);
  }
};

});
