//Number Guesser - User has to guess a secret number - 1 to 100
let prompt = require("prompt-sync")();

// code below (replace this example)
const randomNumber = Math.floor((Math.random() * 100) + 1); //generate the random number
let answer = 0 //set the answer to 0 initially
let numberOfGuesses = 0; //keeps track of the number of tries
let answerStorage = []; //keep track of previous guesses in this array;

while (randomNumber !== answer) {
  answer = prompt("Guess a number: "); //prompts the user to input their guess
  answer = Number(answer); //converts the input to an integer
  if (answer === NaN) {
    console.log("Not a number! Try again!");
  } else if (answerStorage.includes(answer)) {
    console.log("Already Guessed!");
  } else {
    if (answer < randomNumber) {
      console.log("Too Low!");
      numberOfGuesses += 1; //add to the number of guesses
      answerStorage.push(answer); //add the guess into the array to keep track
    } else if (answer > randomNumber) {
      console.log("Too High!");
      numberOfGuesses += 1; //add to the number of guesses
      answerStorage.push(answer); //add the guess into the array to keep track
    }
  }
  //if the guess matches the number, print the following
  if (answer === randomNumber) {
    console.log(`You got it! You took ${numberOfGuesses + 1} attempts!`);
  }
}
