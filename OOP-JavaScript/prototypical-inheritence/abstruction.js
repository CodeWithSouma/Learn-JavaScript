// abstruction
// we should hide the complexcity and only show essentials

function Circle(radious) {
    this.radious = radious;

    // this.defaultLocation = {x:0,y:0};//we want to hide this property 
    //insted of declair this as a property we can declair as a veriable
    let defaultLocation = {x:0,y:0};//private

    // this.computeOptimumLocation = function () {
    //     //...
    // };//we also want to hide this function we can convert this function as a veriable
    let computeOptimumLocation = function () {//private
        // .....
    } ;

    this.draw = function () {
        computeOptimumLocation();
        console.log('Draw');
    };
    
}


// if we declair an instant of circle and try to access property 
// we can only access radious and draw because these are the property of circle object
// we can't access defaultLocation and computeOptimumLocation

const circle = new Circle(1);
console.log(circle);