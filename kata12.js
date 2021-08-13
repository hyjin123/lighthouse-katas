//write a function that helps determine which recipes match the ingredients that both bakeries have in stock
const ingredientCheck = function(bakery, recipes) { //this function checks each bakery for each recipes
  let matchedIngredients = []; //store the matched ingredients
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (bakery[i] === recipes[j].ingredients[0] || bakery[i] === recipes[j].ingredients[1]) {
        matchedIngredients.push(bakery[i]);
      }
    }
  }
  return matchedIngredients;
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let ingredientA = ingredientCheck(bakeryA, recipes); //store all the matched ingredients in bakeryA in this variable
  let ingredientB = ingredientCheck(bakeryB, recipes); //store all the matched ingredients in bakeryB in this variable
  for (let i = 0; i < ingredientA.length; i++) {
    for (let j = 0; j < ingredientB.length; j++) {
      for (let k = 0; k < recipes.length; k++) {
        if ((ingredientA[i] === recipes[k].ingredients[0] || ingredientA[i] === recipes[k].ingredients[1]) &&
            (ingredientB[j] === recipes[k].ingredients[0] || ingredientB[j] === recipes[k].ingredients[1])
        ) {
          return recipes[k].name; //IF recipe has ingredients from both BakeryA and BakeryB, return the name
        }
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples', 'anchovies'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'potatoes']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'ketchup']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));