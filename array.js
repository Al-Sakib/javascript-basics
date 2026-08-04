// Array length

const num = [88,77,99,420,45,67];
console.log(num.length);

//Index
 const number = [88,77,99,420,45,67];
console.log(number[0]);


//Push -> Add elements in the end of an array
const age = [];
const num1 = [12, 87, 98, 44];
num1.push(45);
num1.push(65);
num1.push(75,85);
console.log(num1);


//Pop -> Remove elements in the end of an array
const student = [];
const num2 = [12, 87, 98, 44];
num2.pop();
console.log(num2);

//Shift -> Remove element from start
const numbers = [12,87.98,45];
numbers.shift();
console.log(numbers);

//Unshift -> Add elements in the start of an array
const numbers1 = [12,87,98,45];
numbers1.unshift(23);
console.log(numbers1);


//Indexof -> To find index of an elemnt
const numbers2 = [12,87,98,45];
console.log(numbers2.indexOf(87));


//isArray -> To check an array or not an array
const numb = [12,87,98,45];
const friends = [];
const food = 'ros o golla';
console.log(Array.isArray(numb));
console.log(Array.isArray(friends));
console.log(Array.isArray(food));



//Includes -> To check an array has the element or not
const numb1 = [12,87,98,45];
console.log(numb1.includes(87));
console.log(numb1.includes(90));