// let btn = document.querySelector("button")
// let body = document.querySelector("body")

// let isActive = true
// btn.addEventListener("click", function() {
//     // console.log("hello");
//     // body.style.backgroundColor= "black";

//     if(isActive === true ){
//         body.style.backgroundColor = "pink"
//         isActive = false;
//     } else {
//         body.style.backgroundColor = "green"
//         isActive = true;
//     }
// })

// btn.addEventListener("click", function() {
//     // console.log("hello");
//     // body.style.backgroundColor= "black";
//     body.classList.toggle('toggle')
// })

// let body = document.querySelector("body");
// let btn = document.querySelector("button");

// let h2 = document.querySelector("h2");

// btn.addEventListener("click", function () {
//     let data = prompt("enter user name");
//     h2.innerText = "hello " + data
//     h2.style.textAlign = "center"
//     body.appendChild(h2);
// })


// let data = prompt("enter user name");
// h2.innerText = "HELLO " + data;
// h2.style.textAlign = "center";
// body.appendChild(h2);




let body = document.querySelector("body");
let btn = document.getElementsByClassName("two"); // returns an array of all element with class two not one element so we have use indices to indicate click on specific elements

// let h2 = document.querySelector("h2");
let h2 = document.getElementById("one")


btn[0].addEventListener("click", function () {
    let data = prompt("enter user name");
    h2.innerText = "hello " + data
    h2.style.textAlign = "center"
    body.appendChild(h2);
})