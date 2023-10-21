// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Random password generator function
function generatePassword() {
  // Empty array to store user defined characters based on promt
  let validChar = Array();
  // Arrays containing characters used in password generation
  let lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let capitalAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let number = ["0","1","2","3","4","5","6","7","8","9"];
  let specialChar = ["!","@","#","$","%","^","&","*","(",")","<",">","?","=","+","-"];
  // Variable used to store generated password
  let generatedPWD = "";
  // Variable used to temporarly store picked character from generated array
  let randomPassword = "";
  // Varaible to store password length
  let passwordLength = prompt("Your custom password should be between 8 and 128 characters long.");
  passwordLength = Number(passwordLength);

  // Check to see if input is between 8 and 128
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Promt user to select what characters to use and add them to an array
    if (confirm("Use Lower Case Characters?")) {
      validChar = validChar.concat(lowerAlpha);
    }
    if (confirm("Use Upper Case Characters?")) {
      validChar = validChar.concat(capitalAlpha);
    }
    if (confirm("Use Numbers?")) {
      validChar = validChar.concat(number);
    }
    if (confirm("Use Special Characters?")) {
      validChar = validChar.concat(specialChar);
    }
    // Loop through created array, the number of times decided by user to randomly pick characters
    for (let i = 0; i < passwordLength; i++){
      randomPassword = validChar[Math.floor(Math.random() * validChar.length)];
      generatedPWD = generatedPWD + randomPassword;
    }
    // Return generated password
   return generatedPWD;
  }
  // Check to see if input is a number
  else {
  writePassword();
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
