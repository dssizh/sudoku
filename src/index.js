module.exports = function solveSudoku(matrix) {
  let emptyPositions = getEmptyPositions(matrix);
  // console.log(emptyPositions);
  
  for (let i=0; i<emptyPositions.length; i++) {
    // console.log("step - " + i);
    
    let row = emptyPositions[i][0];
    let col = emptyPositions[i][1];

    let number = matrix[row][col] + 1;
    let flag = false;

    while (!flag&&number<=9){
      // console.log("check - " + number);
      if (checkRow(matrix, row, number)&&checkColumn(matrix, col, number)&&checkSquare(matrix, row, col, number)) {
        flag = true;
        matrix[row][col] = number;
      } else {
        number++;
      }
    }

    if (!flag) {
      // console.log("no result - ");
      matrix[row][col] = 0;
      i = i-2;
    }
  }

  return matrix;

}

function getEmptyPositions(matrix) {
  let result = [];
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

function checkRow(matrix, row, number) {
  for (let j=0; j<matrix[row].length; j++) {
    if (matrix[row][j] == number) {
      return false;
    }
  }
  return true;
}

function checkColumn(matrix, col, number) {
  for (let i=0; i<matrix.length; i++) {
    if (matrix[i][col] == number) {
      return false;
    }
  }
  return true;
}

function checkSquare(matrix, row, col, number) {
  let colStart = Math.floor(col/3)*3;
  let rowStart = Math.floor(row/3)*3;

  for (let i=rowStart; i<rowStart+3; i++) {
    for (let j=colStart; j<colStart+3; j++) {
      if (matrix[i][j] == number) {
        return false;
      }
    }
  }
  return true;
}
