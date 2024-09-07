// Challenge 1
const getCelsius = (f) => {
  return ((f - 32) * 5) / 9;
};
console.log(getCelsius(100)); // 37.77777777777778
console.log(`The temperature is ${getCelsius(32)}\xB0C.`);

// Challenge 2
const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});
console.log(minMax([1, 2, 3, 4, 5])); // {min: 1, max: 5}

// Challenge 3
(function (height, width) {
  console.log(
    `The area of a rectangle with a height of ${height} and a width of ${width} is ${
      height * width
    }`
  );
})(innerHeight, innerWidth);
