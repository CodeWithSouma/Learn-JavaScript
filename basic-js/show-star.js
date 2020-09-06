// Print Star problem

function showStars(rows) {
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for(let col = 0; col < row; col++)
            pattern+='* ';
        console.log(pattern);
    }
}

showStars(5);