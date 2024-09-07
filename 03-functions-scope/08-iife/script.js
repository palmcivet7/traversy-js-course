// Immediately invoked function expressions
// const user = 'John'; // user already declared error

(function () {
  const user = 'John';
  console.log(user);

  const hello = () => console.log('hello from the IIFE');
  hello();
})(); // John
// hello from the IIFE

(function (name) {
  console.log('Hello ' + name);
})('Shawn'); // Hello Shawn

(function hello() {
  console.log('hello');
})(); // hello
