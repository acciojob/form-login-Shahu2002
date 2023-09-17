// script.js

// script.js

function getFormvalue() {
  // Get the value of the first name and last name input fields
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  // Check if either first name or last name is empty
  if (firstName === "" || lastName === "") {
    alert("Please enter both first and last names.");
  } else {
    // Display the first and last name using an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
  }

  // Prevent the form from submitting and refreshing the page
  return false;
}

