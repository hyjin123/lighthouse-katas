//repeating numbers, given 2 dimensional array, where the first will be value to repeat, second will be amount of times to repeat
const repeatNumbers = function(data) {
  let output = ""; //store the output string here
  let startNumber = data[0][0].toString(); //deal with the first set of values first as the other values need comma in front
  output += startNumber.repeat(data[0][1]); //store the first set of values in the output variable
  for (let i = 1; i < data.length; i++) { // loop through the rest set of the values
    let nextNumber = data[i][0].toString();
    output += ", " + nextNumber.repeat(data[i][1]); //start with a comma and repeat the value the right amount of times
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));