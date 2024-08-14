//1. Arithmetic Operators
function math(a, b) {
  return a + b;
}
console.log(math(4, 5));

//2.Product and Remainder.
function productAndRemainder(a, b) {
  const product = a / b;
  const remainder = a % b;

  const result = {
    product: product,
    remainder: remainder,
  };
  return result;
}
console.log(productAndRemainder(5, 6));

// 3.Assignment Operators
function incrementDecrement(n) {
  var n = 0;
  n++;
  console.log(n);
}
incrementDecrement();

function incrementDecrement2(n) {
  var n = 0;
  n--;
  console.log(n);
}
incrementDecrement2();

// 4. Comparison Operators
function compareAges(age1, age2) {
  console.log(age1 == age2);
  console.log(age1 === age2);
  console.log(age1 != age2);
  console.log(age1 !== age2);

  const age = {
    age1: age1,
    age2: age2,
  };
  return age;
}
console.log(compareAges(20, 23));

// 5. Check Range:
function isInRange(num) {
  if (num >= 10 && num <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(isInRange(15));

// 6.Logical Operators
function logicalOperations(a, b, c) {
  let x = a && b && c;
  let y = a || b || c;
  let z = !a;
  let p = !b;
  let r = !c;

  return {
    x: x,
    y: y,
    z: z,
    p: p,
    r: r,
  };
}
let store = logicalOperations(true, false, false);
console.log(store);

// 7. Greet User:
let greetUser = (name) => {
  return `Welcome ${name}`;
};
console.log(greetUser("Alamin"));

// 8.Calculate Area:
function calculateArea(length, width) {
  let area = length * width;
  return area;
}
console.log(calculateArea(100, 200));

// 9. Grade Calculator:
function calculateGrade(score) {
  var marks;

  if (score >= 0 && score <= 33) {
    marks = "Your are failed";
  } else if (score >= 34 && score <= 40) {
    marks = "You got D Grade";
  } else if (score >= 41 && score <= 50) {
    marks = "You got C Grade";
  } else if (score >= 51 && score <= 60) {
    marks = "You got B Grade";
  } else if (score >= 61 && score <= 70) {
    marks = "You got A Grade";
  } else if (score >= 71 && score <= 80) {
    marks = "You got A+ Grade";
  } else if (score >= 81 && score <= 90) {
    marks = "You got Golden A+ Grade";
  } else {
    marks = "You are the best ";
  }
  return marks;
}
console.log(calculateGrade(819));

// 10. Day of the Week:
function dayOfWeek(day) {
  let days;
  switch (day) {
    case 1:
      days = "Monday";
      break;
    case 2:
      days = "Tuesday";
      break;
    case 3:
      days = "Wednesday";
      break;
    case 4:
      days = "Thursday";
      break;
    case 5:
      days = "Friday";
      break;
    case 6:
      days = "Saturday";
      break;
    case 7:
      days = "Sunday";
      break;
    default:
      days = "Invalid day";
  }
  return days;
}
console.log(dayOfWeek(3));

// 11. Sum of Array:
let arr = [4, 5, 6];
function sumArray(arr) {
  let newArra = 0;
  for (let i of arr) {
    newArra += i;
  }
  return newArra;
}
console.log(sumArray(arr));

// 12.Print Numbers:
let number = 1;

function printNumbers() {
  while (number < 11) {
    console.log(number);
    number++;
  }
}
printNumbers();

// 13.Reverse String:

function reverseString(str) {
  let reverserdStr = "";
  let i = str.length - 1;

  do {
    reverserdStr += str[i];
    i--;
  } while (i >= 0);

  return reverserdStr;
}
let func = reverseString("Alamin");
console.log(func);

// Clock
const past = (h, m, s) => {
  let clockHour = h * 60 * 60 * 1000;
  let clockMinute = m * 60 * 1000;
  let clockSecond = s * 1000;
  return clockHour + clockMinute + clockSecond;
};
console.log(past(0, 0, 0));
console.log(past(0, 1, 1));
console.log(past(1, 0, 0));
console.log(past(1, 1, 1));

// Keep Hydrated!
const litres = (time) => {
  i = time * 0.5;
  valueAssign = Math.floor(i);

  return valueAssign;
};
console.log(litres(0));
console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));
console.log(litres(0.82));
console.log(litres(11.8));
console.log(litres(1787));

// Cetury from Year
const century = (year) => {
  leapYear = year / 100;
  result = Math.ceil(leapYear);
  return result;
};
console.log(century(1450));

// Vowel Count
const getCount = (str) => {};

const Vowel = ["a", "e", "i", "o", "u"];
const fruits = ["Banana", "Orange", "Apple", "Mango"];