// Composition / mixins

function mixin(target, ...sources) {//here we use rest operator don't confuse it
    Object.assign(target, ...sources);//here we use sprade operator
}

const canEat = {
    eat:function () { 
        this.hanger --;
        console.log('eating');
    }
}


const canWalk = {
    walk:function () { 
        console.log('walking');
    }
}


const canSwim = {
    swim:function () {
        console.log('swim');
    }
}

// Object.assign help to copy one object to another object
// const person = Object.assign({},canEat,canWalk);
// console.log(person);

// if want to use constructor function 
function Person() {
    
}

// Object.assign(Person.prototype,canEat,canWalk);
mixin(Person.prototype,canEat,canWalk);//call mixin function
const person = new Person();
console.log(person);


function GoldFish() {
    
}

// Object.assign(GoldFish.prototype,canEat,canSwim);
mixin(GoldFish.prototype,canEat,canSwim);//call mixin function
const goldFish = new GoldFish();
console.log(goldFish);