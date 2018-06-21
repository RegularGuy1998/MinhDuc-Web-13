// var a = 6;

// function showB() {
//     // body...
//     b = 10;

//     console.log(a);
//     console.log(b);
// }

// showB();

// console.log(a);
// console.log(global.b);
// functionName();
// function functionName() {
//     console.log("Hello world!");
// }


// const functionName = function (){
//     console.log("Hello world!");
// }
// functionName();

// const functionName = () => {}

// setTimeout(function() {
//     console.log("5s");
// }, 5000);

const countDown = function (count) {
    for (var i = count; i >= 0; i-- ) {
        setTimeout(function () {
            console.log(i);
        }, 1000);

    }
}

countDown(5);

// Block Scope

// function functionScope() {
//     var a = 3;
//     if (1 + 1 == 2) {
//         var b = 15;
//     }

//     function childFunction(){
//         var c = 25;
//         console.log(a);
//         console.log(b);
//     }

//     childFunction();

//     console.log(a);
//     console.log(b);
//     // console.log(c);
// }

// functionScope();

// var data = null;

// const print = function (i) {
//     console.log(i);
// }

// const otherFunction = function (callBack) {
//     // functionAsObject(15);
//     setTimeout(function () {
//         data = 15;
//         callBack(data);
//         print(data);
//     }, 1000);
//     console.log(data + 5);
// }

// otherFunction(print);