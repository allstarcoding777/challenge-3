// Assignment Code
var generateBtn = document.querySelector("#generate");
const key_strings = {
  //create array or string of all lowercase characters
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  //create array or string of all upper characters
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //create array or string of all number characters
  number: "0123456789",
  //create array or string of all special characters
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};
//Create empty array
var generatedPassword = "";

// Write password to the #password input
console.log(password)
function writePassword() {
  var password = generatePassword();
  var textArea = document.querySelector("#password");

  //Display/set password value on textArea
  textArea.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Enter a number from 8 to 128 for password length.");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password needs to be between 8 and 128 characters.");
  }

  else {
    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
      generatedPassword += key_strings.lowercase;
    };
  
    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
      generatedPassword += key_strings.uppercase;
    };
    
    var symbol = window.confirm("Would you like to use symbols?");
    if (symbol) {
      generatedPassword += key_strings.symbol;
    };
    
    var number = window.confirm("Would you like to use numbers?");
    if (number) {
      generatedPassword += key_strings.number;
    };
let password = "";
    //Loop through the array based on the passwordLength
    for (var i = 0; i < passwordLength; i++) {
      console.log(Math.floor(Math.random() * generatedPassword.length))
      password += generatedPassword[Math.floor(Math.random() * generatedPassword.length)]
    }
    console.log(generatedPassword)
    return password;
  }
  
}

// Add event listener to generate buttons
generateBtn.addEventListener("click", writePassword);