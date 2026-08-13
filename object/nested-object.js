const college = {
    name: 'HTUC',
    class: [11,12],
    events: ['science fair', '21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college.unique.result);
console.log(college.unique);

//To change the value in object
college.unique.result.merit  = 'second';
console.log(college.unique.result.merit);