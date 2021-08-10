//we will be converting a normal string into a camelCase text
const camelCase = function(input) {
  let camelCase = ""; //new camelCase string will be stored here
  input = input.trim(); //trim the string if there are any spaces on either end
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === " ") {
      camelCase += input[i].toUpperCase(); //if the previous character is a space, uppercase the character and add
    } else if (input[i] !== " ") {
      camelCase += input[i]; //if the character is not an empty string, add
    }
  }
  return camelCase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));