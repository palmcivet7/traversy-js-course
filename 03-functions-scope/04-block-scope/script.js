const x = 100;

if (true) {
  const y = 200;
  console.log(x + y); // 300
}

// console.log(x + y); // y is not defined error

for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(a); // undefined error
// console.log(b); // undefined error
console.log(c); // 700
/// avoid using var

function run() {
  var d = 100;
  console.log(d);
}
run(); // 100
// console.log(d); // undefined error
// var is function scoped, it cant be accessed outside of a function
// but it can be in other blocks like loops and if statements

const foo = 1;
var bar = 2;
