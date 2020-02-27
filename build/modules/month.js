"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.month = void 0;
var month = {};
exports.month = month;
month.months = [{
  name: "January",
  num: 0
}, {
  name: "February",
  num: 1
}, {
  name: "March",
  num: 2
}, {
  name: "April",
  num: 3
}, {
  name: "May",
  num: 4
}, {
  name: "June",
  num: 5
}, {
  name: "July",
  num: 6
}, {
  name: "August",
  num: 7
}, {
  name: "September",
  num: 8
}, {
  name: "October",
  num: 9
}, {
  name: "November",
  num: 10
}, {
  name: "December",
  num: 11
}];

month.name = function (number) {
  if (number >= 0 && number <= 11) {
    return this.months[number].name;
  } else {
    return "Incorrect number";
  }
};

month.number = function (name) {
  var result = this.months.find(function (element, index, array) {
    if (element.name == name) {
      return true;
    } else {
      return false;
    }
  });

  if (result != undefined) {
    return result.num;
  } else {
    return "Incorrect month name";
  }
}; // console.log(month.name(3));
// console.log(month.number("June"));
// console.log(month.number("JJJ"));
// console.log(month.name(30));