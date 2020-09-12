const _radious = new WeakMap();//we have to hide this 

class Circle {
    constructor(radious){
        _radious.set(this,radious);
    }

    draw(){
        console.log('Circle radious '+_radious.get(this));
    }
}

const circle = new Circle(1);
console.log(circle);
circle.draw();

//other wise we can access like this
// console.log(_radious.get(circle));//we have to hide weakmap
// to solve this problem we have to use module concept