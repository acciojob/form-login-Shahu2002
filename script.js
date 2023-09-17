// script.js

function getFormvalue() {
  // Get the form element by its ID
  var form = document.getElementById("myForm");

  // Access the input elements for first and last name by their IDs
  var firstNameInput = document.getElementById("firstName");
  var lastNameInput = document.getElementById("lastName");

  // Get the values entered by the user
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;

  // Check if either first name or last name is empty
  if (firstName === "" || lastName === "") {
    alert("Please enter both first and last names.");
  } else {
    // Display the first and last name using an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // You can also clear the form fields if needed
    firstNameInput.value = "";
    lastNameInput.value = "";
  }

  // Prevent the form from submitting and refreshing the page
  return false;
}

