// Step1: Set Event Handler
document.getElementById('btn-login').addEventListener('click', function(event){

    // Step2: Prevent Default behavior (reloading browser prevents)
    event.preventDefault();

    // Step3: Get the phone number and pin number
    const phoneNumber= document.getElementById('phone-number').value;
    const pinNumber= document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // Step4: Validate phone number and pin
    if(phoneNumber=== '01751967704' && pinNumber=== '1234'){
        console.log('You are logged in.');
        window.location.href = "./home.html";
    }
    else{
        alert('Incorrect Phone Number or PIN')
    }
})