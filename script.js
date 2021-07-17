// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}
function generatePassword() {
  var finalPassword = []; 
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var passwordLength= "";

  var passwordLength= window.prompt("How many characters would you like your password to consist of? It must be between 8 and 128 characters.");

    console.log(passwordLength);

    passwordLength = Number.parseInt(passwordLength);
    
    console.log(passwordLength);
    
    if (passwordLength < 8 || passwordLength > 128 ) { ; 



      window.alert("Please choose a character number between 8 and 128");
    
      //passwordLength= window.prompt("How many characters would you like your password to consist of? It must be between 8 and 128 characters.");
     
      generatePassword() 
    }
    if(Number.isNaN(passwordLength)) {

      

      window.alert("You must choose a number.");

      //passwordLength= window.prompt("How many characters would you like your password to consist of? It must be between 8 and 128 characters.");
     
      generatePassword()
    }



    var addSpecial= window.confirm("Would you like to include special characters in your password?");

    if(addSpecial) { 
      var randomSpecial= special [Math.floor(Math.random()*special.length)];
      console.log(randomSpecial);


      //add forloop , each loop push to pass array, cut by length of chosen length, join, return string you generate from array
    }


    var addNumber= window.confirm("Would you like to include numbers in your password?");

    if(addNumber) { 
      var randomNumber= number [Math.floor(Math.random()*number.length)];
      console.log(randomNumber);
    }
    var addUppercase= window.confirm("Would you like to include uppercase letters in your password?");

    if(addUppercase) { 
      var randomUppercase= uppercase [Math.floor(Math.random()*uppercase.length)];
      console.log(randomUppercase);
    }
      var addLowercase= window.confirm("Would you like to include lowercase letters in your password?");

      if(addLowercase) { 
        var randomLowercase= lowercase [Math.floor(Math.random()*lowercase.length)];
        console.log(randomLowercase);
      }

      for (var i = 0; i < passwordLength; i++) {

        var finalPasswordIndex = finalPassword[Math.floor(Math.random()*finalPassword.length)];

        console.log(finalPassword);
   
   return finalPassword;

   
   
      }
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
