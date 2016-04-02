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
  const board = new Board({ n });
  const solution = board;
  const checkAndPlace = function(currentRow) {
    if (currentRow === n) {
      return;
    }
    // toggling/checking within a row
    for (let i = 0; i < board.get(0).length; i++) {
      // create a clean board
      // let newBoard = new Board({'n':n});
      // checks all columns of current row.
      board.togglePiece(currentRow, i);

      if (board.hasRowConflictAt(currentRow) || board.hasColConflictAt(i)) {
        board.togglePiece(currentRow, i);
      }
      // moves on to the next row
      // clears our starting peice
      // board.togglePiece(currentRmeow, i);
      // solution = board;
    }
    checkAndPlace(currentRow + 1);
    // toggling/checking the next row
    // checkAndPlace(currentRow + 1);
  };

  checkAndPlace(0);
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // initialize solution count
  let solutionCount = 0;
  // initialze board for testing of length n
  const board = new Board({ n });
  const newCheckFunction = function(currentRow) {
    if (currentRow === n) {
      solutionCount++;
      return;
    }
    // startes with the first column
    for (let i = 0; i < board.get(0).length; i++) {
      // places piece in spot i
      board.togglePiece(currentRow, i);
      // looks around the board, confirms that this placement is good
      if (!board.hasRowConflictAt(currentRow) && !board.hasColConflictAt(i)) {
        // if it's good, we'll move to the next row, and start checking at the left again.
        // moved in to the for loop, so we can get all solutions from current peice at i
        newCheckFunction(currentRow + 1);
      }
      // clears the piece we put at i
      // attempted with board = new Board({'n': n}); - but this clears out the previous work in the last row
      board.togglePiece(currentRow, i);
      // loop starts over and places peice at new value of i
    }
  };
  newCheckFunction(0);

  return solutionCount;
};

window.findNQueensSolution = function(n) {
  const board = new Board({ n });
  let solution = board.rows();
  const newCheckFunction = function(currentRow) {
    if (currentRow === n) {
      return solution = _.map(board.rows(), function(row) {
        return row.slice();
      });
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(currentRow, i);
      if (!board.hasAnyQueenConflictsOn(currentRow, i)) {
        newCheckFunction(currentRow + 1);
      }
      board.togglePiece(currentRow, i);
    }
  };

  newCheckFunction(0);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  const board = new Board({ n });
  const newCheckFunction = function(currentRow) {
    if (currentRow === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(currentRow, i);
      if (!board.hasAnyQueenConflictsOn(currentRow, i)) {
        newCheckFunction(currentRow + 1);
      }
      board.togglePiece(currentRow, i);
    }
  };

  newCheckFunction(0);
  return solutionCount;
};
