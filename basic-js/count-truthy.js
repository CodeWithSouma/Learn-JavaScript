// list of all falsy value
// 1.NaN
// 2. 0
// 3. false
// 4. ''
// 5. null
// 6. undefined

function countTruthy(array){
    let count = 0;
    for (let element of array) {
        if(element) count ++ ;
    }

    return count;
}

var array = ['','Souma',null,NaN,12,true,undefined,0];
console.log(countTruthy(array));
