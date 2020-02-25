"use strict";

function reverseArray(arr) {
  var reversedArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor((arr.length - 1) / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

console.log(reverseArray(["A", "B", "C", "D"]));
console.log(reverseArrayInPlace(["A", "B", "C", "D"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));