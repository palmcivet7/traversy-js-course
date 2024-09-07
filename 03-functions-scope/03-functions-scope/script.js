// window.alert('hello');
// alert('hello');
// console.log(window.innerWidth);
// console.log(innerWidth);

const x = 100;
console.log(x, 'in global');

function run() {
  //   console.log(window.innerHeight);
  console.log(x, 'in function');
}
run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const y = 50;
  console.log(y, 'in function');
}
add();
// console.log(y, 'in global'); // undefined error

// local scope refers to whatever scope we are currently in
