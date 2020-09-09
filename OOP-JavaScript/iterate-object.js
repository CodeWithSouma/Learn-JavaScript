// iterate object 
// circle object / constructor function of circle object
function Circle(radious,x,y) {
    this.radious = radious;
    this.location = {x,y};
    this.draw = function () {
        console.log('Draw');
    }
    
}

const circle = new Circle(1,1,1);

for (let key in circle) {
    if(typeof circle[key] !== 'function')
       console.log(key,circle[key]);
}

// another approch to get key and value
const keys = Object.keys(circle);
console.log(keys);

// check if a property is exist or not
if('radious' in circle)
    console.log('Circle have radious.');