//print multiplication tables to the console
const multiplicationTable = function(maxValue) {
  let table = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += `${j * i} `;
    }
    table += '\n'; //make a new line everytime the iteration finishes in the first for loop
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));