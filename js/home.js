// Add money to the account

// Step1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // Prevent page reload
    event.preventDefault();
    // Step2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    // Get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
    // Step3: Validate pin number
    // NaN verify
    if(isNaN(addMoneyInput)){
      alert('Failed to Add Money.')
      return;
    }
    if (pinNumberInput === "1234") {
      console.log("Adding money to your account");
      // Step4: Get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      // Step5: add addMoneyInput with balance
      // convert string to float number
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);
      // Step6: Update the balance in the DOM
      document.getElementById("account-balance").innerText = newBalance;

      //Add to transaction History
      const p = document.createElement("p");
      p.classList.add('bg-green-500')
      p.innerText = `Added: ${addMoneyNumber} Tk. New Balance: ${newBalance}`;
      // Add to transaction list
      document.getElementById("transaction-container").appendChild(p);
      console.log(p);
    } else {
      alert("Failed to add money. Please try again.");
    }
  });
