// The Rest Operator
// N:B rest operator always put end of all parameter

//rest operator collect all argument and put into a array
function sum(...args) {
   return args.reduce((a,b) => a+b);//returns sum  of all element
}

console.log(sum(1,2,3,4,5));