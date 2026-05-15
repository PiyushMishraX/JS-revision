let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');
let apiK='key'

btn.addEventListener("click",()=>{
    let data=input.value

    // let city="bhopal"

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiK}`).
    then((res)=>{
        return res.json()

    }).then((val)=>{
       console.log(val);
       
            show(val)
    })

})


function show(val) {

    // console.log(val);
    

    let h2 = document.createElement("h2")
    console.log(val.main.temp);
    
    // let data = `${val.main.temp - 273.15}`
    let data = Math.trunc(`${val.main.temp - 273.15}`)
    console.log(data);
    
    h2.innerText =  data

    list.append(h2)
    
}


// function show(val){
//   for(let i of val){
//     let img=  document.createElement("img")
//     console.log(i.show.image.original,"heheh");
//     img.setAttribute("src",i.show.image.original)   
//     list.append(img)

//   }
// }




