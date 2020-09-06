// one of the confusing concept in javascript function are a object

function Circle(radious) {
    this.radious = radious,
    this.draw = function () {
        console.log('Draw');
    }
}
// we can access property of circle like this
console.log(Circle.name);

// internally worked like this
// const circle1 = new Function('radious',`
// this.radious = radious,
// this.draw = function () {
//     console.log('Draw');
// }
// `);