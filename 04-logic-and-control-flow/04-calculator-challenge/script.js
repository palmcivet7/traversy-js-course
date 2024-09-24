function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '&':
      console.log('Error!');
      break;
    default:
      console.log('Invalid operator');
      break;
  }
}

const result = calculator(2, 4, '+');
console.log(result);
