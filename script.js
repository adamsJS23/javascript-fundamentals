let js = "amazing";
if (js === "amazing") console.log("Javascript is amazing");
console.log(4 + 6 + 10);

let job1 = "programmer";
let job2 = "teacher";

let firstJob = "programmer";
let currentJob = "teacher";

let firstName = "Adam";
let lastName = "Guebre";

// let 1Name='Adama' NOT ALLOWED
// let firstName&lastName='Guebre Adama' NOT ALLOWED
// let new='chair'; NOT ALLOWED

const PI = 3.141516;

// PRIMITIVE DATA TYPE
// number, string, boolean, undefined, null, NaN, symbol.
let job = "Adama";
let age = 28;
let isMaried = true;

let children;
23;
console.log(typeof children);
console.log(typeof true);
console.log(typeof "Value");

isMaried = 1;
console.log(isMaried);
isMaried = false;
console.log(typeof isMaried);

const birthDay = "Monday";
// birthDay = "Tuesday"; NOT ALLOWED
// const birthYear; NOT ALLOWED
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log((ageSarah * 2) / ageJonas);

console.log(ageJonas ** 4);
let x = 10 + 5;
x += 10;
console.log(x);
x *= 10;
x -= 7;
x /= 2;
x++;
x--;
console.log(x);
console.log(firstName + " " + lastName);

console.log(ageJonas <= ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah === ageJonas);
const isFullAge = ageSarah >= 18;

let z, y;

// STRINGS AND TEMPLATES LITTERALS
const jonas = `I'm Jonas a ${ageJonas - ageSarah} old teacher`;
console.log(jonas);

console.log(`Just a regular string`);

console.log(`This is
a multilines
string`);

const ageStudent = 17;
const isOldEnough = ageStudent >= 18;
console.log(isOldEnough);
if (ageStudent >= 18) {
  console.log("Sarah can start driving license 👍");
} else {
  const yearLeft = 18 - ageStudent;
  console.log(
    `Sarah can't start driving license 👎, she need to wait ${yearLeft} ${
      yearLeft === 1 ? "year" : "years"
    }`
  );
}

let markWeight = 78,
  heightMark = 1.69;
let johnWeight = 92,
  heightJohn = 1.95;

const markBmi = markWeight / heightMark ** 2;
const johnBmi = johnWeight / heightJohn ** 2;

console.log("Mark BMI", markBmi);
console.log("John BMI", johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

if (markBmi > johnBmi)
  console.log(`Mark BMI (${markBmi}) is higher than john BMI (${johnBmi})`);
else console.log(`John BMI (${johnBmi}) is higher than Mark BMI (${markBmi})`);

// CONVERSION AND COERSION

const inputYear = "1991";
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); //2009

console.log(Number("Adam")); // Number
console.log(typeof NaN);

console.log("23" - "10" - 3); //10
console.log(23 + "1"); // 231
console.log("23" / "2"); //11.5
console.log("ret" / "2"); //NaN
console.log(2 + 3 + 4 + "5"); //95
console.log(2 + 2 + 5 + "4" + "5"); //945
console.log("10" - "4" - "3" - 2 + "5"); //15

// FALSY AND THUTHY VALUES

// 5 falsy values 0,'',null,undefined,NaN

console.log(Number(12));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Adam"), "Adam");
console.log(Boolean({}), "Object");
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log(`You have ${money}, dont spent it all`);
} else console.log(`You should get a job`);

let height = 0;
if (height || height === 0) console.log("heigh is defined");
else {
  console.log("Height is not defined");
}

// EQUALITY OPERATORS

// STRICT EQUALITY OPERATOR
let currentAge = "18";
if (currentAge === 18) console.log("You just become an adult");

// LOOSE EQUALITY OPERATOR
if (currentAge == 18) console.log("You just become an adult");

// const favourite = +prompt("What your favourite number");

// console.log(typeof favourite);
// if (favourite === 23) console.log("COOL! 23 is an amazing number");
// else if (favourite === 7) console.log("7 is also a good number");
// else if (favourite === 9) console.log("9 is also a good number");
// else console.log("Your number is not 23 or 7 or 9");

// if (favourite !== 23) console.log("Why not 23");

// CHALLENGE #13
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
const scoreDolphins = (96 + 1 + 89) / 3;
const scoreKolas = (88 + 91 + 110) / 3;
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKolas = (96 + 108 + 89) / 3;
if (scoreDolphins > scoreKolas && scoreDolphins > 100)
  console.log("Dolphins win the trophy 🍹");
else if (scoreDolphins < scoreKolas && scoreKolas > 100)
  console.log("Koalas Win the trophy 🍹");
else if (
  scoreDolphins === scoreKolas &&
  scoreDolphins >= 100 &&
  scoreKolas >= 100
)
  console.log("Both Win the trophy 🍹");
else console.log("No one win the the trophy");

// SWITCH STATEMENT
console.log("SWITCH STATEMENT");
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day valid day");
}

// TERNARY OPERATOR
console.log("TERNARY OPERATOR");

const ageAdult = 18;
ageAdult >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = ageAdult >= 18 ? "Wine" : "Water";
console.log(drink);

console.log(`I like to drink ${ageAdult >= 18 ? "Wine" : "Water"}`);

// CHALLENGE #14
console.log("CHALLENGE #14");

const bill = 275;
// const bill=430;
// const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, tip was ${tip}, and the total value ${bill + tip}`
);
