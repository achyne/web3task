// const date = new Date(2025, 8, 3, 11, 24, 55, 45);

const date = new Date();
console.log(date);

// Date methods
const year = date.getFullYear();
//console.log(year);

const month = date.getMonth();
const months = ["January", "Febuary","March", "April", "May","June","July","August","September","October","November","December"];
//console.log(months[month]);

const day = date.getDate();
//console.log(day);

const currentDate = `${months[month]} ${day}th, ${year}`;
console.log(currentDate);

const hour = date.getHours();
console.log(hour);

const minute = date.getMinutes();
console.log(minute);

const seconds = date.getSeconds();
console.log(seconds);
