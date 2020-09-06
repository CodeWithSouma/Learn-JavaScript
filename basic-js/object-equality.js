// check object equality

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

//areEquals return if  address 1  object and address 2 object have same property
function areEquals(address1,address2) {
    return address1.city === address2.city && 
    address1.street === address2.street && 
    address1.zipCode === address2.zipCode;
}

//areSame returns if address 1 and address 2 are same
function areSame(address1,address2) {
    return address1 === address2;
}

let address3 = address1;
console.log(areEquals(address1,address2));//poperty not same
console.log(areSame(address1,address2));//memory address not same 
console.log(areEquals(address1,address3));//poperty same 
console.log(areSame(address1,address3));//memory address same