// Abstruction using WeakMaps

const _radious = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radious){
        // this.radious = radious;//radious is public  
        _radious.set(this,radious);
        _move.set(this,function () { 
            console.log('move');
         })
    }

    draw(){
        console.log(_radious.get(this));
        _move.get(this)();
    }
}

const c = new Circle(1);
console.log(c);