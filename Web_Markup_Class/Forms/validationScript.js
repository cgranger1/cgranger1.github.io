    // JavaScript code for form validation

document.getElementById("myForm").addEventListener("submit", function (event) {

    // Retrieve the input field value
    let infield = document.forms["myForm"].elements["inputField"].value;

    // Regular expression pattern for alphanumeric input
    let regex = /^[a-zA-Z0-9]*$/

    // Prevent form from submitting
    if (infield === "") {
        alert("Input is required.");
        event.preventDefault();
    }

    // Check if the input value matches the pattern
    else if (!regex.test(infield)) {

        // Invalid input: display error message
        alert("Invalid input. Please try again.");
        event.preventDefault();
    }
        // Valid input: display confirmation and submit the form
    else {
        alert("Thank you for submitting the form!");
    }})