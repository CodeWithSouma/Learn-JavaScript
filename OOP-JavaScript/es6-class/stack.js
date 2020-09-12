//Implement stack using es6 class
const _stack = new WeakMap();//for private member
class Stack {
    constructor(){
        _stack.set(this,[]);
    }

    get count(){
        const stack = _stack.get(this);
        return stack.length;
    }

    push(obj){
        const stack = _stack.get(this);
        if(obj === null) throw new Error('Please give some value to push.');
         stack.push(obj);
    }

    pop(){
        const stack = _stack.get(this);
        if(stack.length === 0) throw new Error('Stack is empty.');
        return stack.pop();    
    }
    peek(){
        const stack = _stack.get(this);
        if(stack.length === 0) throw new Error('Stack is empty.');
        return stack[stack.length - 1];
    }
}


const stack = new Stack();
console.log(stack);