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
    // toggling/checking within a row
    for (var i = 0; i < board.get(0).length; i++) {
      //create a clean board
      // var newBoard = new Board({'n':n});
      // checks all columns of current row.
      board.togglePiece(currentRow, i);

      if (board.hasRowConflictAt(currentRow) || board.hasColConflictAt(i)) {
        board.togglePiece(currentRow, i);
      }
      //moves on to the next row
      //clears our starting peice
      //board.togglePiece(currentRow, i);
      //solution = board;
    }
    checkAndPlace(currentRow + 1);
    // toggling/checking the next row
    // checkAndPlace(currentRow + 1);
  };

  checkAndPlace(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //initialize solution count
  var solutionCount = 0;
  //initialze board for testing of lenght n
  var board = new Board({'n': n});


  var newCheckFunction = function(currentRow) {

    if (currentRow === n) {
      solutionCount++;
      return;
    }
    // places piece in spot i
    for (var i = 0; i < board.get(0).length; i++) {
      board.togglePiece(currentRow, i);
      //looks around the board, confirms that this placement is good
      if (!board.hasRowConflictAt(currentRow) && !board.hasColConflictAt(i)) {
        //if it's good, we'll move to the next row, and start checking at i again.
        newCheckFunction(currentRow + 1);
      }
      //clears the piece we put at i
      board.togglePiece(currentRow, i);
      //loop starts over and places peice at new value of i
    }
  };

  newCheckFunction(0);
  //console.log('solution count is:' + solutionCount);
  return solutionCount;
  /*
    var solutionCount = 0; //fixme
    var board = new Board({'n':n});

    var solutionCounter = function(currentRow, currentColumn){


      //reset the board of n length
      board = new Board({'n':n});
      //base case
      if (currentColumn === n) {
        return;
      }
      if (currentRow === n) {
        solutionCount++;
        return;
      }

    //run find n rooks with new parameter
      for (var i = currentColumn; i < board.get(currentRow).length; i++) {
        //create a clean board
        // var newBoard = new Board({'n':n});
        // checks all columns of current row.
          board.togglePiece(currentRow, i);

        if (board.hasRowConflictAt(currentRow) || board.hasColConflictAt(i)) {
          board.togglePiece(currentRow, i);
        }
        //moves on to the next row
        //clears our starting peice
        //board.togglePiece(currentRow, i);
        //solution = board;
      }
      solutionCounter(0,currentColumn+1);
      solutionCounter(currentRow+1, 0);
    //count the results of exectution

    };
    solutionCounter(0,0);
    //start at new column for the first row with each iteration
    //
    // inputs: n, colIndex, rowIndex
    // ---
    // check for solution starting at 0,0
    //  when found, solutionCount++
        //recursive: make new Board | check starting at 0,1 - 0,4 |
    //  every solution results in solutionCount++
    // when done with row 0, start 1,0-1,4
    // when get to end, start over at 0,0 until you get to starting place
    // (count number squares n*n)

    console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
    return solutionCount;
  */
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
