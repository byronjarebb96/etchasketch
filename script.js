const container = document.querySelector("#container");
function transformSquare(e){
    e.target.classList.add('transformedSquare');

}

let rows = 48;
let columns = 48;

for (let i = 0; i < (rows * columns); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${(600/rows)}px`;
    square.style.height = `${(600/columns)}px`;
    container.appendChild(square);
}


const squares = document.querySelectorAll('.square');
squares.forEach(sq => sq.addEventListener('mouseenter', transformSquare))
