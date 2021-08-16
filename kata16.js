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
      if (typeof cases === "object") {
        for (let i = 0; i < cases.length; i++) {
          if (cases[i] === "camel") {
            return camel(input);
          } else if (cases[i] === "pascal") {
            return pascal(input);
          } else if (cases[i] === "snake") {
            return snake(input);
          } else if (cases[i] === "kebab") {
            return kebab(input);
          } else if (cases[i] === "title") {
            return title(input);
          }
        }
      }
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

/*
vowels - a e i o u

thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING

higher number should be processed first
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower

*/