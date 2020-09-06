// initilize this object using Factory and Constructor Functions
let address = {
    street : 'G.T road,Burdwan',
    city : 'Burdwan',
    zipCode : 713427
}

// Using Factory Function(camelCase)
function createAddress(street,city,zipCode) {
    return{
        // we don't need to write street:street,we can only street it is same 
        // here key and value same so we drop value it will automatically assigned
        street,
        city,
        zipCode
    }
}

let address1 = createAddress('BC road,Burdwan','Burdwan',713427);
console.log(address1);

// Using Constructor Function (PascalCase)
function Address(street,city,zipCode){
    this.address = street,
    this.city = city,
    this.zipCode = zipCode
}

let address2 = new Address('khoshbagan,Burdwan','Burdwan',713427);
console.log(address2);