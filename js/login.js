document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;
  // get user passowrd
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;
  if (userEmail == "ForgiveMeDaddy" && userPassword == "YourSlave") {
    window.location.href = "banking.html";
  }
});
