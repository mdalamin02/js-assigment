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

const getCount = (str) => {
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(getCount("my pyx"));
console.log(getCount("pear trea"));
console.log(getCount("abracadabra"));
console.log(getCount("o a kak ushako lil vo kashu kakao"));

// Disemvowel Trolls

const disemvowel = (str) => {
  const store = str;
  let removel = store.replace(/[aeiou]/gi, "");
  return removel;
};
console.log(disemvowel("This website is for losers LOL!"));

// Find the Odd Intf
const findOdd = (arr) => {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (store[num]) {
      store[num]++;
    } else {
      store[num] = 1;
    }
  }

  for (let key in store) {
    if (store[key] % 2 !== 0) return key;
  }
};
console.log(findOdd([4, 4, 3, 5, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 5, 5, 4, 20, 4]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

// Get the Middle Character
function extractMiddle(str) {
  var position = "";
  var length = "";

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  var result = str.substring(position, position + length);
  console.log(result);
}
extractMiddle("test");
extractMiddle("testing");
extractMiddle("middle");
extractMiddle("A");

// Who likes it?
const likes = (names) => {
  if (names.length === 0) {
    return `'No one likes this.'`;
  } else if (names.length === 1) {
    return `'${names[0]} likes this.'`;
  } else if (names.length === 2) {
    return `'${names[0]} and ${names[1]} like this'`;
  } else if (names.length === 3) {
    return `'${names[0]} , ${names[1]} and ${names[2]} like this'`;
  } else if (names.length > 3) {
    return `'${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this'`;
  }
};
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Square Every Digit

const squareDigits = (num) => {
  let store = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    store += num[i] * num[i];
  }
  return store;
};
console.log(squareDigits(2112));
console.log(squareDigits(3212));
console.log(squareDigits(9159));

// Descending Order
const descendingOrder = (n) => {
  let store = [];
  num = n.toString();
  for (let i = 0; i < num.length; i++) {
    store.push(num[i]);
  }
  return (result = parseInt(store.sort().reverse().join("")));
};
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(1021));
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));

// Mubling
const accum = (str) => {
  return str
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
};
console.log(accum("alamin"));

const accume = (str) => {
  return str
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
};
console.log(accume("abcd"));

// Stop Snipping my words
const spinWords = (str) => {
  let words = str.split(" ");
  let lengthOfWords = words.length;
  for (let i = 0; i < lengthOfWords; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
};
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

// Array.diff
const arraDiff = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(arraDiff([1, 8, 2], []));
console.log(arraDiff([1, 2, 3], [1, 2]));
console.log(arraDiff([3, 4], [3]));
console.log(arraDiff([], [4, 5]));

// Capiatlize Words
String.prototype.capitalize = function () {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};
var str = "How car this sdfa";
console.log(str.capitalize());

// Complementary DNA
function DNAStrand(dna) {
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      dna.splice(i, 1, "A");
    } else if (dna[i] == "A") {
      dna.splice(i, 1, "T");
    } else if (dna[i] == "C") {
      dna.splice(i, 1, "G");
    } else {
      dna.splice(i, 1, "C");
    }
  }
  dna = dna.join("");
  return dna;
}
console.log(DNAStrand("AAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));

// Replace with Alphabet Position
const alphabetPosition = (text) => {
  let store = [];
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    let position = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    if (char.match(/[a-z]/i)) {
      store.push(position);
    }
  }
  return store.join(" ");
};
console.log(alphabetPosition("alamin"));

// The Hastag Generator
const generateHastag = (str) => {
  if (str.trim() === "") {
    return false;
  }
  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const Hastag = "#" + capitalizedWords.join("");
  if (Hastag.length > 140) {
    return false;
  }
  return Hastag;
};
console.log(generateHastag("JavaScript"));
console.log(generateHastag("Do we have a Hastag"));
console.log(generateHastag("  Hello   World "));
console.log(generateHastag("coding" + "".repeat(140) + "for like"));
console.log(generateHastag(""));
console.log(generateHastag(" ".repeat(200)));
console.log(generateHastag("a".repeat(140)));

// Extract the Domain from a URL
function domainName(url) {
  let sourceString = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/)[0];
  let domain = sourceString.split(".")[0];
  return domain;
}

console.log(domainName("www.google.com"));
console.log(domainName("http://google.com"));
console.log(domainName("https://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.google.ca"));

// Object Keys from snake_case to camelCase

const toCamel = (obj) => {
  let newObj = {};

  for (let key in obj) {
    let camelCaseKey = key
      .toLowerCase()
      .replace(/([-_][a-z])/g, (group) =>
        group.toUpperCase().replace("-", "").replace("_", "")
      );

    newObj[camelCaseKey] = obj[key];
  }

  return newObj;
};

console.log(
  toCamel({
    first_name: "John",
    last_name: "Ramo",
    favorite_movie: "FIrst Blood",
  })
);
