// Assignment code here
function generatePassword() {
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var pass = "";

  for (var i=0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    pass += characters.substring(randomNumber, randomNumber +1);
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generatePassword());