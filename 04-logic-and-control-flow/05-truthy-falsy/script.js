const email = 'test@test.com';

// true
if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email)); // true

/// --------------------------------------------------------------------- ///

// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// const x = false;
// const x = 0;
// const x = '';
const x = null;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x)); // false

// const z = 'false';
// const z = ' ';
const z = [];

if (z) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(z)); // true

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
} // You have 0 children

// Checking for empty arrays
// const posts = ['Post One', 'Post Two'];
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts to list');
} // No Posts to list

// Checking for empty objects
// const user = {
//   name: 'Brad',
// };
const user = {};

console.log(user.length); // undefined

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
} // No user

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(false === 0); // false
console.log(null === undefined); // false
