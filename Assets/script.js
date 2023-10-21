// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let validChar = Array();
  let lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let capitalAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let number = ["0","1","2","3","4","5","6","7","8","9"];
  let specialChar = ["!","@","#","$","%","^","&","*","(",")","<",">","?","=","+","-"];
  let generatedPWD = "";
  let randomPassword = "";
  let passwordLength = prompt("Your custom password should be between 8 and 128 characters long.");
  passwordLength = Number(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your custom password should be between 8 and 128 characters long.");
    passwordLength = Number(passwordLength);
  }

  if (passwordLength == null) {
    passwordLength = prompt("Your custom password should be between 8 and 128 characters long.")
    passwordLength = Number(passwordLength);
  }

  else {
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
    for (let i = 0; i < passwordLength; i++){
      randomPassword = validChar[Math.floor(Math.random() * validChar.length)];
      generatedPWD = generatedPWD + randomPassword;
    }
  } return generatedPWD;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
