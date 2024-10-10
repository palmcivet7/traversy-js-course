console.log(10 > 20 && 30 > 15); // false
console.log(10 > 20 || 30 > 15); // true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
console.log(a); // 20

a = 10 && 20 && 30;
console.log(a); // 30

a = 10 && 0 && 30;
console.log(a); // 0

a = 10 && '' && 0 && 30;
console.log(a); // '' (Empty String)

// const posts = ['Post One', 'Post Two'];
// console.log(posts[0]); // Post One

const posts = [];
posts.length > 0 && console.log(posts[0]); // '' (Empty String)

// || - Will return the first truthy value or the last value
let b;

b = 10 || 20;
console.log(b); // 10

b = 0 || 20;
console.log(b); // 20

b = 0 || null || '' || undefined;
console.log(b); // undefined

// ?? - Returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20; // 10
c = null ?? 20; // 20
c = undefined ?? 30; // 30
c = 0 ?? 30; // 0
c = '' ?? 30; // '' (Empty String)
console.log(c);
