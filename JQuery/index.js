// console.log($); // $ is same as document

// let h1 = document.querySelector("h1")
// // console.log(h1.innerText);

// // console.log($("h1").text());

// // h1.innerText = "Hey"
// // console.log(h1.innerText);


// // console.log($("h1").text("No"));
// // $("h1").text("No")
// // console.log($("h1").text());


// // $("h1").css("color", "red")
// $("h1").css('color', 'red')


$("#fadein").click(()=>{
    console.log("fadein");

    $("#container").fadeIn()
})

$("#fadeOut").click(()=>{
    console.log("fadeOut");

    $("#container").fadeOut()
})

$("#fadetoggle").click(()=>{
    console.log("fadeOut");

    $("#container").fadeToggle()
})

