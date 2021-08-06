// given an array with 2 or more numbers, find the two largest numbers in that array and sum them
const sumLargestNumbers = function(data) {
  let newArray = [];
  let max = 0;
  let secondMax = 0;
  let maxIndex = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i];
      maxIndex = i;
    }
  }
  newArray = data.splice(maxIndex,1);

  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondMax) {
      secondMax = data[i];
      maxIndex = i;
    }
  }
  newArray.push(secondMax);
  return sum = newArray[0] + newArray[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));