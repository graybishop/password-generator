// Assignment Code
var generateBtn = document.querySelector("#generate");
var passConfig = new Map();

passConfig.set('passwordLength', 0);
passConfig.set('lowerCase', false);
passConfig.set('upperCase', false);
passConfig.set('numeric', false);
passConfig.set('special', false);

function writePassword() {
  var password = generatePassword(passConfig);
  var passwordText = document.querySelector("#password");

  if (password != null) {
    passwordText.value = password;
  }
  
  return;
}

generateBtn.addEventListener("click", promptUser.bind(null, passConfig));


function promptUser(map) {
  console.log('prompt user started')
  var passwordLength = prompt("How long would you like the password to be? (min 8 characters, max 128 characters) Please enter a number:", 24)

  if (passwordLength == null) {
    return
  } else if(passwordLength > 7 && passwordLength < 129){
    map.set('passwordLength', passwordLength)
  } else {
    alert("Password length must be entered as a number between 8 and 128 (inclusive)")
    promptUser(map)
    return
  }

  var lowerCase = confirm('Do you want lowercase letters?')
  map.set('lowerCase', lowerCase)
  var upperCase = confirm('Do you want uppercase letters?')
  map.set('upperCase', upperCase)
  var numeric = confirm('Do you want numeric characters?')
  map.set('numeric', numeric)
  var special = confirm('Do you want special characters?')
  map.set('special', special)

  writePassword()
  return
}

function generatePassword(map) {
  var passwordResult = ""

  var passwordLength = map.get('passwordLength')

  var setLowerCase = "abcdefghijklmnopqrstuvwxyz"
  var setUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var setNumeric = "0123456789"
  var setSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  var setWholePassword = ""

  if (map.get('lowerCase')) {
    setWholePassword += setLowerCase
  }

  if (map.get('upperCase')) {
    setWholePassword += setUpperCase
  }

  if (map.get('numeric')) {
    setWholePassword += setNumeric
  }

  if (map.get('special')) {
    setWholePassword += setSpecial
  }
  
  if(setWholePassword ==""){
    alert('No character types selected. Please restart.')
    return null
  }

  console.log(setWholePassword)

  for (let index = 0; index < passwordLength; index++) {
    passwordResult += setWholePassword.charAt(Math.floor(Math.random() * setWholePassword.length))
  }

  console.log("end password is " + passwordResult)
  return passwordResult
}