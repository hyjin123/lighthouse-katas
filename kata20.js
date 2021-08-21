//write an algorithm to help taxis determine how far away a destination is based on directions given
const blocksAway = function (directions) {
  //where the final position will be stored
  const finalPosition = {
    east: 0,
    north: 0
  };
  //store which direction the taxi is facing at each iteration
  let currentDirection = "";
  //make the first move and then loop through the rest of the moves
  if (directions[0] === "right") {
    finalPosition.east += directions[1];
    currentDirection = "east";
  } else if (directions[0] === "left") {
    finalPosition.north += directions[1];
    currentDirection = "north";
  }
  //loop through every second value
  for (let i = 2; i < directions.length; i += 2) {
    //if direction is right, add or substract from final position and reset current direction (where you are facing)
    if (directions[i] === "right") {
      if (currentDirection === "north") {
        finalPosition.east += directions[i + 1];
        currentDirection = "east";
      } else if (currentDirection === "east") {
        finalPosition.north -= directions[i + 1];
        currentDirection = "south";
      } else if (currentDirection === "south") {
        finalPosition.east -= directions[i + 1];
        currentDirection = "west";
      } else if (currentDirection === "west") {
        finalPosition.north += directions[i + 1];
        currentDirection = "north";
      }
      //if direction is left, add or substract from final position and reset current direction (where you are facing)
    } else if (directions[i] === "left") {
      if (currentDirection === "north") {
        finalPosition.east -= directions[i + 1];
        currentDirection = "west";
      } else if (currentDirection === "east") {
        finalPosition.north += directions[i + 1];
        currentDirection = "north";
      } else if (currentDirection === "south") {
        finalPosition.east += directions[i + 1];
        currentDirection = "east";
      } else if (currentDirection === "west") {
        finalPosition.north -= directions[i + 1];
        currentDirection = "south";
      }
    }
  }
  return finalPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));