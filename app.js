const container = document.getElementById("container");

function makeRows(rows, cols) { 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

function changeColor() {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add('changeColor');
            console.log(div);
        })
    });
}

makeRows(16, 16);
changeColor();