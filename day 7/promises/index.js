
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

function NoPromise() {
        setTimeout(() => {
            console.log("no promise");
        }, 1000);
}

// step1().then(()=>{
//     step2()
// }).catch(()=>{

// })


//  .then and .catch is also very lengthy so we use async and await 

// async await syntax is better and easier to implement
// async function call() {
//     await step1()
//     await step2()
//     // NoPromise()
//     // await NoPromise()
// }

// call()


// PROMISES are in API calling and used through .then and .catch or Async Await



//  fetch -> fetch premade promise apis

// fetch()


// api full form --> Application Programming Interface

// goto -->> https://jsonplaceholder.typicode.com/
// fetch('https://jsonplaceholder.typicode.com/todos/1').
// then(response => response.json())
// .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos").
// then((data) => {
//     return data.json()
// })
// .then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);  
// })



//  print

let h2 = document.querySelector("h2")

fetch("https://jsonplaceholder.typicode.com/todos").
then((data) => {
    return data.json()
})
.then((val)=>{
    console.log(val);
    // h2.innerText = val[9].title

    for (const i in val) {
        const newH2 = document.createElement('h2')

        newH2.innerText = val[i].title

        document.body.appendChild(newH2)
        
        
    }
}).catch((err)=>{
    console.log(err);  
})



