// constructor property
// every object have a constructor function
function Circle(radious) {
    this.radious = radious,
    this.draw = function () {
        console.log('Draw');
    }
}

// create the object by using constructor function
const circle1 = new Circle(1);
console.log(circle1.constructor);//returns Circle() as a output basically it is a constructor

function createCircle(radious) {
    return {
        radious,//if key and value is same means radious:radious
        draw(){
            console.log('Draw');
        }
    } 
}

// create object by using factory function
const circle2 = createCircle(1);
console.log(circle2.constructor);//returns Object() as a output basically it is a built in constructor

// N:B factory function work like this 
const x = {};
// javascript interprit that cost x = new Object();

// string object create
// rather than using new String(); --->we use '',"",``;
//rather than using  new Boolean(); ---> we use true,false;