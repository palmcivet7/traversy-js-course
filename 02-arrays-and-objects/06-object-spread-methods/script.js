let x;

const todo = {};
// const todo = new Object();

todo.id = 1;
x = todo; // {id: 1}
todo.name = 'Buy Milk';
todo.completed = false;
x = todo; // {id: 1, name: 'Buy Milk', completed: false}

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat; // 42.9384

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { obj1, obj2 };
x = obj3; // {obj1: {…}, obj2: {…}}
const obj4 = { ...obj1, ...obj2 };
x = obj4; // {a: 1, b: 2, c: 3, d: 4}

const obj5 = Object.assign({}, obj1, obj2);
x = obj5; // {a: 1, b: 2, c: 3, d: 4}

const todos = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];
x = todos; // (3) [{…}, {…}, {…}]
x = todos[0].name; // Buy milk

// todo is the object from the start, distinct from *todos*
x = Object.keys(todo); // (3) ['id', 'name', 'completed']
x = todo.length; // undefined
x = Object.keys(todo).length; // 3

x = Object.values(todo); // (3) [1, 'Buy Milk', false]
x = Object.entries(todo); // (3) [Array(2), Array(2), Array(2)]
x = todo.hasOwnProperty('name'); // true
x = todo.hasOwnProperty('age'); // false

console.log(x);
