// let js = "amazing";
// if (js === "amazing") console.log("Javascript is amazing");
// console.log(4 + 6 + 10);

// let job1 = "programmer";
// let job2 = "teacher";

// let firstJob = "programmer";
// let currentJob = "teacher";

// let firstName = "Adam";
// let lastName = "Guebre";

// // let 1Name='Adama' NOT ALLOWED
// // let firstName&lastName='Guebre Adama' NOT ALLOWED
// // let new='chair'; NOT ALLOWED

// const PI = 3.141516;

// // PRIMITIVE DATA TYPE
// // number, string, boolean, undefined, null, NaN, symbol.
// let job = "Adama";
// let age = 28;
// let isMaried = true;

// let children;
// 23;
// console.log(typeof children);
// console.log(typeof true);
// console.log(typeof "Value");

// isMaried = 1;
// console.log(isMaried);
// isMaried = false;
// console.log(typeof isMaried);

// const birthDay = "Monday";
// // birthDay = "Tuesday"; NOT ALLOWED
// // const birthYear; NOT ALLOWED
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log((ageSarah * 2) / ageJonas);

// console.log(ageJonas ** 4);
// let x = 10 + 5;
// x += 10;
// console.log(x);
// x *= 10;
// x -= 7;
// x /= 2;
// x++;
// x--;
// console.log(x);
// console.log(firstName + " " + lastName);

// console.log(ageJonas <= ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageSarah === ageJonas);
// const isFullAge = ageSarah >= 18;

// let z, y;

// // STRINGS AND TEMPLATES LITTERALS
// const jonas = `I'm Jonas a ${ageJonas - ageSarah} old teacher`;
// console.log(jonas);

// console.log(`Just a regular string`);

// console.log(`This is
// a multilines
// string`);

// const ageStudent = 17;
// const isOldEnough = ageStudent >= 18;
// console.log(isOldEnough);
// if (ageStudent >= 18) {
//   console.log("Sarah can start driving license 👍");
// } else {
//   const yearLeft = 18 - ageStudent;
//   console.log(
//     `Sarah can't start driving license 👎, she need to wait ${yearLeft} ${
//       yearLeft === 1 ? "year" : "years"
//     }`
//   );
// }

// let markWeight = 78,
//   heightMark = 1.69;
// let johnWeight = 92,
//   heightJohn = 1.95;

// const markBmi = markWeight / heightMark ** 2;
// const johnBmi = johnWeight / heightJohn ** 2;

// console.log("Mark BMI", markBmi);
// console.log("John BMI", johnBmi);

// const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);

// if (markBmi > johnBmi)
//   console.log(`Mark BMI (${markBmi}) is higher than john BMI (${johnBmi})`);
// else console.log(`John BMI (${johnBmi}) is higher than Mark BMI (${markBmi})`);

// // CONVERSION AND COERSION

// const inputYear = "1991";
// console.log(inputYear + 18); // 199118
// console.log(Number(inputYear) + 18); //2009

// console.log(Number("Adam")); // Number
// console.log(typeof NaN);

// console.log("23" - "10" - 3); //10
// console.log(23 + "1"); // 231
// console.log("23" / "2"); //11.5
// console.log("ret" / "2"); //NaN
// console.log(2 + 3 + 4 + "5"); //95
// console.log(2 + 2 + 5 + "4" + "5"); //945
// console.log("10" - "4" - "3" - 2 + "5"); //15

// // FALSY AND THUTHY VALUES

// // 5 falsy values 0,'',null,undefined,NaN

// console.log(Number(12));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("Adam"), "Adam");
// console.log(Boolean({}), "Object");
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// const money = 0;
// if (money) {
//   console.log(`You have ${money}, dont spent it all`);
// } else console.log(`You should get a job`);

// let height = 0;
// if (height || height === 0) console.log("heigh is defined");
// else {
//   console.log("Height is not defined");
// }

// // EQUALITY OPERATORS

