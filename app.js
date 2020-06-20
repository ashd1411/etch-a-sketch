const container = document.querySelector('.container');
const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');

/*create a function makeGrid(size): size is number of squares per side
    have a for loop that create div belongs to class "grid-item"
                        append the grid -item div to the container div
*/

function makeGrid(size) {

    if (isNaN(size) || size < 0) 
    {
        size = 16;
    }

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

    let squares = size*size;

    for (let i = 0; i < squares; i++) 
    {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }

}

function clearGrid() {

    const divs = document.querySelectorAll('.gridItem');
    divs.forEach(div => {
        container.removeChild(div);         
    });

}

function resetSize() {
    let size = prompt("Enter you new sketch size: ");

    //remove old sketch
    clearGrid();

    //make new sketch
    makeGrid(size);

    changeColor();
}

function changeColor(){
    const divs = document.querySelectorAll('.gridItem');
    divs.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add('changeColor');
            console.log(div);
        })
    });

    const title = document.querySelector('.text');
    title.classList.remove('rgb');
}

function resetRGB(){
    let size = prompt("Enter you new sketch size: ");

    //remove old sketch
    clearGrid();

    //make new sketch
    makeGrid(size);

    RGB();
}

function RGB(){
    const divs = document.querySelectorAll('.gridItem');
    divs.forEach(div => {
        div.addEventListener("mouseenter", (e) => {
            let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = color;
        })
    });

    const title = document.querySelector('.text');
    title.classList.add('rgb');

}

//========================================
makeGrid();
changeColor();
btn_1.addEventListener("click", resetSize);
btn_2.addEventListener("click", resetRGB);