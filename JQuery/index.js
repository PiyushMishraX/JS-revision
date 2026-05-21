console.log($); // $ is same as document

let h1 = document.querySelector("h1")
// console.log(h1.innerText);

// console.log($("h1").text());

h1.innerText = "Hey"
console.log(h1.innerText);


// console.log($("h1").text("No"));
$("h1").text("No")
console.log($("h1").text());


