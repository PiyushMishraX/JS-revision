// ---------------- CURRYING -----------------

// function sum(b) {
//     return function (a) {
//         return a+b;
//     }
// }

// // added in ecma script
// console.log(sum(6)(5));

// function sum(c) {
//   return function (b) {
//     return function (a) {
//       return a + b + c;
//     };
//   };
// }

// // console.log(sum(6)(5));
// console.log(sum(6)(5)(3));

// function sum(c) {
//   return function (b) {
//     return function (a) {
//       return a + b + c;
//     };
//   };
// }




// function sum(a) {
    
//     return function (b) {
//       if(b){
//         return sum(a+b)
//       }
//       return a
//     }
// }

function sum(a) {
    
    return function (b) {
      if(b){
        return sum(a+b)
      }
      return a
    }
}

// console.log(sum(6)(5)(3)(6)(5)(3)(6)(5)(3)(6)(5)(3)());
console.log(sum(6)(5)(3)(6)(5)(3)(6)(5)(3)(6)(5)(3));



