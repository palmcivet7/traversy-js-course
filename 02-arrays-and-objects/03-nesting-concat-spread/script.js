let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits; // (4) ['apple', 'pear', 'orange', Array(3)]
// x = fruits[3]; // (3) ['strawberry', 'blueberry', 'raspberry']
// x = fruits[3][1]; // blueberry

const allFruits = [fruits, berries];
x = allFruits; // (2) [Array(4), Array(3)]
x = allFruits[1][0]; // strawberry

x = fruits.concat(berries); // (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry']

// Spread Operator
x = [...fruits, ...berries]; // (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry']
x = [...fruits, berries]; // (4) ['apple', 'pear', 'orange', Array(3)]

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr; // (6) [1, 2, Array(2), 5, Array(2), 8]
x = arr.flat(); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Static Methods on Array Objects
x = Array.isArray(fruits); // true
x = Array.isArray('hello'); // false
x = Array.from('12345'); // (5) ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // (3) [1, 2, 3]

console.log(x);
