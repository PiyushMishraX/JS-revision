
let p = new Promise((res,rej)=>{
    // until res , rej the the state is pending
//  res() // resolve when needed fullfilled the process
//  rej() // reject when some problem occurs , to reject the process

})
// res() or rej() the first to excute runs and and the promise


// these runs only when state chages from pending to resolved or rejected
p.then(()=>{ // runs if promise resolved
    console.log("resolved");
    
}).catch(()=>{ // run when rejected 
    console.log("rejected");
}).finally(()=>{
    console.log("Runs on both cases");
    
})

console.log(p);
