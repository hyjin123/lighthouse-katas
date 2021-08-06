//count the number of vowels that appear in a given string
const numberOfVowels = function(data) {
  let sum = 0; //store the number of vowels that appear in string
  let i = 0;
  while(i < data.length) {
    if (data[i] === "a" ||
        data[i] === "e" ||
        data[i] === "i" ||
        data[i] === "o" ||
        data[i] === "u") {
      sum ++;
    }
    i++;
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("aaeeiioouu"));
console.log(numberOfVowels("aaeetriiowkjoudu"));

