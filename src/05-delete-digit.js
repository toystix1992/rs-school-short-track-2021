/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let arr2 = [];
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let copy = [...arr]
    copy.splice(i, 1)
    arr2.push(copy);
  }

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    finalArr.push(Number(item.reduce((a, b) => a + b)));
  }

  return Math.max(...finalArr);
}

module.exports = deleteDigit;
