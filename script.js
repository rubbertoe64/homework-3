// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, isLower, isUpper, isNumber, isSpecial) {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var chosenOptions = "";
  if(isLower) {
    chosenOptions = chosenOptions + lowercaseLetters;
  }
  if(isUpper) {
    chosenOptions = chosenOptions + uppercaseLetters;
  }
  if(isNumber) {
    chosenOptions = chosenOptions + numbers;
  }
  if(isSpecial) {
    chosenOptions = chosenOptions + specialChars;
  }

  var password = "";


  for(var i = 0; i < length; i++) {

    password = password + chosenOptions.charAt(Math.floor(Math.random() * chosenOptions.length));



  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  
  // var pwLength = prompt("Password Length?", "8") 
  
  do{
    var pwLength = parseInt(prompt("Please enter a number from 8 to 128", "8"));
  } while(isNaN(pwLength) || pwLength > 128 || pwLength < 8);

  
  do{
    var isLowercase = confirm("Do you want Lowercases?")
    var isUppercase = confirm("Do you want Uppercases?")
    var isNumeric = confirm("Do you want any Numbers?")
    var isSpecialChar = confirm("Do you want Special Characters?")
    
    if(!isLowercase && !isUppercase && !isNumeric && !isSpecialChar) {
      alert("Choose at least 1 option!")
    }
  } while (!isLowercase && !isUppercase && !isNumeric && !isSpecialChar)


  
  var password = generatePassword(pwLength, isLowercase, isUppercase, isNumeric, isSpecialChar);
  passwordText.innerHTML = password




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
