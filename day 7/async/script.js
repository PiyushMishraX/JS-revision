setTimeout(()=>{
    console.log("C");
    
},10)


setTimeout(()=>{
    console.log("B");
    
},0)

console.log("A");

// A, B, C --> synchronus runs immedietly while B and C goes for web api which takes ome time ,, A get stored in callStack and execute
//  B and C enters web api , get there functionality and enters call ba k queue according to their time ( ascending order )

//  the event loop ( security guard) check if callstack is empty or not ( waits longer according to bigger functions such as loop etc)
// when it call stack is empty then sends call back queue element one by one to callstack

// 


// Web APIs 
// log , settimeout, interval , fetch etc are provided by browser web apis which gives time loading fcntions nality 



// console.log  isn't real print method it is just for debugging mostly , given by browser , 
// js doesn't have its own printing method for console, terminal