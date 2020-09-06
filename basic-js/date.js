// built in data object 
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018,11,05,6,30);

now.setFullYear(2017);
// convert a date string 
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());