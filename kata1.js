// given an array with 2 or more numbers, find the two largest numbers in that array and sum them
const sumLargestNumbers = function(data) {
  let newArray = []; //pushing 2 of the largest numbers into this array and summing them at the end
  let max = 0; // finding the max number in the array and assigning it to here
  let secondMax = 0; //Finding the 2nd max number
  let maxIndex = 0; //storing the index of max number

  for (let i = 0; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i];
      maxIndex = i;
    }
  }
  newArray = data.splice(maxIndex,1);//pushing the largest number into the new Array

  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondMax) {
      secondMax = data[i];
      maxIndex = i;
    }
  }
  newArray.push(secondMax);//pushing the second largest number into the new Array
  return sum = newArray[0] + newArray[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));