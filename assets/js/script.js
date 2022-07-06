// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Character Arrays
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

var passwordOutput = "";
var confirmedArray = [];
var characters = 8;

function passwordLength() {
  characters = parseInt(prompt(
    "How many characters should your password be? Please choose a number between 8 - 128."
  ));
  console.log(characters);
    if (characters < 8 || characters > 128 || characters === null || characters == "") {
      alert("Password must be between 8 - 128. Please choose a valid length.");
      passwordLength();
    }
};

function confirmPrompts() {
  confirmedArray = [];
  if (window.confirm("Should your password contain numbers? Choose OK for yes.")) {
    //run the array if generateNumbers = true
    confirmedArray = confirmedArray.concat(numbersArray);
    console.log(confirmedArray, "numbers");
  }
  
  if (window.confirm("Should your password contain lowercase letters? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(lowerCase);
    console.log(confirmedArray, "lowercase");
  }
  
  if (window.confirm("Should your password contain uppercase letters? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(upperCase);
    console.log(confirmedArray, "upper");
  }

  if (window.confirm("Should your password contain symbols? Choose OK for yes.")) {
    confirmedArray = confirmedArray.concat(specialCharacters);
    console.log(confirmedArray, "symbols");
  }
  else if (confirmedArray.length == 0) {
    confirmedArray = confirmedArray.concat(lowerCase);
    console.log(confirmedArray);
  }
};

function generatePassword() {
  passwordLength();
  confirmPrompts();
  // call the concatenated array
  for (var i = 0; i < characters; i++) {
      var getRandomIndex = Math.floor(Math.random() * confirmedArray.length);
      passwordOutput = passwordOutput + confirmedArray[getRandomIndex];
    }

  // return generated password;
  return passwordOutput; 
}