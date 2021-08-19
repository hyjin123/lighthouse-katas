//creating our own Square Code algorithm
const squareCode = function (message) {

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
clu hlt io

chi
llo
ut

fto ehg ee dd

feed
thed
og

hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/

/*
  let columns = 0;
  let newMessage = "";
  let newMessage2 = [];
  for (let i = 0; i < message.length; i++) { //remove the spaces
    if (message[i] !== " ") {
      newMessage += message[i];
    }
  }

  for (let i = 0; i < newMessage.length; i++) {
    newMessage2[i] = newMessage[i];
  }

  columns = (Math.ceil(Math.sqrt(newMessage2.length))); //number of columns
  const newMessage3 = [];
  for (let i = 0; i < newMessage2.length; i += columns) {
    const chunk = newMessage2.slice(i, i + columns);
    newMessage3.push(chunk);
  }

  let finalMessage = "";
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < newMessage3.length; j++) {
      if (newMessage3[j][i] !== undefined) {
        finalMessage += newMessage3[j][i];
      }
    }
  }

  let wordsPerLine = Math.ceil(finalMessage.length / columns);
  for (let i = 0; i < finalMessage.length; i += wordsPerLine) {
    finalMessage = finalMessage.substring(i, wordsPerLine) + " " + finalMessage.substring(wordsPerLine, finalMessage.length)
  }
  return finalMessage;
  */