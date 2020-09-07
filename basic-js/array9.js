// Sorting Arrays
const numbers = [1,5,6,8,2,3,7,9,4,10];
// sorting array
const sorted = numbers.sort((a,b) => a-b);
console.log(sorted);

// reverse array element
console.log(numbers.reverse());

// define an array that contain some object
const course = [
    {id:1,name:'Node.js'},
    {id:2,name:'JavaScript'}
];

// how to sort course array using name
// nameA and nameB compair ascii value 
course.sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA === nameB) return 0;
    else if(nameA > nameB) return 1;
    else if(nameA < nameB) return -1;
});

console.log(course);

