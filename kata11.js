//create 3 functions that will calculate the volume of individual shapes, create 1 function that calculate the total volume
// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = (4 / 3) * PI * (radius ** 3); //calculating volume of sphere
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (1 / 3) * PI * (radius ** 2) * height; //calculating volume of cone
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = height * width * depth; //calculating volume of prism
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let combinedVolume = 0; //store the total volume here
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === "sphere") {
      combinedVolume += sphereVolume(solids[i].radius);
    } else if (solids[i].type === "cone") {
      combinedVolume += coneVolume(solids[i].radius, solids[i].height);
    } else if (solids[i].type === "prism") {
      combinedVolume += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
    }
  }
  return combinedVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);