// // STRICT EQUALITY OPERATOR
// let currentAge = "18";
// if (currentAge === 18) console.log("You just become an adult");

// // LOOSE EQUALITY OPERATOR
// if (currentAge == 18) console.log("You just become an adult");

// // const favourite = +prompt("What your favourite number");

// // console.log(typeof favourite);
// // if (favourite === 23) console.log("COOL! 23 is an amazing number");
// // else if (favourite === 7) console.log("7 is also a good number");
// // else if (favourite === 9) console.log("9 is also a good number");
// // else console.log("Your number is not 23 or 7 or 9");

// // if (favourite !== 23) console.log("Why not 23");

// // CHALLENGE #13
// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKolas = (88 + 91 + 110) / 3;
// const scoreDolphins = (96 + 1 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKolas = (96 + 108 + 89) / 3;
// if (scoreDolphins > scoreKolas && scoreDolphins > 100)
//   console.log("Dolphins win the trophy 🍹");
// else if (scoreDolphins < scoreKolas && scoreKolas > 100)
//   console.log("Koalas Win the trophy 🍹");
// else if (
//   scoreDolphins === scoreKolas &&
//   scoreDolphins >= 100 &&
//   scoreKolas >= 100
// )
//   console.log("Both Win the trophy 🍹");
// else console.log("No one win the the trophy");

// // SWITCH STATEMENT
// console.log("SWITCH STATEMENT");
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;

//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day valid day");
// }

// // TERNARY OPERATOR
// console.log("TERNARY OPERATOR");

// const ageAdult = 18;
// ageAdult >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = ageAdult >= 18 ? "Wine" : "Water";
// console.log(drink);

// console.log(`I like to drink ${ageAdult >= 18 ? "Wine" : "Water"}`);

// // CHALLENGE #14
// console.log("CHALLENGE #14");

// const bill = 275;
// // const bill=430;
// // const bill = 40;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, tip was ${tip}, and the total value ${bill + tip}`
// );
"use strict";

// FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// FUNCTION EXPRESSION
const calcage2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcage2(1991);
console.log(age2);

// ARROW FUNCTION

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Adam"));
console.log(yearUntilRetirement(2001, "Bob"));

function cutFruitPieces(fruitName, fruitNumber) {
  console.log(`${fruitName} was cut in ${fruitNumber * 4}`);
  return fruitNumber * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces("Apples", apples);
  const orangePieces = cutFruitPieces("Oranges", oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 4));

// CHALLENGE #2.1

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
console.log("CHALLENGE #2.1");
// 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// 3

function checkWinner(avgDolphins, avgKoalas) {
  let winner;
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  else console.log("No team wins");
  winner = "Both teams";
  return winner;
}

checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS
const friends = ["Ben", "Kalle", "Adam", "Issouf", "Mihaio"];
const newFriends = new Array("Souley", "Mohori", "Sam", "Burth");
console.log(friends);
console.log(newFriends);

console.log(friends[friends.length - 1]);

friends.push("Jean");
console.log(friends);
console.log(friends.at(0));
newFriends[2] = "Joao";
newFriends.pop();
newFriends.unshift("Harry");
console.log(newFriends);
let firstName = "Adam";
const data = [
  "Guebre",
  firstName,
  2007 - 990,
  {},
  friends,
  newFriends,
  [1, 2, 3],
];

console.log(data);

function calcAge(arr) {
  const newYear = [];
  arr.forEach((year) => newYear.push(2037 - year));
  return newYear;
}

const years = [1990, 1967, 2010, 2018];

console.log(calcAge(years));

// PUSH METHOD add new elemt at the end
let newLenght = years.push(2007);
console.log("Push method return the new lenght of the array", newLenght);
console.log(years);

// UNSHIFT METHOD add new element in the begining
newLenght = years.unshift(2000);
console.log("Unshift method reutn also the new frend of the array", newLenght);

// POP METHOD remove the last elemt of the array

let deleted = years.pop();
console.log(deleted);

// SHIFT METOD remove the first element of the array

