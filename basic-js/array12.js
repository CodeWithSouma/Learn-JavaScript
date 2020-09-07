// Mapping an Array
const numbers = [1,-1,2,3];

// filter all positive numbers
const filtered = numbers.filter(number => number >= 0);

//maping this number to a unorder list 
const items = filtered.map(num => '<li>'+num+'</li>');

// we can map in to a object 
const itemsObj = filtered.map(num =>{
    return {value:num};
})

console.log(filtered);
console.log(items);

// we can join this item using join 
const html = '<ul>'+items.join(' ')+'</ul>';//join with space separator
console.log(html);
console.log(itemsObj);