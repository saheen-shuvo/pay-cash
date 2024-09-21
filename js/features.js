// Show the cash out form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("show cash out btn clicked");
    // Show the cash out section by removing hidden from its class
    document.getElementById("form-cash-out").classList.remove("hidden");
    // Hide Add money form
    document.getElementById("form-add-money").classList.add("hidden");
    document
    .getElementById("section-transaction-history")
    .classList.add("hidden");
  });
// SHow Add Money form and hide rest
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("show cash out btn clicked");
    document.getElementById("form-add-money").classList.remove("hidden");
    document.getElementById("form-cash-out").classList.add("hidden");
    document
    .getElementById("section-transaction-history")
    .classList.add("hidden");
  });
// Show Transaction History Section hide rest
document
  .getElementById("btn-show-transaction-history")
  .addEventListener("click", function () {
    console.log("show transaction history btn clicked");
    document
      .getElementById("section-transaction-history")
      .classList.remove("hidden");
      document.getElementById("form-add-money").classList.add("hidden");
      document.getElementById("form-cash-out").classList.add("hidden");

  });
