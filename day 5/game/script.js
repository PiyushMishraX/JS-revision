let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")
// pen.fillStyle = "red"

// pen.fillRect(100,100,50,50) 

let snakeCell = [[0,0]]
// let snakeCell = [[0,0], [50,0]]

let cell = 50

function draw() {

    pen.clearRect(0,0,canvas.width,canvas.height)
    pen.fillStyle = "red"
    for(let a of snakeCell){
        pen.fillRect(a[0], a[1],cell,cell)
    }
}
draw()

function update(){
    let headX = snakeCell[snakeCell.length-1][0] // last element X
    let headY = snakeCell[snakeCell.length-1][1] // last element Y 

    let newX = headX + cell 
    let newY = headY 
    snakeCell.push([newX,newY])

    snakeCell.shift()
    
    // canvas.width = canvas.width
}


setInterval(() => {
    draw()
    update()
}, 100);