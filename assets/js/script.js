// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

var lowerOutput = "";

for (let i = 0; i < numbers.length; i++) {
  var getNumber = numbers[i];
}

for (let i = 0; i < lowerCase.length; i++) {
  var getLower = lowerCase[i];
} 

for (let i = 0; i < upperCase.length; i++) {
  var getUpper = upperCase[i];
}

for (let i = 0; i < specialCharacters.length; i++) {
  var getSpecial = specialCharacters[i];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Criteria for password prompts
function generatePassword() {
  var passwordLength = prompt(
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
      if (generateNumbers) {
        return getNumber;
      }
      

    var generateLower = window.confirm(
      "Should your password contain lowercase letters? Choose OK for yes."
    );
    
    var generateUpper = window.confirm(
      "Should your password contain uppercase letters? Choose OK for yes."
    );

    var generateSymbols = window.confirm(
      "Should your password contain symbols? Choose OK for yes."
    );
  } 
  // call the concatenated string functions


  // return generatePassword;    
};