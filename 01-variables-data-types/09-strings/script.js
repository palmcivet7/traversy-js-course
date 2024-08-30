let x;

const name = 'John';
const age = 31;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
const s = new String('Hello World'); // turns string into string object

x = typeof s; // object

x = s.length; // 11

// Access value by key
x = s[1]; // e

x = s.__proto__;

x = s.toUpperCase(); // HELLO WORLD
x = s.toLowerCase(); // hello world

x = s.charAt(0); // H

x = s.indexOf('e'); // 1
x = s.indexOf('z'); // -1

x = s.substring(0, 5); // Hello
x = s.substring(1, 5); // ello
x = s.substring(7); // orld

x = s.slice(7); // orld
x = s.slice(-9); // llo World
x = s.slice(-11); // Hello World
x = s.slice(1); // ello World
x = s.slice(-11, -6); // Hello

x = '         Hello World';
x = s.trim(); // Hello World

x = s.replace('World', 'John'); // Hello John

x = s.includes('Hello'); // true
x = s.includes('Hi'); // false

x = s.valueOf(); // Hello World

x = s.split(); // ['Hello World']
x = s.split(' '); // (2) ['Hello', 'World']
x = s.split(''); // (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(x);
