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


function step1(fn) {
    setTimeout(() => {
        console.log("Select");
        fn()
    }, 5000);
}

function step2(fn) {
    setTimeout(() => {
        console.log("Fillterr");
        fn()
    }, 4000);
}

function step3(fn) {
    setTimeout(() => {
        console.log("Caption");
        fn()
    }, 3000);
}

function step4() {
    setTimeout(() => {
        console.log("Post");
    }, 2000);
}


// Callback
step1(function () {
    step2(function () {
        step3(function () {
            step4()
            
        })
        
    })
    
})