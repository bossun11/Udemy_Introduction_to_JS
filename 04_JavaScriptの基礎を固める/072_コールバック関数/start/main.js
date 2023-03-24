// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello' + callback(lastname));
// }

// function getName() {
//   return 'tuttun';
// }

// const getFirstName = function() {
//   return 'bossun' + name;
// }

// hello(getFirstName + 'tuttun');

function doSomething(a, b, callback) {
  const result = callback(a, b);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, plus);