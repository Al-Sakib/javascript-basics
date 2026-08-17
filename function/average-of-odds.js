function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number%2!==0)
        {
            odds.push(number);
        }
    }

    let sum = 0;
    for(const number of odds){
        sum = sum+number;
    }
    const count = odds.length;
    console.log(sum,count);
    const avg = sum/count;
    return avg;
}

const numbers = [5,8,91,24,6];
const result = oddAverage(numbers);
console.log('Average of odd numbers:', result);