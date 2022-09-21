const numbers = ["12", "23", "34", "53"];
const numberSlice = numbers.slice(1, 3); // cut
const numberSplice = numbers.splice(1, 3); // removed
console.log(numberSplice);
console.log(numbers);

const num = [11, 31, 21, 41, 61, 81, 51, 17];
const people = ["Bal", "sal", "mal", "tal", "kal"];
const sortNum = num.sort(function (a, b) {
  return a - b;
});
const reversePeople = people.sort().reverse();
console.log(reversePeople);
console.log(sortNum);
