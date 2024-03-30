//There are two ways to achieve the curring function
// using bind and using closures
// let multiply = function (x, y) {
//   console.log(x * y);
// };

let multiplyUsingClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

let multiplyByTwo = multiplyUsingClosure(3);
multiplyByTwo(5);

// console.log(multiplyByTwo);
