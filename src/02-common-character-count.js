/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = [];
  let arr2 = [];
  let count = 0;
  arr1 = s1.split('').sort();
  arr2 = s2.split('').sort();
  for (let i = 0; i < arr1.length; i++) {
    const elem = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (elem === arr2[j]) {
        arr2.splice(j, 1);
        count += 1;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
