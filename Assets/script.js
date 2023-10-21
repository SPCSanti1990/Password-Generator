// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let validChar = "";
  let lowerAlpha = ["abcdefghijklmnopqrstuvwxyz"];
  let capitalAlpha = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let number = ["0123456789"];
  let specialChar = ["!@#$%^&*()<>?=+-"];

  if (confirm("Use Lower Case Characters?")) {
    validChar = validChar + lowerAlpha;
  }
  if (confirm("Use Upper Case Characters?")) {
    validChar = validChar + capitalAlpha;
  }
  if (confirm("Use Numbers?")) {
    validChar = validChar + number;
  }
  if (confirm("Use Special Characters?")) {
    validChar = validChar + specialChar;
  }
  for (let i = 0; i < length; i++){
    const randomPassword = Math.floor(Math.random() * validChar.length);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
