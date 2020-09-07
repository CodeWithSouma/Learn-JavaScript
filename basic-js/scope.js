//  Local vs Global Scope
// when we declair veriable like let or const there scope limited 
// in which block they are define

// global scope
// const message = 'hi';//accessable from everywhere
// console.log(message);

{
    //local scope
    const message = 'hi';//we cant access outside of the block
}

console.log(message);
