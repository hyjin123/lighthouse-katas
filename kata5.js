//will be given a normal string and turn it into a percent-encoded string by replacing all whitespace with %20
const urlEncode = function(text) {
  let newString = ""; //this is where the new string will be stored
  text = text.trim(); //trim the text so that spaces in the beginning and end of string does not exist
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString += "%20"; //whenever there is space, add %20 to the new string
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("          Lighthouse  Labs            "));