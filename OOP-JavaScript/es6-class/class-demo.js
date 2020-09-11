// ES6 class

// object declair using constructor function
// function Circle(radious) {
//     this.radious = radious;
//     this.draw = function () {
//         console.log('Draw');
//     }
// }

//under the hood it work same as constructor function
class Circle {
    constructor(radious){
        //instance member
        this.radious = radious;
        this.move = function () { console.log('Move');  }
    }

    //no return type no function keyword 
    //prototypical member
    draw(){
        console.log('Draw');
    }
}

const c = new Circle(1);
console.log(c);