const first_name = "John";
const last_name = " Smith";

const full_name = first_name + " " +last_name;
console.log(full_name);

// template literal
const fullName = `Fullname is ${first_name} ${last_name}`;
console.log(fullName);

// concat method
const username = first_name.concat(" ", last_name, "Joe");
console.log("username", username);

// length property
const greet = "Good Day sir"
console.log(greet.length);

//toUppercase && toLowerCase
const department = "Computer Science".toLowerCase();
//const new_department = department.toUpperCase();
console.log(department);

//indexOf
const greeting = "Hello you daniel, how are you daniel";
const indexDanny = greeting.indexOf("daniel", 12)
console.log(indexDanny);

//search
const youIndex = greeting.search("you");
console.log(youIndex);

//slice
const sliceOutValue = greeting.slice(0, 16);
console.log(sliceOutValue + "...");

//subString accepts only positive values
const newGreet = greeting.substring(1, 5);
console.log("subbed_out", newGreet);

//substr
const subbedOut = greeting.substr(3, 7);
console.log(subbedOut);

// trim
const userName = " Kingsely ";
const new_username = userName.trim();
console.log(userName.length);
console.log(new_username.length);

//charAt
const school = "Aptech";
console.log(school.charAt(0));

// replace
const price = "$7,000"
const formated_price= price.replace(/[$,]/g, ""); // regular expressions
console.log(formated_price);

const greet_user = "Hello class hello"; //yello
const new_greeting = greet_user.replace("Hello", "Yello"); //(/hello/gi, "Yello");
console.log(new_greeting);


