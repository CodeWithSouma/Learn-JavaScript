// object literal syntax is not a good waya to create object 
// so the factories method came in.

// Create object using factories methods

// factory function
function createCircle(radious,x,y) {
    return {
        radious,
        location:{
            x,
            y
        },
        draw(){
            console.log('Draw');
        }
    }
}

const circle = createCircle(1,1,1);
console.log(circle);
circle.draw();