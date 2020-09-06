// grade calculator
// write a function calculateGrade and
// it take an array of marks and calculate 
// avgrage marks and then based on avgrage calculate grade

// table of grade
// 1 - 59 : F
// 60 - 69 : D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

function calculateGrade(marks) {
    const avg = calculateAvgrage(marks);
    if (avg < 60) return 'F';
    else if(avg < 70) return 'D';
    else if(avg < 80) return 'C';
    else if(avg < 90) return 'B';
    else return 'A';   
}

function calculateAvgrage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.length;
}

let marks = [80,80,50];
console.log(calculateGrade(marks));