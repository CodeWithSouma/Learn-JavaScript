// add or remove property in object

function createCircle(radious) {
    return {
        radious,
        draw(){
            console.log('Draw');
        }
    }
}

const circle = createCircle(1);
console.log(circle);

// add some property
circle.location = {x:1,y:1};//add location object in to circle object 
console.log(circle);

// delete some property
delete circle.location;//remove location object from circle object
console.log(circle);