const container = document.querySelector("#container");
function transformSquare(e){
    e.target.classList.add('transformedSquare');


}
function resetBoard(){
    squares.forEach(sq => sq.classList.remove('transformedSquare'))
}
let rows = 48;
let columns = 48;
function generateBoard(rows=16, columns=16){
    rows = prompt("Set rows:");
    columns = prompt("Set columns:");
    for (let i = 0; i < (rows * columns); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${(600/rows)}px`;
        square.style.height = `${(600/columns)}px`;
        container.appendChild(square);
        squares = document.querySelectorAll('.square');
        squares.forEach(sq => sq.addEventListener('mouseenter', transformSquare))

    }    

}
let squares = document.querySelectorAll('.square');
squares.forEach(sq => sq.addEventListener('mouseenter', transformSquare))

const setupBtn = document.querySelector('#setup');
setupBtn.addEventListener('click', () => generateBoard())

const button = document.querySelector('#reset');
button.addEventListener('click', () => resetBoard());
