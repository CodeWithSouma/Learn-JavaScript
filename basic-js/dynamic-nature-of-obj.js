// Dynamic nature of object 
const circle = {
    radious: 1
}
// dynamically update object 
// we can add member 
circle.color = 'yellow';
circle.draw = function () {console.log('Draw');}

console.log(circle);

// we can delete member
delete circle.color;
console.log(circle);