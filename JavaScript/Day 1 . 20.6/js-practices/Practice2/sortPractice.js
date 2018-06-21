'use strict'

function sort(input) {
  var isSorted;
  while (true) {
    isSorted = true;
    for (var i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i+1]) {
        isSorted = false;
        var temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
      }
    }
    if (isSorted === true) return input;
  }
  
}

module.exports = sort
