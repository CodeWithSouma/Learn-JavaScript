// new style to supply default value afte es6

function interest(principal,rate = 3.5,year = 5) {
    //old style
    //supply default value using the concept of truthy
    // rate = rate || 3.5;//if user pass rate then it truthy other wise falsy(undefine)
    // year = year || 5;

    return (principal * rate * year)/100;
}

console.log(interest(10000,3.5,5));

console.log(interest(10000));