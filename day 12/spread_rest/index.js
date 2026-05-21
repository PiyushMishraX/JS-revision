
// spread unpacks to indeviduals
// let arr = [1, 2, 3, 4, 5]
// // let nums = [ 7, 8, 9]

// // nums = arr.concat(nums)// not modern
// let nums = [ ...arr, 7, 8, 9]

// console.log(nums);




// rest operator/ parameter --> packs in oe

// function sum(a,b,c) {
//     console.log(arguments);
//     return a+b+c;    
// }
// sum(24,3,43,43,43,35,6,3)


//rest packs data in form of an array

// function sum(a,b,c, ...nums) {
//     let sum=0;
//     console.log(arguments);

//     console.log(nums);
    
//     return a+b+c;    
//     // return sum;    
// }

// sum(24,3,43,43,43,35,6,3)

// console.log(sum(24,3,43,43,43,35,6,3));
// // console.log(sum(24,3,43,43,43,35,6,3));


// function sum(a,b,c, ...nums) {
//     let sum=0;
//     console.log(arguments);

//     console.log(nums);
    
//     return a+b+c;   
// }



//  ------------- DESTRUCTURING -----------

let arr = [1,2,3,4,5,6]
let [a, b, c] = arr // value according to positions
console.log(a);
a =23;
console.log(a); // a is seperate from arr[index]
console.log(arr[0]);




