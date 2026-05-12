let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");
// pen.fillStyle = "red"

// pen.fillRect(100,100,50,50)

let snakeCell = [[0, 0]];
// let snakeCell = [[0,0], [50,0]]

let cell = 50;
let direction = "right";

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key == "ArrowUp") {
    direction = "up";
  } else if (e.key == "ArrowDown") {
    direction = "down";
  } else if (e.key == "ArrowLeft") {
    direction = "left";
  } else {
    direction = "right";
  }
});

function draw() {
  pen.clearRect(0, 0, canvas.width, canvas.height);
  pen.fillStyle = "red";
  for (let a of snakeCell) {
    pen.fillRect(a[0], a[1], cell, cell);
  }
}
draw();

function update() {
  let headX = snakeCell[snakeCell.length - 1][0];
  let headY = snakeCell[snakeCell.length - 1][1];

  let newX;
  let newY;
  if (direction == "right") {
    newX = headX + cell;
    newY = headY;
  } else if (direction == "left") {
    newX = headX - cell;
    newY = headY;
  } else if (direction == "down") {
    newX = headX;
    newY = headY + cell;
  } else {
    newX = headX;
    newY = headY - cell;
  }
  snakeCell.push([newX, newY]);
  snakeCell.shift();
  // canvas.width = canvas.width
}

setInterval(() => {
  draw();
  update();
}, 200);
