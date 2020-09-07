// create a function that takes an array and a searchElement
// and count how many times that element present that element
// and return count;

const numbers = [1,2,3,1,1,2,5];
const count = countOccurrences(numbers,1);

console.log(count);

// sollution 1
// function countOccurrences(array,searchElement) {
//     let count = 0;
//     for (const element of array) 
//         if(element === searchElement) count++;
//     return count;    
// }


// sollution 2
// function countOccurrences(array,searchElement) {
//     let count = 0;
//     array.forEach(element => {
//       if(element === searchElement) count++;
//     });
//     return count;
// }

// // sollution 3
// function countOccurrences(array,searchElement) {
//    return array.reduce((accumulator,currentValue) => {
//         const occurrence = currentValue === searchElement ? 1 : 0;
//         return accumulator+occurrence;
//     },0)
// }

// Refactored sollution 3
function countOccurrences(array,searchElement) {
   return array.reduce((accumulator,currentValue) => {
        if(currentValue === searchElement) accumulator ++;
        return accumulator;
    },0)
}