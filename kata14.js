//create a function tha can calculate which coins we should use when we need to give change
const calculateChange = function(total, cash) {
  let change = cash - total;
  const totalChange = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };
  while (change !== 0) {
    if (change >= 2000) {
      totalChange.twentyDollar += 1;
      change -= 2000;
    } else if (change >= 1000) {
      totalChange.tenDollar += 1;
      change -= 1000;
    } else if (change >= 500) {
      totalChange.fiveDollar += 1;
      change -= 500;
    } else if (change >= 200) {
      totalChange.twoDollar += 1;
      change -= 200;
    } else if (change >= 100) {
      totalChange.oneDollar += 1;
      change -= 100;
    } else if (change >= 25) {
      totalChange.quarter += 1;
      change -= 25;
    } else if (change >= 10) {
      totalChange.dime += 1;
      change -= 10;
    } else if (change >= 5) {
      totalChange.nickel += 1;
      change -= 5;
    } else if (change >= 1) {
      totalChange.penny += 1;
      change -= 1;
    }
  }

  for (const property in totalChange) {
    if (totalChange[property] === 0) {
      delete totalChange[property];
    }
  }

  return totalChange;
};

console.log(calculateChange(1787, 2000)); //213
console.log(calculateChange(2623, 4000)); //1377
console.log(calculateChange(501, 1000)); //499

/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

*/