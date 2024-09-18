// Step1: Set Event Handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step2: Prevent Default behavior (reloading browser prevents)
    event.preventDefault();
    console.log('login button clicked');
    // Step3: Get the phone number
    const phoneNumber= document.getElementById('phone-number').value;
    console.log(phoneNumber);
})