let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers);

const mixed = [12, 'Hello', true, null];
console.log(mixed);

// Array Constructor
const fruits = new Array('apple', 'grapes', 'orange');
console.log(fruits); // (3) ['apple', 'grapes', 'orange']

// --- //

x = numbers[0]; // 12
x = numbers[0] + numbers[3]; // 41
x = `My favourite fruit is ${fruits[2]}.`; // My favourite fruit is orange.
x = numbers.length; // 5

fruits[2] = 'pear';
x = fruits; // (3) ['apple', 'grapes', 'pear']

// fruits.length = 2; // (2) ['apple', 'grapes']

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry'; // (5) ['apple', 'grapes', 'pear', 'strawberry', 'blueberry']
fruits[fruits.length] = 'peach'; // (6) ['apple', 'grapes', 'pear', 'strawberry', 'blueberry', 'peach']

console.log(x);
