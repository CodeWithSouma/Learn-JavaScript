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
        // add error handeling
        if(typeof value !== 'string') 
            throw new Error('Value is not a string.');//through exeception;

       const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');//through exception

       this.firstName = parts[0];
       this.lastName = parts[1];

    }
}

// person.fullName = 'Soumadip Dey'
try {
    person.fullName = true;
} catch (error) {
    console.log(error);
}

console.log(person);
// console.log(person.fullName);
