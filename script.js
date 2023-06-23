console.log('Hello World');
const container = document.querySelector("#container");


let rows = 16;
let columns = 16;

for (let i = 0; i < (rows * columns); i++){
    console.log(i);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${(600/columns)}px`;
    square.style.height = `${(600/columns)}px`;
    container.appendChild(square);
}

function transformSquare(e){
    e.target.classList.add('transformedSquare')
}
const squares = document.querySelectorAll('.square');
squares.forEach(sq => sq.addEventListener('mouseenter', transformSquare))
