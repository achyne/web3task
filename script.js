// let babe="vera";  
// console.log(babe)
// babe="chisom";
// console.log(babe)
// console.log(school)
// var school="APTECH"
// console.log(school)
// school="GLOWNY"
// console.log(school)


// let course="Javascript"
// console.log(course)
// course= "Python"
// console.log(course)


// let BigMan="Emmanuel"
// console.log(BigMan) 
// const num= 12
// console.log(num)

// const day='wednesday'
// /*console.log(typeof day, day)*/
// const tomorrow= "Thursday"
// const weekend = `Friday`
// console.log(day + tomorrow + weekend)
// console.log("day")
// /*console.log(typeof weekend, weekend)*/

// /*
// let year = 1997
// console.log(typeof year, year)
// const temp = 28.7
// console.log(typeof temp, temp)
// const state = prompt("which state are you from?")
// console.log(typeof state, state)
// alert(state)
// let currentAge = prompt("what is your current age?")
// console.log(typeof currentAge, currentAge)
// alert(currentAge)
// */
// const isMarried = false
// console.log(typeof isMarried, isMarried)

// let person1;
// console.log(typeof person1, person1)

// let fruit = []
// console.log(typeof fruit, fruit)
//name of user
// age of a user
// country of a user
// store into the variable name greetings "Hello Abigail, I heard you are a 25 years old developer from singapore. i just want to greet you"


let person = prompt("what is your name?")

let age = prompt("how old are you?")

let country = prompt("what's your country?")
Greetings = "Hello " + person + ", I heard you are a " + age + " years old developer from " +  country +". I just want greet you"
console.log(Greetings)
alert(Greetings)

function getname(name){
    if(name){
        var username= name;
    }
    console.log(username);
}

getname("smith")