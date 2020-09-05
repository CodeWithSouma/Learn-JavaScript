// Logical Operators


// 1.Logical AND(&&)
// Returns true if both operand are true
// console.log(true && true);
// console.log(true && false);

// * Approved loan problem :- we want to approved loan that customer
// who have high income and good creadit score

let highIncome = true;
let goodCreditScore = true;
let eligiableForLoan = highIncome && goodCreditScore;
console.log("Eligiable ",eligiableForLoan);

// 2.Logical OR(||)
// Returns true if one of the operand is true
highIncome = false;
goodCreditScore = false;
eligiableForLoan = highIncome || goodCreditScore;
console.log("Eligiable ",eligiableForLoan);

// 3.NOT operator (!)
let applicationRefused = !eligiableForLoan;
console.log("Application refused ",applicationRefused);

// N:B Falsy (false)
// 1. undefined
// 2. null
// 3. 0
// 4. false
// 5. ""
// 6. NaN
// all of these are produce false
// any thing that is not falsy  --> Truthy
console.log(false||'Souma'); //so it produce souma as a output

// sort-circuting 
// after when ever it find truthy it stop finding
console.log(false||''||'souma'||1||'soumik');//it produce souma as a output 

// real world example
let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //it produce blue as a output