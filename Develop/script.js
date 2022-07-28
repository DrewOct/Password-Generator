// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
let length = 0;
let lcConfirm = false;
let upConfirm = false;
let numsConfirm = false;
let specialsConfirm = false;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  getLength();
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add a function to determine password length
function getLength() {
  const pwLength = window.prompt("How long do you want your Password to be?");
  if (parseInt(pwLength) >= 8 && parseInt(pwLength) <= 128) {
    console.log("success with that number", pwLength);

    // set global variable to the local variable's value
    length = parseInt(pwLength);
    // Then call the next function for lowercase values
    lowercase();
  } else {
    alert("you need to choose an actual numeric length");
  }
  return "Test Password";
}

// Ask all other criteria: lowercase, uppercase, numbers, special characters

function lowercase() {
  const lcLetters = window.confirm("Do you want lowercase letters?");
  if (lcLetters) {
    // set global lcConfirm var to this local one
    lcConfirm = lcLetters;
    // lowercase, uppercase, numbers, special characters
  }
  uppercase();
}

function uppercase() {
  const upLetters = window.confirm("Do you want uppercase letters?");

  if (upLetters) {
    // set global upConfirm var to this local one
    upConfirm = upLetters;
  }
  numbers();
}

function numbers() {
  const num = window.confirm("Do you want numbers?");

  if (num) {
    // set global numConfirm var to this local one
    numsConfirm = num;
    specials();
  }
}

function specials() {
  const spec = window.confirm("Do you want special characters?");
  if (specialsConfirm) {
    // set global specialsConfirm to this local one
    specialsConfirm = spec;
    //generatePassword();
  }
}

function generatePassword() {
  let chars = ""; // "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 \"!#$%&'()*+,-./;:<=>?@[\\]^_`{|}~";
  if (lcConfirm) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upConfirm) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numsConfirm) {
    chars += "0123456789";
  }
  if (specialsConfirm) {
    chars += "\"!#$%&'()*+,-./;:<=>?@[\\]^_ `{|}~";
  }
  let password = "";

  for (let i = 0; i <= length; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
