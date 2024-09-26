// Arithematic operators + - / % * **

const num1 =2;
const num2 = 4;

const sum= num1 + num2;
console.log(sum);

console.log(12-4);

console.log("division", 12/2);

console.log("Modulus", 5 % 2);

console.log(4 * 2);

console.log(4 ** 2);

let num3 = 5;
console.log("value", num3--);

//Assignment Operators = += -= *= /= **=

let num4 = 5;

num4 = num4 +1; //6
num4 += 1;
console.log(num4);

let num5 = 9;
num5 -= 1;
console.log(num5);

let num6 = 10
num6 *= 2;
console.log(num6);

let num7 = 18
num7 **= 2;
console.log (num7);

console.log(5 + 5 + "5" + 5 + 5); //10555

//comparism oerators == > < === >= <= != !==

const value_1 = "5";
const value_2 = 5;
console.log(value_1 == value_2); // only compares value
console.log(value_1 === value_2); // considers both the value and datatype

console.log(9 > 2);
console.log(9 < 2);

console.log(7 >= 2);

const value_3 = "5";
const value_4 = 5;

console.log("Not Equal", value_4 != value_3); //false
console.log("Not Equal", value_4 !== value_3); //true


//ternary operators ? :
const code = 12345;
const password = 123;

//condition ? "true" : "false"
//const state = password == code ? "Logged In" : "Invalid password"
//console.log(state);

// logical operator && ||

//const email = "king@gmail.com";
//const statement = password == code && email == "king@gmail.com" ? "Logged In" : "Invalid Password"
//console.log(statement)

//logical not !
const fName = "Achyne";
const num = 0;

const fullname = !fName ? "please enter a valid name" : fName;
console.log(fullname);

//const full_name = fName || "Achyne";
//console.log(full_name);
const full_name = fName && "Achyne";
console.log(full_name);

const isStudent = "";
const student = isStudent && "john smith";
console.log("Student",student);