/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const sol = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item !== -1) {
      newArr.push(item);
      newArr.sort((a, b) => a - b);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === -1) sol.push(item);
    else {
      sol.push(newArr[0]);
      newArr.shift();
    }
  }
  return sol;
}

module.exports = sortByHeight;
