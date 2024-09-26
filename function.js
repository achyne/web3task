function greetUser() {
    console.log("Welcome back, Achyne!!!");
}

//greetUser();

function greetUser(name) {
    console.log("Welcome back," + " " + name);
}

greetUser("kingsely");
greetUser("Amaka");

// arrow function

const getAge = (age) => {
    console.log(`Age is ${age}`);
};

getAge(75);

// const getAge = (age) => console.log(`Age is ${age}`);

//constructor function synthax

const getItem = new Function(console.log("Hello"));
getItem();


//function expression
const getFullname = function () {
    return "James Due";
};
console.log(getFullname());

//callback function

(function(){
    console.log("Call back function !");
}) ();

(() => {
    console.log("Arrow function");
})();

