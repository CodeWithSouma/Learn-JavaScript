// Enumerating Properties of an Object
const circle = {
    radious:1,
    draw:function(){
        console.log('Draw');
    }
}

// we can iterate all key of an object using for in loop
for(let key in circle)
    console.log(key,circle[key]);

// but we can't iterate by using for of loop
// for (let key of circle)
//     console.log(key,circle[key]);
// it produce error.for of loop can only access an array not object 

// if we want to access object using for of loop we have to convert all key to a array like this
// Object.keys(circle) it returns an array that consist of all of the key of circle object
for (let key of Object.keys(circle))
    console.log(key,circle[key]);

// we can also use Object.entries it returns all the key value pair array
for (let entry of Object.entries(circle))
    console.log(entry);

// we can use in keyword with if  statement for check the key is present or not 
if ('radious' in circle) console.log('Yes.');