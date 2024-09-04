const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

const person = {
  firstName,
  lastName,
  age,
};

x = person.age; // 30

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

x = name; // John
x = todoId; // 1

// Destructure arrays
const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers;
console.log(first, second); // 23 67
console.log(first, second, rest); // 23 67 (2) [33, 49]

console.log(x);
