var aPrice = 40;
var bPrice = 250;
console.log(aPrice>bPrice);

console.log(10=='10');
console.log(10==='10');




//If Condition

var aPen  = 250;
if(aPen<300){
    console.log("Give me a Pen");
}

var aPen  = 400;
if(aPen<300){
    console.log("Give me a Pen");
}



//If-else

var weight = 40;
if(weight<20){
    console.log("I will carry by myself");
} 
else{
    console.log("i will rent a rickshaw");
}



//else-if
const price = 2000;
if(price>=5000){
    const discount = price*10/100;   //10% discount
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price>2500){
    const discount = price*5/100;   //5%discount
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}

