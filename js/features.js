// Show the cash out form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("show cash out btn clicked");
    // Show the cash out section by removing hidden from its class
    document.getElementById("form-cash-out").classList.remove("hidden");
    // Hide Add money form
    document.getElementById("form-add-money").classList.add("hidden");
  });
// SHow Add Money form and hide cash out
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("show cash out btn clicked");
    document.getElementById("form-add-money").classList.remove("hidden");
    document.getElementById("form-cash-out").classList.add("hidden");
  });
