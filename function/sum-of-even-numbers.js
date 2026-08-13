function evenNumbersOnly(numbers){
    const evens = [];
    let sum =0;
    for(const number of numbers){
        if(number%2===0)
        {
            //console.log(number);
           evens.push(number);
           sum = sum+number;  //for sum of even numbers
        }
    }
    return{
        evens: evens,
        sum: sum
    };
    
}

const numbers = [5,8,91,24,6];
const result = evenNumbersOnly(numbers);

console.log('Even numbers are:', result.evens);
console.log('Sum of even numbers is:', result.sum);
