// The Spread Operator
const first = [1,2,3];
const second = [4,5,6];

// concat two array using concat method
// const combined = first.concat(second);

// using sprade operator
const combined = [...first,'a','b',...second];
console.log(combined);

// copy using slice method
// const copy = combined.slice();

//copy using sprade operator
const copy = [...combined];
console.log(copy);

