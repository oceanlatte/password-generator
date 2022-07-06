// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

var confirmedArray = [];
var characters = 8;
var passwordOutput = "";

function passwordLength() {
  characters = parseInt(prompt(
    "How many characters should your password be? Please choose a number between 8 - 128."
  ));
  console.log(characters);
    if (characters < 8 || characters > 128 || !characters) {
      alert("Password must be between 8 - 128. Please choose a valid length.");
      passwordLength();
    }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // check if a previous password has been generated
  if (!passwordText.value) {
    passwordText.value = password;
  }
  // reset textarea if new password is generated
  else {
    passwordText.value = "";
    passwordText.value = password;
  }
};

function confirmPrompts() {
  if (window.confirm("Should your password contain numbers? Choose OK for yes.")) {
    //run the array if generateNumbers = true
    confirmedArray = confirmedArray.concat(numbersArray);
  }
  
  if (window.confirm("Should your password contain lowercase letters? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(lowerCase);
  }
  
  if (window.confirm("Should your password contain uppercase letters? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(upperCase);
  }

  if (window.confirm("Should your password contain symbols? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(specialCharacters);
  }
  // if not options are chosen then use lowercase as default
  else if (confirmedArray.length == 0) {
    confirmedArray = confirmedArray.concat(lowerCase);
  }
};

function generatePassword() {
  // reset values before making another password
  confirmedArray = [];
  passwordOutput = "";
  
  // call parameter functions
  passwordLength();
  confirmPrompts();

  // call the concatenated array to generate randomized password
  for (var i = 0; i < characters; i++) {
      var getRandomIndex = Math.floor(Math.random() * confirmedArray.length);
      passwordOutput += confirmedArray[getRandomIndex];
    }
  // return newly generated password;
  return passwordOutput; 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);