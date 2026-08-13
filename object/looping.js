// 1. Object
const student = {
    name: 'Abdullah',
    age: 25,
    department: 'CSE'
};

// 2. Access
console.log(student.name);

// 3. for...in
for (const key in student) {
    console.log(key, student[key]);
}