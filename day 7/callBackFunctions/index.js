// function step1() {
//     setTimeout(() => {
//         console.log("Select");
//     }, 5000);
// }

// function step2() {
//     setTimeout(() => {
//         console.log("Fillterr");
//     }, 4000);
// }

// function step3() {
//     setTimeout(() => {
//         console.log("Caption");
//     }, 3000);
// }

// function step4() {
//     setTimeout(() => {
//         console.log("Post");
//     }, 2000);
// }

// Problem output -> post , caption , fillterr, Select
//  which is wrond orber beacuse they are dependent on each other not independent




// Solution--  Call backFunctions 


// function step1(fn) {
//     setTimeout(() => {
//         console.log("Select");
//         fn()
//     }, 5000);
// }

// function step2(fn) {
//     setTimeout(() => {
//         console.log("Fillterr");
//         fn()
//     }, 4000);
// }

// function step3(fn) {
//     setTimeout(() => {
//         console.log("Caption");
//         fn()
//     }, 3000);
// }

// function step4() {
//     setTimeout(() => {
//         console.log("Post");
//     }, 2000);
// }


// // Callback
// step1(function () {
//     step2(function () {
//         step3(function () {
//             step4()
            
//         })
        
//     })
    
// })




// CALL BACK HELL  --- > WHEN THEIR NOT JUST SMALL LIMITED NUMBER OF STEPS WE HAVE TO ADD THEM AGAIN AND AGAIN 
// WHICH CREATES PROBLEM IN LARGER TERMS
// WHICH IS HELL , CREATING COMPREHENDING PROBLEM AND CAN  CAUSE ERRORS BECAUSE OF SO MUCH NESTING
// IT IS CALLED CallBack Hell

// step1(function () {
//     step2(function () {
//         step3(function () {
//             step4(function () {
//                 step5(function () {
//                     step6(function () {
//                         step7(function () {
//                             step8(function () {
//                                 step9(function () {
//                                     step10(function () {
//                                         step11(function () {
//                                             step12(function () {
//                                                 step13(function () {
//                                                     step14(function () {
//                                                         step15(function () {
//                                                             step16(function () {
//                                                                 step17(function () {
//                                                                     step18(function () {
//                                                                         step19(function () {
//                                                                             step20(function () {
//                                                                                 // Steps are still adding...
//                                                                             });
//                                                                         });
//                                                                     });
//                                                                 });
//                                                             });
//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });



// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         step5(() => {
//           step6(() => {
//             step7(() => {
//               step8(() => {
//                 step9(() => {
//                   step10(() => {
//                     step11(() => {
//                       step12(() => {
//                         step13(() => {
//                           step14(() => {
//                             step15(() => {
//                               step16(() => {
//                                 step17(() => {
//                                   step18(() => {
//                                     step19(() => {
//                                       step20(() => {
//                                          // Steps are still adding...
//                                       })
//                                     })
//                                   })
//                                 })
//                               })
//                             })
//                           })
//                         })
//                       })
//                     })
//                   })
//                 })
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// })


// solution to this is Promise