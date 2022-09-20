const button = document.getElementById("loginSubmit");
const user = document.getElementById("user");
const password = document.getElementById("password");

button.addEventListener("click", function () {
  if (user.value == "ahanaf" && password.value == "420") {
    window.location.href = "banking.html";
  } else {
    console.log("fuckoff");
  }
});
