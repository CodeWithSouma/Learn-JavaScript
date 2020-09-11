// Abstruction using Symbol

const _radious = Symbol();//primitive
const _draw = Symbol();//primitive
class Circle {
    constructor(radious){
        // this.radious = radious;//radious is public
        this[_radious] = radious;
    }

    [_draw](){
        
    }

}

const c = new Circle(1);
console.log(Object.getOwnPropertySymbols(c));