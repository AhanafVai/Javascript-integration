const anthem = "I love you bangla";
const search = "goodbye";

const saveUserName = "blackPink";
const userInput = "blACkPink";
if (userInput.toLowerCase() == saveUserName.toLocaleLowerCase()) {
  console.log("user exist");
}

// search
const products = [
  "Del laptop",
  "Lg laptop",
  "Rc Laptop",
  "iphone 2",
  "iphone 3",
  "iphone 4",
];

// const searching = "laptop";
// const output = [];
// for (const product of products) {
//   if (
//     product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1
//   ) {
//     output.push(product);
//   }
// }

// console.log(output);

const searching = "laptop";
const output = [];
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);

const gana = "amar sonar bangla ami tomay bhalo bashi.";
const words = gana.split(" ");
const wordsA = gana.split("a");
// console.log(wordsA);

// slice
const smallSlice = gana.slice(5, 17);
console.log(smallSlice);

// substr
// const another = gana.substr(11, 7);
// console.log(another);

// const another = gana.substring(11, 7);
// console.log(another);

const first = "dhaka";
const second = "city";
const full = first.concat(second);
const word = ["wi", "fi"];
console.log(word.join("-"));
console.log(full);
