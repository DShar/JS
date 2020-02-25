"use strict";

function range(start, end, step) {
  var arr = [];

  if (isNaN(start) || isNaN(end)) {
    console.log("Arguments are numbers");
    return;
  }

  if (start > end && (step > 0 || step == undefined) || start < end && step < 0) {
    var temp = start;
    start = end;
    end = temp;
  }

  if (step < 0) {
    for (var i = start; i > end - 1; i += step) {
      arr.push(i);
    }
  } else {
    for (var _i = start; _i <= end; step == undefined ? _i++ : _i += step) {
      arr.push(_i);
    }
  }

  return arr;
}

function sum(arr) {
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      sum += item;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}

console.log(range(3, 7));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range("7", "2"));
console.log(range("dwdw", ""));