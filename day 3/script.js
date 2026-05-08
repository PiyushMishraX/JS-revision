// let arr = [1,2,3,4,5,6];
// arr.push(7)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(0) // add 0 in front // unshift adds in front
// console.log(arr);

// console.log(arr.includes(10));
// console.log(arr.indexOf(5));

// let arr = [1,2,3,4,5,5,5,6];
// find function return single value if any first value matches it returns
// let data  = arr.find(function(a){
//     return a==5;
// })

// console.log(data);


// for in and for of loop combination ,
// a -> a single element,
// b-> index number
// c-> points the array -> use to modify old array
// let data1 = arr.forEach((a,b,c)=>{
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);

//     return a;  // for each cannot return just update the array
//     // return data1 --> will be undefined
    
// })

// console.log(data1);


// return type array 
// let data_map = arr.map((a,b,c)=>{

//     return a;

// })

// console.log(data_map);

// console.log(data_map == arr); // false

// console.log(mapD==arr);


// let arr = [1,2,3,4,5,6];

// // cannot pass codition in map like this in filer
// let filterD = arr.filter((a,b,c)=>{
//     return a>2
// })

// console.log(filterD);


let arr = [1,2,3,4,5,6];
// a (Accumulator): This is the value resulting from the previous iteration. If you provided an initial value, it starts as that; otherwise, it starts as the first element of the array.
// b (Current Value): The current element being processed in the array.
// c (Current Index): The index of the current element (b) being processed.
// d (Source Array): The original array reduce was called upon.

let sum = arr.reduce((a,b,c,d)=>{
    // console.log(a);
    
    return a+b // does a = a+b // a inital is first element and b is second at intial , then b moves to next element
})
console.log("sum is ",sum);
