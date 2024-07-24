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
