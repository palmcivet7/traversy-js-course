// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

for (let i = 0; i <= 10; i++) {
  if (i === 7) console.log(`${i} is my lucky number`);
  else console.log(`Number ${i}`);
}

// Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log(`Number ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (i === 4) console.log(`My name is ${names[i]}`);
}
