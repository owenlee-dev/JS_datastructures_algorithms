/**
 * Testing array manipulation functions
 */

const {
  findMax,
  findMin,
  findPeakIndex,
  findPeakIndexFast,
  reverse,
  reverseString,
  findFrequency,
  segregateElements,
  sort012,
  intersection,
  union,
  findMissingNumber,
  findMinDistance,
  getMajorityElement,
} = require("./array_functions.js");

const arrayToString = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i] + ",";
  }
  return string;
};

console.log("findMax of 1,5,3,7,8,3 is: " + findMax([1, 5, 3, 7, 8, 3]));
console.log("findMin of 1,5,3,7,8,3 is: " + findMin([1, 5, 3, 7, 8, 3]));
console.log(
  "findPeakIndex of 1,5,3,7,8,3 is index: " + findPeakIndex([1, 5, 3, 7, 8, 3])
);
console.log(
  "findPeakIndex of 1,3,20,4,1,0 is index: " +
    findPeakIndexFast([1, 3, 20, 4, 1, 0])
);
console.log(
  "Reversed 1,3,20,4,1,0 is : " + arrayToString(reverse([1, 3, 20, 4, 1, 0]))
);
console.log("butterfly reversed is: " + reverseString("butterfly"));
console.log(
  "frequency of values : a, b, c, a, b, c, a, b : " +
    JSON.stringify(findFrequency(["a", "b", "c", "a", "b", "c", "a", "b"]))
);
console.log(
  "segregateElements of 1,-1,3,2,-7,-5,11,6 : " +
    arrayToString(segregateElements([1, -1, 3, 2, -7, -5, 11, 6]))
);
console.log(
  "sort012 for 0, 1, 2, 0, 1, 2 : " + arrayToString(sort012([0, 1, 2, 0, 1, 2]))
);
console.log(
  "intersection of 1,2,3,4,5,6 and 4,5,6,7,8,9 is: " +
    arrayToString(intersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]))
);
console.log(
  "union of 1,2,3,4,5,6 and 4,5,6,7,8,9 is: " +
    arrayToString(union([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]))
);
console.log(
  "findMissingNumber of 7,5,3,6,4,1 is: " +
    findMissingNumber([7, 5, 3, 6, 4, 1])
);
//not working
// console.log(
//   "findMinDistance of 3,5,4,2,6,3,0,0,5,4,8,3 with x=3 and y=6 is: " +
//     findMinDistance([3, 5, 4, 2, 6, 3, 0, 0, 5, 4, 8, 3], 3, 6)
// );
console.log(
  "getMajorityElement of 1,2,3,3,4,3,3: " +
    getMajorityElement([1, 2, 3, 3, 4, 3, 3])
);
