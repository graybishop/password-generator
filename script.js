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

  passwordText.value = password;
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
  var special = confirm('Do you want special letters?')
  map.set('special', special)

  alert(`You picked ${map.get('passwordLength')} characters, ${map.get('lowerCase')} for lowercase.`)
  return
}