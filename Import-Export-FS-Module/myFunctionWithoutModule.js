const math = (number1, number2, number3, number4) => {
  let a = number1 + number2;
  if (number3) {
    a += number3;
  }

  if (number4) {
    a *= number4;
  }

  return a;
};

// Without "type": "module" in package.json
module.exports = math;
