// Cash Out from the account

// Step1: add an event handler to the cash out button inside the form
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    // Prevent page reload
    event.preventDefault();
    // Step2: get money to be substracted to the account
    const cashOutInput = document.getElementById("input-cash-out").value;
    console.log(cashOutInput);
    // Get the pin number provided
    const cashOutPinNumberInput = document.getElementById(
      "input-cash-out-pin-number"
    ).value;
    console.log(cashOutPinNumberInput);
    // Step3: Validate pin number
    if (cashOutPinNumberInput === "1234") {
      console.log("Cash Out  is processing.");
      // Step4: Get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      // Step5: Substract cashOutMoneyInput from the balance
      // convert string to float number
      const cashOutMoneyNumber = parseFloat(cashOutInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutMoneyNumber;
      console.log(newBalance);
      // Step6: Update the balance in the DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out. Please try again.");
    }
  });
