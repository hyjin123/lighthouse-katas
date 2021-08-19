//creating our own Square Code algorithm
const squareCode = function (message) {
  let newMessage = "";
  let newMessage2 = [];
  for (let i = 0; i < message.length; i++) { //remove the spaces in the string
    if (message[i] !== " ") {
      newMessage += message[i];
    }
  }

  for (let i = 0; i < newMessage.length; i++) { //store each letter in an array
    newMessage2[i] = newMessage[i];
  }

  let columns = (Math.ceil(Math.sqrt(newMessage2.length))); //number of columns

  const newMessage3 = [];
  for (let i = 0; i < newMessage2.length; i += columns) { //store the letters in chunks equal to the number of columns
    const chunk = newMessage2.slice(i, i + columns);
    newMessage3.push(chunk); //push these chunks into a new array to be looped over later
  }

  let finalMessage = "";
  //loop through the new array and store in new string, adding space after every time the second for loop completes
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < newMessage3.length; j++) {
      if (newMessage3[j][i] !== undefined) {
        finalMessage += newMessage3[j][i];
      }
    }
    finalMessage += " ";
  }
  return finalMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));