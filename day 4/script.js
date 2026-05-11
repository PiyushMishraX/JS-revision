
// var g = 20; // global scopeed

// var a = 20;
// {
// var a = 10;
// }
// console.log(a);


// block scoped
// let b = 20;
// {
//     let b = 10;
// }
// console.log(b);



// function scope
// function sum() {
//     var c = 10;
//     console.log(c);
    
    
// }
// console.log(c);
// sum()





//  this 


// console.log(this); // window


// var name = "p1"

// window.name = ""

let student = {
    id: 1,
    name: "piyush",
    isPass: true,

    sum: function () {
        console.log(this); // object
        
        console.log("hello");
        console.log(this.name);


        let s1 = ()=>{
            console.log(this.name);    // object         
        }
        s1()
    },

    arrow: ()=>{
        console.log(this); // window
        
        // console.log(this.name); // name not in the window

        console.log(this.name);
        
        
    }

}

// for (let a in student) {
//     console.log(student[a]);   
// }

student.sum();
student.arrow()




