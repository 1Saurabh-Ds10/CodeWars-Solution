/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


*/


// Solution for n * n board

function isSolved(board) {
 
  let hasEmpty = false, eleX = board[0][0], eleY= board[board.length - 1][0], countX = 0, countY = 0;
  
  for (let i=0, n = board.length; i< n; i++) {
   let temp1 = 0, temp2 = 0, count1 = 0, count2 = 0, ele1 = board[i][temp1++], ele2 = board[temp2++][i];
    
    for (let j=1, l = board[i].length; j < l; j++) {
      
      if (ele1 === 0 || ele2 ===0 || board[i][temp1] === 0 || board[temp2][i]===0) 
        hasEmpty = true;
      (ele1 === board[i][temp1++]) && count1++;  
      (ele2 === board[temp2++][i]) && count2++;  
    }
    
    (eleX === board[i][i]) && countX++;
    (eleY === board[(n - 1) - i][i]) && countY++;
    if (count1 === board[i].length - 1 && (ele1 !== 0))
      return ele1;
    if (count2 === board[i].length - 1 && (ele2 !== 0))
      return ele2;
  }
  if (countX === board.length && (eleX !== 0))
      return eleX;
  if (countY === board.length && (eleY !== 0))
      return eleY;
  if (hasEmpty)
    return -1;
 
  return 0;
}




function isSolved(board) {
 
  let hasEmpty = false;

  let eleX = board[0][0], eleY= board[board.length - 1][0], countX = 0, countY = 0;
  for (let i=0, n = board.length; i< n; i++) {
    
    let temp1 = 0, temp2 = 0, count1 = 0, count2 = 0;
    let ele1 = board[i][temp1++], ele2 = board[temp2++][i];
    
    for (let j=1, l = board[i].length; j < l; j++) {
      
      if (ele1 === 0 || ele2 ===0 || board[i][temp1] === 0 || board[temp2][i]===0) {
        hasEmpty = true;
      }
      
      if (ele1 === board[i][temp1++]) {
        count1++;  
      }
      if (ele2 === board[temp2++][i]) {
        count2++;  
      }  
    }
    
    if (eleX === board[i][i]) {
      countX++;
    }
    
    if (eleY === board[(n - 1) - i][i]) {
      countY++;
    }
    
    if (count1 === board[i].length - 1) {
      if (ele1 !== 0) {
        return ele1;
      }
      
    } 
    if (count2 === board[i].length - 1) {
      if (ele2 !== 0) {
        return ele2;
      }
    } 
    
    
  }
  
  if (countX === board.length) {
    if (eleX !== 0) {
        return eleX;
      }
  }
  
  if (countY === board.length) {
    if (eleY !== 0) {
        return eleY;
      }
  }
  
  
  if (hasEmpty) {
    return -1;
  }

  return 0;
}





















