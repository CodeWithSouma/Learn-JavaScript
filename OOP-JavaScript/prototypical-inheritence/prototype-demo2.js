let person = {name:'Souma'};
// to find prototype of any object you have to use
// Object.getPrototypeOf(pass an object );
let objectBase = Object.getPrototypeOf(person);//it is parent / object base of person
let propertDescriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');

console.log(person.toString());
console.log(person);
console.log(objectBase);//it run on browser console,not work on node
console.log(propertDescriptor);//it run on browser console,not work on node

//we can't iterate all of the property of object base
for (let key in person) {
    console.log(key);//it will shows all property of this object
}

console.log(Object.keys(person));//we can only see name 

//name property become read only and it will not shown in object.keys
// and we cannot delete this property
Object.defineProperty(person,'name',{
    writable:false,
    // enumerable:false,
    configurable:false
});

//if i change name souma to soumik it is not work
person.name = 'Soumik';
console.log(person.name);//it shows souma 
console.log(Object.keys(person));//not shows name as a key
delete person.name;//not delete name property
console.log(person);
