
let form = document.querySelector("#formData")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
    
    let userData= {
        name: form[0].value,
        email: form[1].value,
        password: form[2].value
    }

    console.log(userData);

    localStorage.setItem('data', JSON.stringify(userData))

    
})
