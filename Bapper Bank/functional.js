// ? Getting Input value
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const value = parseFloat(inputField.value);
  inputField.value = "";
  return value;
}

// ? Getting Field value
function getFieldValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const value = parseFloat(fieldTag.innerText);
  return value;
}

// ? Update Field value
function updateValue(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousValue = getFieldValue(fieldId);
  let newValue = previousValue + amount;
  totalTag.innerText = newValue;
  return newValue;
}

function updateBalance(amount, isAdding) {
  let balanceText = document.getElementById("showBalance");
  const previousBalance = getFieldValue("showBalance");
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  balanceText.innerText = newBalance;
}

document.getElementById("depositButton").addEventListener("click", () => {
  const amount = getInputValue("depositInput");
  if (amount > 0) {
    updateValue("showDeposit", amount);
    updateBalance(amount, true);
  } else {
    alert("Please enter amount");
  }
});

document.getElementById("withdrawButton").addEventListener("click", () => {
  const amount = getInputValue("withdrawInput");
  const balance = getFieldValue("showBalance");
  if (amount > 0 && amount <= balance) {
    updateValue("showWithdraw", amount);
    updateBalance(amount, false);
  } else {
    alert("Insufficient balance or amount");
  }
});
