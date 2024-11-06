const colorObject = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObject) {
  console.log(key, colorObject[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const color in colorArr) {
  console.log(color); // index
  console.log(colorArr[color]); // red, green, etc
}
