const arr = [34, 55, 95, 20, 15]; // (5) [34, 55, 95, 20, 15]

arr.push(100); // (6) [34, 55, 95, 20, 15, 100]
arr.pop(); // (5) [34, 55, 95, 20, 15]
arr.unshift(99); // (6) [99, 34, 55, 95, 20, 15]
arr.shift(); // (5) [34, 55, 95, 20, 15]
arr.reverse(); // (5) [15, 20, 95, 55, 34]
arr.reverse(); // (5) [34, 55, 95, 20, 15]

x = arr.includes(26); // false
x = arr.includes(34); // true
x = arr.indexOf(15); // 4
x = arr.indexOf(340); // -1

// slice stops at the second index param passed
x = arr.slice(1, 4); // (3) [55, 95, 20]
// splice includes the amount of indexes as the second param passed
// x = arr.splice(1, 4); // (4) [55, 95, 20, 15]

// the arr object no longer includes the index of the first param
// x = arr.splice(3, 1); // [20]
// console.log(arr); // (4) [34, 55, 95, 15]

// x = arr.splice(1, 4).reverse().toString(); // 15,20,95,55
x = arr.splice(1, 4).reverse().toString().charAt(0); // 1

console.log(x);
