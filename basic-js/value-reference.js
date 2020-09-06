//  In javascript we have two catagories of type
// value type: Number,String,Boolean,Symbol,Undefined,null
// Reference type: Object,function,array.

// primitive are coppied by their value
// Reference are coppied by their reference

// example value type
let x = 10;
let y = x;

x = 20;
// in this case x and y are two independent veriable.
console.log('X = '+x,'Y = '+y);

// example of reference type
let m = {value:10};
let n = m;

m.value = 20;
// in this case m and n depend each other.
console.log('M = '+m.value,'N = '+n.value);