// In low level programming like c,c++ we need to dealocate after use object/structure
// but in the case of javascript the memory will automatically dealocate after use object
// for example
const obj = {};
console.log(obj);

//the javascript engin have a garbeg collector it finds veriable or object that are
// already been used and deallocate the memory that is allocated by that veriable/object
// memory allocation and deallocation happend automatically we dont have control over that