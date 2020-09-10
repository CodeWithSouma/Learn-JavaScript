// getter setter
// if we want to access private member of object then we have to use getter setter

function Circle(radious) {
    this.radious = radious;

    // this.defaultLocation = {x:0,y:0};//we want to hide this property 
    //insted of declair this as a property we can declair as a veriable
    let defaultLocation = {x:0,y:0};//private

   
    //built in property 
    Object.defineProperty(this,'defaultLocation',{
        get: function () {return defaultLocation },//getter
        
        set: function (value) {//setter
            if(!value.x || !value.y)//validation logic
                throw new Error('Invalid location');
            defaultLocation = value
        }  
    });

    
    this.draw = function () {
        console.log('Draw');
    };
    
}


const circle = new Circle(1);
console.log(circle);
console.log(circle.defaultLocation);
circle.defaultLocation = {x:1,y:1};
console.log(circle.defaultLocation);

