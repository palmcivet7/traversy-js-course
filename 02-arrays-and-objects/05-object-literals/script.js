let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sport'],
};

x = person; // {name: 'John Doe', age: 30, isAdmin: true}
x = person.name; // John Doe
x = person['age']; // 30
x = person.address.state; // MA
x = person.hobbies[0]; // music

person.name = 'Jane Doe';
x = person; // {name: 'Jane Doe', age: 30, isAdmin: true, address: {…}, hobbies: Array(2)}
person['isAdmin'] = false; // {name: 'Jane Doe', age: 30, isAdmin: false, address: {…}, hobbies: Array(2)}

delete person.age; // {name: 'Jane Doe', isAdmin: false, address: {…}, hobbies: Array(2)}

person.hasChildren = true; // {name: 'Jane Doe', isAdmin: false, address: {…}, hobbies: Array(2), hasChildren: true}

person.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};
person.greet(); // Hello, my name is Jane Doe.

const person2 = {
  firstName: 'Brad',
  lastName: 'Traversy',
};
x = person2.firstName; // Brad

console.log(x);
