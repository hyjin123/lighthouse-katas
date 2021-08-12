//converting date strings into more English friendly date strings
const talkingCalendar = function(date) {
  let newDateArray = [];
  for (let i = 5; i < date.length; i++) {
    
  }
  let newDate = newDateArray.join("/");
  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));