// String
const firstName = 'Sara';
// const output = firstName;

// Number 
const age = 35;
const temp = 98.9;
// const output = temp;

// Boolean
const hasKids = true;
// const output = hasKids;

// Nill
const aptNumber = null;
// const output = aptNumber;

// Undefined
let score;
// const score = undefined;
// const output = score;

// Symbol
const id = Symbol('id');
// const output = id;

// BigInt
const n = 9007199254740991n;
// const output = n;

// Reference Types
const numbers = [1,2,3,4,];
// const output = numbers;

const person = {
    name: 'Brad',
};
// const output = person;

function sayHello(){
    console.log('Hello');
}
const output = sayHello;


console.log(output, typeof output);