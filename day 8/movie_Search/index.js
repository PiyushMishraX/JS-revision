let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("#list");

btn.addEventListener("click", () => {
  let data = input.value;

  // api --> https://api.tvmaze.com/search/shows
  // completed api with data inpt -->
  //  `https://api.tvmaze.com/search/shows?q=${data}`

  fetch(`https://api.tvmaze.com/search/shows?q=${data}`)
    .then((info) => {
      return info.json();
    })
    .then((val) => {
      //   console.log(val[0].show.image.original);
      show(val);

      //   for (const i in val) {
      //     show(val);
      //   }
    })
    .catch((err) => {
      console.log(err);
    });
});

function show(val) {

    console.log(val);
    
    list.innerHTML = ""
  for (const i in val) {


    // let img = document.createElement("img");
    // img.setAttribute("src", val[i].show.image.original);

    // list.appendChild(img);

    // console.log(val[i].show.image.original);

    let img = document.createElement("img");

    try {
      img.setAttribute("src", val[i].show.image.original);

      console.log(val[i].show.image.original);
    } catch (error) {
        img.setAttribute("src", "https://thumbs.dreamstime.com/b/page-not-found-error-hand-drawn-ghost-doodle-vector-illustration-internet-connection-trouble-concept-105206287.jpg");
        
        console.log("no inp");
    }
    list.appendChild(img);
  }
}
