"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function deepEqual(obj1, obj2) {
  var result;

  if (obj1 != null && _typeof(obj1) == "object" && obj2 != null && _typeof(obj2) == "object") {
    for (var i in obj1) {
      if (obj2.hasOwnProperty(i)) {
        result = deepEqual(obj1[i], obj2[i]);

        if (result == false) {
          return result;
        }
      } else {
        return false;
      }
    }
  } else {
    result = obj1 === obj2;
  }

  return result;
}

var obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));
console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
console.log(deepEqual(obj, {
  here: {
    is: "a"
  },
  object: 2
}));