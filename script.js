// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var passwordLength= "";

  var passwordLength= window.prompt("How many characters would you like your password to consist of? It must be between 8 and 128 characters.");

    console.log(passwordLength);

    if(passwordLength <= 8 || passwordLength >= 128);

    console.log("Please choose a character number between 8 and 128");


    var addSpecial= window.prompt("Would you like to include special characters in your password?");

    


    var addNumber= window.prompt("Would you like to include numbers in your password?");


    var addUppercase= window.prompt("Would you like to include uppercase letters in your password?");

   
    var addLowercase= window.prompt("Would you like to include lowercase letters in your password?");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
