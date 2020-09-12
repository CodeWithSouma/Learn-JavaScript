// Getter Setter

const _radious = new WeakMap();

class Circle {
    constructor(radious){
        // this.radious = radious;//radious is public  
        _radious.set(this,radious);
    }

    // getter
    get radious(){
        return _radious.get(this);
    }

    //setter
    set radious(radious){
        if(radious <= 0) 
            throw new Error('Invalid radious');
        _radious.set(this,radious);
    }
    
}

const c = new Circle(1);
console.log(c);
c.radious = 5;
console.log('Radious: '+c.radious);