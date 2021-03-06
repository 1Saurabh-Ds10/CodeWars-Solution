/*

Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false


*/

function validSolution(board){
  
  const m = board.length;
  const n = board[0].length;
  
  const validSum = 45;
  
  
  let sqSum1 = 0, sqSum2 = 0, sqSum3 = 0;
  for (let i = 0; i < m; i++) {
    
   
    let rowSum = 0, colSum = 0;
    for (let j = 0; j < n; j++) {
      
      if (board[i][j] === 0) {
        return false;
        
      } else {
        rowSum += board[i][j];
        colSum += board[j][i];
       
        if (j <= 2) {
          sqSum1 += board[i][j];
          if ((i === 2 || i === 5 || i === 8) && j === 2) {
            if (sqSum1 === validSum) {
              sqSum1 = 0;
            } else {
              return false;
            }
          }
          
        } else if (j <= 5) {
          
          sqSum2 += board[i][j];
          
          if ((i === 2 || i === 5 || i === 8) && j === 5) {
            if (sqSum2 === validSum) {
              sqSum2 = 0;
            } else {
              return false;
            }
          }
          
        } else if (j <= 8) {
          
          sqSum3 += board[i][j];
          
          if ((i === 2 || i === 5 || i === 8) && j === 8) {
            if (sqSum3 === validSum) {
              sqSum3 = 0;
            } else {
              return false;
            }
          }
          
        }
        
        
      }
      
    }
   
    if (rowSum !== validSum || colSum !== validSum ) {
      return false;
    } 
    
  }
  
  
  return true;
  
  
}

