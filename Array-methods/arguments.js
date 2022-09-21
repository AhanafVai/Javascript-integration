function addNum(num) {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
}

const sum = addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
