//for es6 module
const _radious = new WeakMap();

export class Circle {
    constructor(radious){
        _radious.set(this,radious);
    }

    draw(){
        console.log('Circle radious '+_radious.get(this));
    }
}