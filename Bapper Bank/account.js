const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const depositInput = document.getElementById("depositInput");
const depositButton = document.getElementById("depositButton");
const withdrawInput = document.getElementById("withdrawInput");
const withdrawButton = document.getElementById("withdrawButton");
const showDeposit = document.getElementById("showDeposit");
const showWithdraw = document.getElementById("showWithdraw");
const showBalance = document.getElementById("showBalance");

// default values

let setDeposit = 0;
let setWithdraw = 0;
let setBalance = 0;

// DRY
function getInput(inputId) {
  let input = document.getElementById(inputId);
  let amount = parseInt(input.value);
  input.value = " ";
  return amount;
}

// deposit
depositButton.addEventListener("click", () => {
  let amount = getInput("depositInput");
  setDeposit += amount;
  showDeposit.textContent = "$" + setDeposit.toFixed(2);
  setBalance += amount;
  showBalance.textContent = "$" + setBalance.toFixed(2);
});

// withdraw
withdrawButton.addEventListener("click", () => {
  let amount = getInput("withdrawInput");
  if (setBalance < amount) {
    alert("fuck-off");
    return;
  }
  setWithdraw += amount;
  showWithdraw.textContent = "$" + setWithdraw.toFixed(2);
  setBalance -= amount;
  showBalance.textContent = "$" + setBalance.toFixed(2);
});
