//even odd programming
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
       let message = ( i % 2 === 0 ? "Even Number" : "Odd Number.")
       console.log(i,message);
    }
}

showNumbers(10);