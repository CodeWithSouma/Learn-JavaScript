// clone object 
const circle = {
    radious:1,
    draw:function(){
        console.log('Draw');
    }
}

/* // old method to copy or clone object 
// clone all the poperty of circle object and put inito another object
// we have to use bracket notation to set new property 
const another = {};
for (let key in circle){
    another[key] = circle[key];
}
// it work like this 
// another['radious'] = circle['radious'];
    console.log(another);
*/

// latest waya to clone object 
// no need to pass empty object like this
// const another = Object.assign({color: 'yellow'},circle);
// console.log(another);

// it is most easy waya to copy or clone a object
// we can also use sprade operator to clone a object 
const another = {...circle};
console.log(another);