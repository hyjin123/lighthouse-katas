//Adding only the numbers in the array which match the given condition
const conditionalSum = function(values, condition) {
  let sum = 0; //storing the sum of the values here
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) { //this if statement checks if num is even and if the condition is even, adds to sum.
      if (condition === "even") {
        sum += values[i];
      }
    } else if (values[i] % 2 !== 0) { //this else if statement checks if num is odd and if the condition is odd, adds to sum.
      if (condition === "odd") {
        sum += values[i];
      }
    }
  }
  return sum; //returns the sum, returns 0 if no number meets the condition.
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([5, 8, 2, 4, 1], "even"));
console.log(conditionalSum([5, 8, 2, 4, 1], "odd"));