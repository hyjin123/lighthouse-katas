// given a list of instructors and we will create a single object to organize them base on course
const organizeInstructors = function(instructors) {
  const courseList = {};
  let courseName = "";
  for (let i = 0; i < instructors.length; i++) {
    courseName = instructors[i].course;
    if (!courseList[courseName]) { //if the course name doesn't exist, create a new property
      courseList[courseName] = [];
    }
    courseList[courseName].push(instructors[i].name); //add the instructors name to the array
  }
  return courseList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));