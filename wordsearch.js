// This is a copy of code from previous day's pair programming activity.
const transpose = function(matrix) {
  // Replace this code with your solution
  let transposedMatrix = [];
  const numRows = matrix.length;
  const numCols = matrix[0].length; //Assumes equal length for all rows

  //rows x col becomes col x rows in transposed matrix
  //on first pass col is fixed at zero and iterates through rows until end.
  //take matrix row col for transposed col row


  for (let col = 0; col < numCols; col++) {
    transposedMatrix[col] = [];
    for (let row = 0; row < numRows; row++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }
  return transposedMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const lengthle = letters.length;
  if (lengthle === 0) {
    return false;
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;