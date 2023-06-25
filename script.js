const body = document.querySelector('body')
const container = document.querySelector("#container");
function transformSquare(e){
    e.target.classList.add('transformedSquare');

}
function resetBoard(){
    squares.forEach(sq => sq.classList.remove('transformedSquare'))
}
let rows = 48;
let columns = 48;
function setupBoard(){
    rows = prompt("Set rows:");
    columns = prompt("Set columns:");
    if(!squares==0){
        squares.forEach(sq => sq.remove())

    }
    generateBoard(rows, columns)
}
function generateBoard(rows=16, columns=16){
 
    for (let i = 0; i < (rows * columns); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${(600/rows)}px`;
        square.style.height = `${(600/columns)}px`;
        //square.textContent = `${i+1}`;
        container.appendChild(square);
    } 
    squares = document.querySelectorAll('.square');
    squares.forEach(sq => sq.addEventListener('mouseover', transformSquare))


}
let squares = document.querySelectorAll('.square');

const setupBtn = document.querySelector('#setup');
setupBtn.addEventListener('click', () => setupBoard());

const button = document.querySelector('#reset');
button.addEventListener('click', () => resetBoard());

generateBoard(16,16);