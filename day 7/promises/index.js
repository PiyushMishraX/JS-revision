
// let p = new Promise((res,rej)=>{
//     // until res , rej the the state is pending
// //  res() // resolve when needed fullfilled the process
// //  rej() // reject when some problem occurs , to reject the process

// })
// // res() or rej() the first to excute runs and and the promise


// // these runs only when state chages from pending to resolved or rejected
// p.then(()=>{ // runs if promise resolved
//     console.log("resolved");
    
// // }).catch(()=>{ // run when rejected 
// //     console.log("rejected");
// }).catch((err)=>{ // run when rejected 
//     // console.log("rejected");
//     console.log(err);
    
// }).finally(()=>{
//     console.log("Runs on both cases");
    
// })

// console.log(p);



// PROMISES AREN'T CREATED BY US DURING DEVELOPMENT WE USE PREBUILT MOSTLY PROMISES THAT WE GET 




function step1() {
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log("Select");
            res()
        }, 5000);
    })
}

// function step2() {
//     setTimeout(() => {
//         console.log("Fillterr");
//     }, 5000);
// }

function step2() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Fillterr");
        }, 5000);
    })
}


// step1().then(()=>{
//     step2()
// }).catch(()=>{

// })


//  .then and .catch is also very lengthy so we use async and await 

// async await syntax is better and easier to implement
async function call() {
    await step1()
    await step2()
    
}

call()


// PROMISES are in API calling and used through .then and .catch or Async Await