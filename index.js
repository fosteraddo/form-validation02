// Get the form element
var form = document.getElementById("myForm");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Validate the form fields
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  
  // Validate the name field
  if (nameInput.value === "") {
    alert("Please enter your name.");
    return;
  }
  
  // Validate the email field
  if (emailInput.value === "") {
    alert("Please enter your email address.");
    return;
  }
  
  // Check if the email is valid using a regular expression
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

//       <!-- Include the validator.js library -->
// <script src="https://cdn.jsdelivr.net/npm/validator@13.6.0/validator.min.js"></script>

// <script>
//   // Validate the email field using the validator.js library
//   var emailInput = document.getElementById("email");

//   if (!validator.isEmail(emailInput.value)) {
//     alert("Please enter a valid email address.");
//     return;
//   }
// </script>
  
  // Validate the password field
  if (passwordInput.value === "") {
    alert("Please enter a password.");
    return;
  }
  
  // If all fields are valid, submit the form
  alert("Form submitted successfully!");
  form.submit();
});
