var View = function(){
  for (var r = 0; r < 4; r++) {
    $('#boardView').append('<tr id="row-' + r + '"></tr>')
  }
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      $('#row-' + r).append('<td class="col-' + c + '">[]</td>')
    }
  }
}

View.prototype.renderBoard = function(board) {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      $('#boardView #row-' + r + ' .col-' + c).html(board.grid[r][c]);
    }
  }
};
