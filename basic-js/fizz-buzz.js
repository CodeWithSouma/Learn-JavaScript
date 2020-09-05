// if a number divisiable by 3 => fizz
// if a number divisiable by 5 => buzz
// if a number divisiable by 3 and 5 =>FizzBuzz
// else return same number


function fizzBuzz(input) {

    if(isNaN(input))
        return 'Not a number'
    else if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    else if(input % 3 === 0)
        return 'Fizz';
    else if(input % 5 === 0)
        return 'Buzz';
    else
        return input;
}

console.log(fizzBuzz(15));