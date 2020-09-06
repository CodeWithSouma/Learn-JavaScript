//Object-Oriented-Programming(OOP)
// Factory Function
function createCircle(radious) {
    return {
        radious,//if key and value is same means radious:radious
        draw(){
            console.log('Draw');
        }
    } 
}

// now we can create an object using factory method
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);