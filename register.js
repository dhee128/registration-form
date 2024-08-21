document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function() {
        // Display an alert message
        alert('Registration successful! Redirecting to login page.');
    });
});
// Register event listener for form submission
document.getElementById("submit-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting by default

    // Collect the form data
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("Contact").value;
    let address = document.getElementById("Address").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;

    // Example condition: check if all fields are filled
    if (firstname && lastname && email && contact && address && city && password) {
        // If all fields are filled, display a success message
        alert("Registration successful! Welcome, " + firstname + " " + lastname + ".");
        // You can also redirect to another page or perform additional actions here
    } else {
        // If any field is empty, show an alert
        alert("Please fill in all the required fields.");
    }
});

