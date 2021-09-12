// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialChar = "!@#$%^&*()"
var possibleChars = ""

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Enter Password Length between 8 and 128 characters.");
   if (passwordLength < 8) {
     alert("Please choose password between 8 and 128 characters.");
   }
  console.log(passwordLength)
  var lowerSelected = (window.confirm("Would you like to include lowercase characters?"));
  if (lowerSelected) {
    possibleChars += lowercase;
  }
  var upperSelected = (window.confirm("Would you like to include Uppercase characters?"));
  if (upperSelected) {
    possibleChars += uppercase;
  }
  var numericSelected = (window.confirm("Would you like to include numbers?"));
  if (numericSelected) {
    possibleChars += numeric;
  }
  var specialCharSelected = (window.confirm("Would you like to include special characters?"));
  if (specialCharSelected) {
    possibleChars += specialChar;
  }
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars.substring(randomNumber, randomNumber + 1)
   }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
