const myString = 'developer';
const zerothIndex = myString.charAt(0);
const zerothUpper = zerothIndex.toUpperCase();
const myNewString = myString.replace(zerothIndex, zerothUpper);
console.log(myNewString);

// Solution 1
let newString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(newString);

// Solution 2
newString = myString[0].toUpperCase() + myString.substring(1);
console.log(newString);

// Solution 3
newString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(newString);
