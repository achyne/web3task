const num = "5";
console.log(typeof num);

//Number
// every Class starts with a capital letter
const new_num = Number(num);
console.log(typeof new_num);

//toString
const num2 = 5;
console.log("Num2", typeof num2);
const num3 = num2.toString();
console.log("Num3", typeof num3);

// valueOf
const sum = 2 + 2;
console.log(sum.valueOf());

//toFixed
const num4 = 9.677;
const fixed = num4.toFixed(2);
console.log(fixed);

//parseInt
const num5 = '12.55';
console.log(parseInt(num5));


//parseFloat
const num6 = "10.65";
console.log(parseFloat(num6));

//to Exponential
const num7 = 9.257;
console.log(num7.toExponential(3));

//Maths Methods
const num8 = Math.round(-5.7);
console.log(num8);

//ceil
const num9 = Math.ceil(7.2);
console.log(num9);

//floor
const numX = Math.floor(5.9);
console.log(numX);

//trunc
const num11 = Math.trunc(12.66);
console.log(num11);

//sign 1 0 -1
const discountLevel = 10;
const userLevel = 2; 

const num12 = Math.sign(userLevel - discountLevel);
const discount_statues = num12 == 1 ? "Qualified for discount" : "Not qualified";
console.log(discount_statues);

//Pow
const pow = Math.pow(8,2);
console.log(pow);

//sqrt
const sqrt = Math.sqrt(49);
console.log(sqrt);

//abs -4,500
const abs = Math.abs(-4500);
console.log(abs);

//max 
const maxNum = Math.max(12, 700, 7 , 5);
console.log(maxNum);

//min
const minNum = Math.min(12, 80, -7000, 6, 76)
console.log(minNum);

//random
const id = math.random();
console.log(Math.floor(id * 10));

