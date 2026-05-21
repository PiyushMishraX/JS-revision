
//pure functions --> output not dependent
function double(num) {
    return num*2
}
console.log(double(5));
console.log(double(5));
// same argument same output  


// impure functions --> output dependent
let count  = 5; 
function fn1(){
    count ++
    return count
}
console.log(fn1());
console.log(fn1());
console.log(fn1());
// same argument differnt outputs  
