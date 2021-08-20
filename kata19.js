//write an algorithem to detect if two queens on a chess board can attack each other
const generateBoard = function (whiteQueen, blackQueen) {
  let chessArray = [];
  //create 8 x 8 array filled with zeros
  for (let i = 0; i < 8; i++) {
    chessArray.push([]);
    for (let j = 0; j < 8; j++) {
      chessArray[i].push(0);
    }
  }
  //if the coordinates match for white and black queen, replace 0 with 1.
  for (let i = 0; i < chessArray.length; i++) {
    for (let j = 0; j < chessArray[i].length; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        chessArray[i][j] = 1;
      }
    }
    for (let j = 0; j < chessArray[i].length; j++) {
      if (i === blackQueen[0] && j === blackQueen[1]) {
        chessArray[i][j] = 1;
      }
    }
  }
  return chessArray;
}

const queenThreat = function (generatedBoard) {
  let vertical; //if vertical position, set equal to true
  let horizontal; //if horizontal position, set equal to true
  let diagonal; //if diagonal position, set equal to true
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (gemeratedBoard[i][j]) {
        
      }
    }
  }
}

let whiteQueen = [0, 5]; //[y, x]
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
if the first index matches, they can attack
if the 2nd index matches, they can attack
for diagonal?