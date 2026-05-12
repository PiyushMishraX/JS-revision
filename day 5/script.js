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


inp.addEventListener("input", (e)=>{
    // console.log(e.target.value);
    h1.innerText = e.target.value
    
})
