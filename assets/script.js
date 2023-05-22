//variables for numbers, letters, and special characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var special = [
  "!",
  "@",
  "{",
  "}",
  "[",
  "]",
  "/",
  "?",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "~",
  "<",
  ">",
];
// other vars
var generateBtn = document.querySelector("#generate");
var characterlength;
var pwarray = [];
var password = [];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function start() {
  //welcome message
  confirm("click ok for yes and cancel for no");
  characterlength = window.prompt(
    "What character length would you like your password to be?: Choose a number between 8-128"
  );
  //checks that the number is in the defined range
  if (characterlength < 8 || characterlength > 128) {
    alert("Please select a number between 8 - 128");
    //returns to the start
    start();
  }
  //this checks to see if the character input is a number
  else if (isNaN(characterlength)) {
    alert("Please input a number that is between 8 - 128");
    //returns to beginning of function if it isnt a number
    start();
  } else {
    generatePassword();
  }
}
function generatePassword() {
  var lowercaseAnswer = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (lowercaseAnswer == true) {
    pwarray = pwarray.concat(lowercase);
  }
  var uppercaseAnswer = window.confirm(
    "Would you like to include UPPERCASE letters?"
  );
  if (uppercaseAnswer == true) {
    pwarray = pwarray.concat(uppercase);
  }
  var specialAnswer = window.confirm(
    "Would you like to include special characters?"
  );
  if (specialAnswer == true) {
    pwarray = pwarray.concat(special);
  }
  var numberAnswer = window.confirm("Would you like to include numbers?");
  numberAnswer;
  if (numberAnswer == true) {
    pwarray = pwarray.concat(numbers);
  }
  //This clears the array so that previous passwords don't stay in the box and get added to.
  password.length = 0;
  for (var i = 0; i < characterlength; i++) {
    var total = pwarray[Math.floor(Math.random() * pwarray.length)];
    //put it together and push it to the password =[]; array
    password.push(total);
  }
}
function writePassword() {
  start();
  //var password = generatePassword();
  var pwText = document.querySelector("#password");
  //.join('') = removes the commas
  pwText.value = password.join("");
}
