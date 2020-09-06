// create a object that have 3 property
// street
// city
// zipCode
// then create a function that take an object and display property and value

let address = {
    street : 'G.T road,Burdwan',
    city : 'Burdwan',
    zipCode : 713427
}

function showAddress(address) {
    for(let key in address)
        console.log(key,address[key]);
}

showAddress(address);