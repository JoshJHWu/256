$(document).ready(function() {

var boardView = new BoardView();
var board = new Board();
board.placeNewTile();
board.placeNewTile();
boardView.renderBoard(board.grid);

board.isBoardFull();
board.canAnyTilesMove();
board.moveRight();
boardView.renderBoard(board.grid);

// User input
// boardView.gameOver();

  $(document).on('keyup', function(event) {
    event.preventDefault();
    if(event.keyCode == 38 && board.canAnyTileMoveUp()) {
      board.moveUp();
    }
    if(event.keyCode == 40 && board.canAnyTileMoveDown()) {
       board.moveDown();
    }
    if(event.keyCode == 37 && board.canAnyTileMoveLeft()) {
      board.moveLeft();
    }
    if(event.keyCode == 39 && board.canAnyTileMoveRight()) {
      board.moveRight();
    }
    boardView.renderBoard(board.grid);
  });

});
