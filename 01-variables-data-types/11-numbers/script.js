const num = new Number(5);
let x;

x = num.toString(); // '5'
x = num.toString().length; // 1
x = num.toFixed(2); // 5.0
x = num.toPrecision(2); // 5.0
x = num.toExponential(2); // 5.00e+0
x = num.toLocaleString('en-US'); // 5

x = num.valueOf(); // 5

x = Number.MAX_VALUE; // 1.7976931348623157e+308
x = Number.MIN_VALUE; // 5e-324

console.log(x);
console.log(num);
