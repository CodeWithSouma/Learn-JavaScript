//Implementation details
const _radious = new WeakMap();

//Public interface
class Circle {
    constructor(radious){
        _radious.set(this,radious);
    }

    draw(){
        console.log('Circle radious '+_radious.get(this));
    }
}

// for multiple
// module.exports.Circle = Circle; //export using commonJs if you export only one object you can reset exports

//for single
module.exports = Circle; 