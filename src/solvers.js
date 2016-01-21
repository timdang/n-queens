/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({
    'n': n
  });
  var solution = board;

  var checkAndPlace = function(currentRow) {

    if (currentRow === n) {
      return;
    }

    for (var i = 0; i < board.get(0).length; i++) {
      board.togglePiece(currentRow, i);

      if (board.hasRowConflictAt(currentRow) || board.hasColConflictAt(i)) {
        board.togglePiece(currentRow, i)
      }
    }
    checkAndPlace(currentRow + 1);
  };

  checkAndPlace(0);
  // start checking board from 0,0
  // check if they have conficts,
  // if no conflicts, toggle a piece
  // stop checking that row and move to new row
  //++
  // inputs: current row (this.get(0), current column (this.get(0)[startingColPos+1]),
  // this.get(startingRowPosition+1)
  // , outputs
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //console.log('board', JSON.stringify(board));
  // [[1]]
  // [[1,0],[0,1]]
  // [[1,0,0],[0,1,0],[0,0,1]]
  // return board.rows();



  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
