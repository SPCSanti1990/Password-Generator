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
  let lowerAlpha = ["abcdefghijklmnopqrstuvwxyz"];
  let capitalAlpha = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let number = ["0123456789"];
  let specialChar = ["!@#$%^&*()<>?=+-"];
  let generatedPWD = "";
  let passwordLength = prompt("Your custom password should be between 8 and 128 characters long.");
  Number(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    length = prompt("Your custom password should be between 8 and 128 characters long.");
  Number(passwordLength);
  }

  if (passwordLength == null) {
    passwordLength = prompt("Your custom password should be between 8 and 128 characters long.")
  Number(passwordLength);
  }

  else {
    if (confirm("Use Lower Case Characters?")) {
      validChar.push(lowerAlpha);
    }
    if (confirm("Use Upper Case Characters?")) {
      validChar.push(capitalAlpha);
    }
    if (confirm("Use Numbers?")) {
      validChar.push(number);
    }
    if (confirm("Use Special Characters?")) {
      validChar.push(specialChar);
    }
    for (let i = 0; i < passwordLength; i++){
      let randomPassword = validChar(Math.floor(Math.random() * passwordLength));
      generatedPWD = generatedPWD + randomPassword;
    }
  } return generatedPWD;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
