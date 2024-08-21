document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function() {
        alert('Registration successful! Redirecting to login page.');
    });
});
document.getElementById("submit-container").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("Contact").value;
    let address = document.getElementById("Address").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;
    if (firstname && lastname && email && contact && address && city && password) {
        alert("Registration successful! Welcome, " + firstname + " " + lastname + ".");
    } else {
        alert("Please fill in all the required fields.");
    }
});

