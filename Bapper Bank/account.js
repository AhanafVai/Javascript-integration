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

// deposit
depositButton.addEventListener("click", () => {
  let deposit = parseFloat(depositInput.value);
  setDeposit += deposit;
  showDeposit.textContent = "$" + setDeposit.toFixed(2);
  setBalance += deposit;
  showBalance.textContent = "$" + setBalance.toFixed(2);
});

// withdraw
withdrawButton.addEventListener("click", () => {
  let withdraw = parseFloat(withdrawInput.value);
  if (setBalance < withdraw) {
    alert("fuck-off");
    return;
  }

  setWithdraw += withdraw;
  showWithdraw.textContent = "$" + setWithdraw.toFixed(2);
  setBalance -= withdraw;
  showBalance.textContent = "$" + setBalance.toFixed(2);
});
