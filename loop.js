const students = ["henry", "precious", "james", "Glory"];
//console.log(students[1]);
//console.log(students[0]);
//console.log(students[3]);

//for loop

let index;
for(index = 0; index < students.length; index++) {
    console.log(students[index]);
}

// For In (arrays and objects)
const user = {
    firstname: "John",
    lastname: "Smith",
    nationality: "Nigeria",
    age: 55

};

console.log(user.nationality);
console.log(user["firstname"]);

let key;
for (key in user) {
    console.log(`${key.toUpperCase()} : ${user[key]}`);
}

//for of (arrays and strings)
const greeting = "Hello World";
console.log(greeting.charAt(0));
console.log(greeting[2]);

let char;
for (char of greeting) {
    console.log(char)
}

//while
let num = 0;
while(num < 6){
    console.log(num);
    num++;
}

// do while
let num2 = 0;
do{
    console.log(num2);
    num2++;
} while (num2 < 10);