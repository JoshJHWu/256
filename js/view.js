var BoardView = function() {
  for (var i = 0; i < 4; i++) {
    $('#boardView').append('<tr class="row-' + i + '"></tr>');
  }
  for (var count = 0; count < 4; count++) {
    for (var c = 0; c < 4; c++) {
      $('.row-' + count).append('<td class="col-' + c + '"></td>');
    }
  }
};

BoardView.prototype.renderBoard = function(grid) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "X") {
        $('#boardView .row-' + r + ' .col-' + c).text("");
      } else {
        $('#boardView .row-' + r + ' .col-' + c).text(grid[r][c]).css("color","black");
      }
    }
  }
};

BoardView.prototype.gameOver = function() {
  alert("Game Over");
};
