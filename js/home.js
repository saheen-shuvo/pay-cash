// Add money to the account

// Step1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // Prevent page reload
    event.preventDefault();
    // Step2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // Get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})