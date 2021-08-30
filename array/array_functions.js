/**
 * Array Manipulation Functions
 */

// Helper function to print arrays
const arrayToString = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i] + ",";
  }
  return string;
};

//Return max value --> O(n)
const findMax = (arr) => {
  return Math.max(...arr);
};

//Return min value --> O(n)
const findMin = (arr) => {
  return Math.min(...arr);
};

//Return index of peak element (element where values on either side is lower) --> O(n)
const findPeakIndex = (arr) => {
  let n = arr.length;
  if (n <= 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
};

//Return index of peak element (element where values on either side is lower) --> O(log(n))
//***UNFINISHED***
const findPeakIndexFast = (arr) => {
  let n = arr.length;
  let mid = Math.ceil(n / 2);
  //handle case where mid is a peak
  if (
    (mid == 0 || arr[mid - 1] <= arr[mid]) &&
    (mid == n - 1 || arr[mid + 1] <= arr[mid])
  ) {
    return mid;
    //left half has peak
  } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
    return findPeakIndexFast(arr.slice(0, mid));
    //right half has peak
  } else return findPeakIndexFast(arr.slice(mid - 1, n - 1));
};

//Return reversed array
const reverse = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;

  //Can alternatively just use:
  //return arr.reverse();
};

// Return reversed String
const reverseString = (str) => {
  let newStr = "";
  let n = str.length;

  for (let i = 0; i <= n; i++) {
    newStr += str.charAt(n - i);
  }

  return newStr;
};

//Return Kth smallest value in the array
const returnKthLargest = (arr, k) => {};

// Find frequency of each element in an array
const findFrequency = (arr) => {
  let count = {};
  arr.forEach((e) => {
    count[e] ? count[e]++ : (count[e] = 1);
  });

  return count;
};

// Move all negative numbers to one side of the array maintaining order
const segregateElements = (arr) => {
  let temp = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      temp[j++] = arr[i];
    }
  }

  if (j == 0 || j == arr.length - 1) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp[j++] = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }

  return arr;
};

// Sort an array of all 0's 1's and 2's
const sort012 = (arr) => {
  let n = arr.length - 1;
  let low = 0;
  let mid = 0;
  let high = n;

  // helper function
  const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
};

// return new array that is intersection of two arrays
const intersection = (arr1, arr2) => {
  let returnArr = [];
  let i = 0;
  let j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      returnArr.push(arr1[i]);
      i++;
      j++;
    }
  }
  return returnArr;
};

// return new array that is union of two arrays
const union = (arr1, arr2) => {
  let returnArr = [];
  let i = 0;
  let j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      returnArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      returnArr.push(arr2[j]);
      j++;
    } else {
      returnArr.push(arr1[i]);
      i++;
      j++;
    }
  }
  for (let k = i; k < arr1.length; k++) {
    returnArr.push(arr1[k]);
  }
  for (let k = j; k < arr2.length; k++) {
    returnArr.push(arr2[k]);
  }

  return returnArr;
};

// Find missing number (no duplicates)
const findMissingNumber = (arr) => {
  let n = arr.length + 1;

  let sum = Math.floor((n * (n + 1)) / 2);
  for (let i = 0; i <= n; i++) {
    sum -= arr[i];
  }

  return sum;
};

module.exports = {
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
};
