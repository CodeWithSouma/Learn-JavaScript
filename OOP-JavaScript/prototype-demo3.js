// constructor also have a prototype
function Circle(radious) {
    this.radious = radious;
}

const circle = new Circle();

// we can find prototype using
// Object.getPrototypeof(pass an object)
// we know in javascript function is a object so it has
// object base 
// it show constructor we know constructor create Circle function
// constructor is the parent of object circle N:B we know function is a object
console.log(Circle.prototype);//run on browser console not node enviroment
console.log(Object.getPrototypeOf(circle));

//this two prototype are same that means they are the clid of same object base
console.log(Circle.prototype === Object.getPrototypeOf(circle));
