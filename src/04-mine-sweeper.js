/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let count = 0;
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      // rules for first row
      if (i === 0) {
        if (row[j - 1] === true && row[j + 1] === true
          || row[j - 1] === true && matrix[i + 1][j] === true
          || row[j + 1] === true && matrix[i + 1][j] === true
        ) {
          newArr[i].push(count + 2);
        }
        else {
          newArr[i].push(count + 1)
        }
      }

      //rules for second row
      if (i === 1) {
        if (row[j - 1] === true && row[j + 1] === true
          || row[j - 1] === true && matrix[i + 1][j] === true
          || row[j + 1] === true && matrix[i + 1][j] === true
          || row[j - 1] === true && matrix[i - 1][j] === true
          || row[j + 1] === true && matrix[i - 1][j] === true
        ) {
          newArr[i].push(count + 2);
        }
        else {
          newArr[i].push(count + 1)
        }
      }

      //rules for third row
      if (i === 2) {
        if (row[j - 1] === true && row[j + 1] === true
          || row[j - 1] === true && matrix[i - 1][j] === true
          || row[j + 1] === true && matrix[i - 1][j] === true
        ) {
          newArr[i].push(count + 2);
        }
        else {
          newArr[i].push(count + 1)
        }
      }
    }
    // if (!matrix.includes(true)) {
    //   newArr[i].push(count)
    // }
  }
  return newArr;
}

module.exports = minesweeper;
