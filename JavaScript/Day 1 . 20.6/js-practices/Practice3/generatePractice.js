'use strict'

function generate(testLengthArray){
  let arr = []; // syntax array;
  for (let i = 0; i < testLengthArray.length; i++) {
    let len = testLengthArray[i];
    let input = [];
    for (let j = 0; j < len; j++) {
      input.push(Math.floor((Math.random()*20000)-10000));
    }
    let target;
    if (i === 1) {
      target = 10000000;
    } else if (i === 2) {
      target = input[0];
    } else if (i === 3) {
      target = input[input.length - 1];
    } else {
      target = Math.floor((Math.random()*20000)-10000);
    }
     
    let answer = search(input, target);
    let obj = { "input": input, "target": target, "output": answer};
    arr.push(obj);
  }
  return arr;
}

function search(input, target) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === target) {
      return i;
    }
  }
  return -1;
}

module.exports = generate
