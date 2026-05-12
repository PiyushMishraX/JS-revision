// let h1 = document.querySelector("h1")
// console.log(h1.innerText);

// h1.innerText = "buy"
// console.log(h1.innerText);


// let p = document.createElement("p")
// p.innerHTML = "hello"

// h1.appendChild(p) // for one element
// // h1.append() for multiple childs at once

// console.log(h1.innerHTML);

// h1.remove()

// console.log(h1.innerHTML);



let inp = document.querySelector("input")
let h1 = document.querySelector("h1")

let data = "";

inp.addEventListener("input", (e)=>{
    // console.log(e.target.value);
    data = e.target.value
})

// let btn = document.addEventListener("click", ()=>{
//     h1.innerText = data;
//     // inp.target.value = ""
//     inp.value = ""
//     data = ""
// })

let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    h1.innerText = data;
    // inp.target.value = ""
    inp.value = ""
    data = ""
})


