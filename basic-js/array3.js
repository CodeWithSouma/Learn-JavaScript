// Finding Elements (Reference Types)

const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'}
];

// in this case includes methods not help you to find
// reason for this two object are present in diffrent location so it returns false
// so you need to use find method
console.log(courses.includes({id:1,name:'a'}));

// find course where course name 'a'
console.log(courses.find(function(course) {
    return course.name === 'a';//returns true or false
}));

// find index of the course where course name 'a'
// here we use arrow function
// if you have single parameter dont need to use brackets ()
// if your function returns a single line of code don't need to use {}, and return keywords
console.log(courses.findIndex(course => course.name === 'a'));