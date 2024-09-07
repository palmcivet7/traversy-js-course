// Default Params
function registerUser(user = 'Bot') {
  //   if (!user) {
  //     user = 'Bot';
  //   }
  return user + ' is registered';
}
console.log(registerUser('John')); // John is registered

// Rest Params
function sum(...numbers) {
  return numbers;
}
console.log(sum(1, 2, 3)); // (3) [1, 2, 3]

function sum2(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}
console.log(sum2(1, 2, 3)); // 6

// Object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user)); // The user John with the id of 1 is logged in
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
); // The user Sara with the id of 2 is logged in

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}
console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9])); // single random number

// alternative way:
function getRandom2(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}
console.log(getRandom2(1, 2, 3, 4, 5, 6, 7, 8, 9)); // single random number
