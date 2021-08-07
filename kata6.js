//write a function that returns the coordinates of an available parking spot or returns false if there is no spot
const whereCanIPark = function (spots, vehicle) {
  let availableParking = []; //store the coordinate of the available parking coordinate in this array
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (vehicle === "small") {
        if (spots[i][j] === "S" || spots[i][j] === "R") {
          availableParking.push(j);
          availableParking.push(i);
          return availableParking;
        }
      }
      if (vehicle === "regular") {
        if (spots[i][j] === "R") {
          availableParking.push(j);
          availableParking.push(i);
          return availableParking;
        }
      }
      if (vehicle === "motorcycle") {
        if (spots[i][j] === "S" || spots[i][j] === "R" || spots[i][j] === "M") {
          availableParking.push(j);
          availableParking.push(i);
          return availableParking;
        }
      }
    }
  }
  if (availableParking === []) {
    return false; //returning false if the the array is empty, meaning there are no parking spots available
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

/* Expected output
[4,0]
false
[3,1]
*/