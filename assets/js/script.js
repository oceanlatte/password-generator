// Assignment Code
var generateBtn = document.querySelector("#generate");

// symbols string " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function
function generatePassword() {
  var passwordLength = window.prompt(
    "How many characters should your password be? Please choose a nubmer between 8 - 128."
    );
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || passwordLength == "") {
    alert("Password must be 8 - 128 characters. Please choose a valid length.");
    generatePassword();
  }
  else {
    var generateNumbers = window.confirm(
      "Should your password contain numbers? Choose OK for yes."
    ); 
    
    var generateUpper = window.confirm(
      "Should your password contain uppercase letters? Choose OK for yes."
    );

    var generateSymbols = window.confirm(
      "Should your password contain symbols? Choose OK for yes."
    );
  }     
};