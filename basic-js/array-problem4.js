// move array element
const numbers = [1,2,3,4,5];

const output = move(numbers,1,4);

function move(array,index,offset) {
    const position = index+offset;
    if(position >= array.length || position < 0){
        console.error('Invalid Offset.');
        return;
    }
    const output =[...array];
    const element = output.splice(index,1);
    output.splice(position,0,element[0]);
    return output;
}

console.log(output);