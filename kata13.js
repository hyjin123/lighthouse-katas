//converting date strings into more English friendly date strings
const talkingCalendar = function (date) {
  let newDate = ""; //store the new date format here
  const partsString = date.split("/");// split the date into 3 parts
  let year = partsString[0];
  let month = partsString[1];
  let day = partsString[2];
  let newDay = "";
  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  if (day[0] !== "0") { //if first digit is not 0, add to the new day string
    newDay += day[0];
  }
  if (day[0] === "0" && day[1] === "1") { //if first digit is 0 and second is 1, add "st"
    newDay += day[1];
    newDay += "st";
  } else if (day[0] === "0" && day[1] === "2") { //if first digit is 0 and second is 2, add "nd"
    newDay += day[1];
    newDay += "nd";
  } else if (day[0] === "0" && day[1] === "3") { //if first digit is 0 and second is 3, add "rd"
    newDay += day[1];
    newDay += "rd";
  } else {
    newDay += day[1];
    newDay += "th";
  }
  return newDate = `${month} ${newDay}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1893/01/05"));