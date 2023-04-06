var characterLength = 8;

var choiceArray = [lwrcArray, uprcArray, numberArray, specialCharacterArray];
var lwrcArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uprcArray =  ['A','B','C','D','E','F','G','H',',I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray= ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacterArray = ['!','?','@','#','$','%','^','&','*'];

// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
   var passwordText = document.querySelector("#password");
  if (correctPrompts) {
  var newPassword = generatePassword();
 
  passwordText.value = newPassword;
} else {
  passwordText.value = "";
}
}

// Add event listener to generate button


function generatePassword(){

  var password = "";
  //alert (characterLength);
  for (var i = 0; i < characterLength; i++ ){
   var randomIndex=(Math.floor(Math.random() * choiceArray.length));
   //alert (randomIndex);
   //alert (choiceArray[randomIndex]);
  // alert (characters.charAt(choiceArray[randomIndex]) )
    password = password.concat(choiceArray[randomIndex]);
  }
  //alert (password);
  return password;
}

function getPrompts(){
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));
if(isNaN(characterLength)||characterLength < 8|| characterLength > 128){alert("Character length has to be a number greater than 8 and less than 128");
return false}

choiceArray=[];

if (confirm ("are lowercase good")){
  choiceArray=choiceArray.concat(lwrcArray);
}
if (confirm ("is uppercase fine?")){
  choiceArray=choiceArray.concat(uprcArray);
}

if (confirm ("Is special characters fine?")){
choiceArray=choiceArray.concat(specialCharacterArray);
}
if (confirm ("are numbers fine?")){
choiceArray=choiceArray.concat(numberArray);
}
//alert (choiceArray);
return choiceArray;
}