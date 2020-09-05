// If a customer has more than 100 ponts
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 90;
let typeOfCustomer = points>100?'gold':'silver';
console.log(typeOfCustomer);