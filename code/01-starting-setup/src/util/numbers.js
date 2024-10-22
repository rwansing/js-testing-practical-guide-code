export function transformToNumber(value) {
  // return NaN;
  return +value;
}

export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const num of numberInputs) {
    numbers.push(+num);
  }
  return numbers;
}
