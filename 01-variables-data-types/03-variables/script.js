// Ways to declare a variable
// var, let, const

let firstName = 'Palm';
let lastName = 'Civet';
console.log(firstName, lastName);

let age = 40;
console.log(age);

let name1 = 'name one';

// reassigning variables
age = 42;
console.log(age);

let score;
score = 1;
console.log(score); // 1

if (true) score = score + 1;
console.log(score); // 2

const X = 100;

const arr = [1,2,3,4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad'
};
person.name = 'John';
console.log(person); // John

person.email = 'brad@gmail.com';
console.log(person); // {name: 'John', email: 'brad@gmail.com'}

// Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30;
console.log(d); // 10
console.log(a); // undefined