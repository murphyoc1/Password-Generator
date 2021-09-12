// Assignment Code
var generateBtn = document.querySelector("#generate");

//var randomNumber = function() {
//  var value = Math.floor(Math.random());
//  return value;
//};

// Write password to the #password input
function writePassword() {
//  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Enter Password Length between 8 and 128 characters.");
   if (passwordLength < 8) {
     alert("Please choose password between 8 and 128 characters.");
   }
  if (window.confirm("Would you like to include lowercase characters?")) {
    isLowercase 
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
