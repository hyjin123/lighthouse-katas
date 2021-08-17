//will be given an input string to convert. Also given case style to work with.
const camel = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " " && input[i - 1] === " ") {
      newString += input[i].toUpperCase();
    } else if (input[i] !== " ") {
      newString += input[i];
    }
  }
  return newString;
}

const pascal = function (input) {
  let newString = "";
  newString += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== " " && input[i - 1] === " ") {
      newString += input[i].toUpperCase();
    } else if (input[i] !== " ") {
      newString += input[i];
    }
  }
  return newString;
}

const snake = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      newString += "_";
    } else {
      newString += input[i];
    }
  }
  return newString;
}

const kebab = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      newString += "-";
    } else {
      newString += input[i];
    }
  }
  return newString;
}

const title = function (input) {
  let newString = "";
  newString += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === " ") {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
}

const vowel = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
}

const consonant = function (input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
      newString += input[i].toUpperCase();
    } else {
      newString += input[i];
    }
  }
  return newString;
}

const upper = function (input) {
  let newString = input.toUpperCase();
  return newString;
}

const lower = function (input) {
  let newString = input.toLowerCase();
  return newString;
}

const makeCase = function (input, cases) {
  switch (cases) {
    case "camel":
      return camel(input);
    case "pascal":
      return pascal(input);
    case "snake":
      return snake(input);
    case "kebab":
      return kebab(input);
    case "title":
      return title(input);
    case "vowel":
      return vowel(input);
    case "consonant":
      return consonant(input);
    default:
      let newString;
      if (typeof cases === "object") {
        for (let i = 0; i < cases.length; i++) {
          if (cases[i] === "camel") {
            newString = camel(input);
          } else if (cases[i] === "pascal") {
            newString = pascal(input);
          } else if (cases[i] === "snake") {
            newString = snake(input);
          } else if (cases[i] === "kebab") {
            newString = kebab(input);
          } else if (cases[i] === "title") {
            newString = title(input);
          }
        }
      }
      if (typeof cases === "object") {
        for (let i = 0; i < cases.length; i++) {
          if (cases[i] === "vowel") {
            newString = vowel(newString);
          } else if (cases[i] === "consonant") {
            newString = consonant(newString);
          }
        }
      }
      if (typeof cases === "object") {
        for (let i = 0; i < cases.length; i++) {
          if (cases[i] === "upper") {
            newString = upper(newString);
          } else if (cases[i] === "lower") {
            newString = lower(newString);
          }
        }
      }
      return newString;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["kebab", "lower"]));
console.log(makeCase("this is a string", ["kebab", "vowel"]));