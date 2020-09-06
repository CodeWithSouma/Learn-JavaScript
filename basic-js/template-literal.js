// Template Literals

// it is very very ugly let see how to fix it
const message = 
    'This is my\n'+
    '\'first\' message';

// example some of the literal we seen before
// 1. Object literal : {}
// 2. String literal: "",'',``
// 3. Boolean literal: true,false

// es6 Template literal:``
const another = 
`This is my
'first' message`;
console.log(another);

// real world use case suppose you write a email
console.log('**********************');
// we can pass veriable into template like this ${} => this is a place holder
let name = 'John'
const email = 
`Hello ${name},

Thank you for joining my mailing list.

Regards 
Souma `

console.log(email);