deleted = years.shift();
console.log(deleted);
console.log(years);

// INDEXOF

let index = years.indexOf(2010);
console.log(index);
index = years.indexOf(1999);
console.log(index);

// INCLUDEs

index = years.includes(2010);
console.log(index);
index = years.includes(2011);
console.log(index);

if (years.includes(2010)) console.log("You choose the right year");
else console.log("Invalid year");

years.includes(1999)
  ? console.log("You choose the right year")
  : console.log("Invalid year");

// CHALLENGE #2.2
console.log("CHALLENGE #2.2");

const bill = 100;

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = new Array(125, 555, 44);

// TEST DATA: 125, 555, and 44.

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log("Tips array", tips);

const totals = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);

console.log("Bill + tip array", totals);

// OBJECT

const adamArray = [
  "Adam",
  "Guebre",
  2037 - 1990,
  true,
  undefined,
  NaN,
  null,
  Symbol,
  "",
  ["teacher", "Hornt", "Burt", "Rone"],
  ["Teach", "Hornt", "Burt", "Rone"],
  function calcAge() {
    return (this.age = 2037 - this.birthYear);
  },
];

const adamObject = {
  firstName: "Adam",
  lastName: "Guebre",
  birthYear: 1991,
  job: "teacher",
  friends: ["Teach", "Hornt", "Burt", "Rone"],
  calcAge: function () {
    return (this.age = 2037 - this.birthYear);
  },
};

console.log(adamObject);
firstName = "firstName";
console.log(adamObject.firstName);
console.log(adamObject["lastName"]);
console.log(adamObject[firstName]);

const nameKey = "Name";

console.log(adamObject["last" + nameKey]);

// const interestedIn = prompt(
//   "What do want to know about Adam? Choose betwwen firstName, lastName, age, job and friends"
// );
const interestedIn = "job";

if (adamObject[interestedIn]) console.log(adamObject[interestedIn]);
else console.log("Wrong request");

adamObject.location = "Rotterdam";
adamObject["employeur"] = "SIF";
console.log(adamObject);

// Challenge

// 'Adam has 3 friends, and his best firend is called '

console.log(
  `${adamObject["firstName"]} has ${adamObject.friends.length} friends and his best friend is called ${adamObject.friends[0]}`
);

// OBJECT METHODS
console.log(adamObject.calcAge());
console.log(adamObject);

// Challenge
// 'Adam is a 46-year old Webdev, and he has a/no driver license

adamObject.job = "Webdev";
adamObject.hasDriveLicense = true;

adamObject.getSummary = function () {
  console.log(
    `${this.firstName} is ${this.calcAge()} years old ${this.job} and he has ${
      this.hasDriveLicense ? "a" : "no"
    } driving license`
  );
};
console.log(adamObject);
adamObject.getSummary();

// CHALLENGE #2.3

console.log("CHALLENGE #2.3");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark, john);
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi)
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
else
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );

// LOOPS

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition n° ${rep}`);
}
const types = new Array();
for (let i = 0; i < adamArray.length; i++) {
  console.log(adamArray[i], typeof adamArray[i]);
  // types[i] = typeof adamArray[i];
  types.unshift(typeof adamArray[i]);
}

console.log(types);
console.log(years);
const ages = new Array();
for (let i = 0; i < years.length; i++) {
  ages.unshift(2037 - years[i]);
}

console.log(ages);

for (let i = 0; i < adamArray.length; i++) {
  if (typeof adamArray[i] !== "string") continue;
  console.log(adamArray[i], typeof adamArray[i]);
}

for (let i = 0; i < adamArray.length; i++) {
  if (typeof adamArray[i] === "number") break;
  console.log(adamArray[i], typeof adamArray[i]);
}

console.log(adamArray);
console.log("LOOPING BACKWARD");

for (let i = adamArray.length - 1; i >= 0; i--) {
  console.log(adamArray[i]);
}

// WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition n° ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("The loop is about to end.....");
}
