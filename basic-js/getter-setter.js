// this approch i don't like 
// const person = {
//     firstName:'Souma',
//     lastName:'Dey',
//     fullName(){return `${person.firstName} ${person.lastName}`}
// }

// console.log(person.fullName());

// getters => access property of an object
//setters => change or (mutate) them
const person = {
    firstName:'Souma',
    lastName:'Dey',
    get fullName(){return `${person.firstName} ${person.lastName}`},
    set fullName(value){
       const parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];

    }
}

person.fullName = 'Soumadip Dey'

console.log(person);
console.log(person.fullName);