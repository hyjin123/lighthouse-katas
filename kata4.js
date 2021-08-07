// will be given a list of instructors and have to determine which instructor has the longest name.
const instructorWithLongestName = function(instructors) {
  let longestName = {}; //this is where the object of teacher with longest name will be stored
  let longestNameCount = 0; //this variable is reassigned every time there is instructor with the longest name with the count
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestNameCount) {
      longestNameCount = instructors[i].name.length;
      longestName = instructors[i];
    }
  }
  return longestName;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "Sean", course: "Web"},
  {name: "Domascusqwdwqdwqeq", course: "Web"}
]));