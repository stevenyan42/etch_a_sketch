const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");
const clearButton = document.querySelector(".clearButton");
let isDraw = false;

function makeGrid (size) {

    for (i = 0; i < size; i++){
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        container.appendChild(gridRow);
        
        for (j = 0; j < size; j++){
            const gridSpace = document.createElement("div");
            gridSpace.setAttribute("class", "gridSpace");
            gridRow.appendChild(gridSpace);
        }
    }
}

function gridDraw(event){
    if (isDraw) {
        event.target.classList.add("black");
    }
}

function drawSelect(event) {
    event.preventDefault();

    switch (event.type) {

        case "mousedown":
            isDraw = true;
            gridDraw(event);
            break;
        
        case "mouseup":
            isDraw = false;
            break;

    }
}

function changeSize() {
    let size = parseInt(prompt("Enter New Grid Size:")) 

    if ((size <= 100) && (size > 0)) {
        let deleteGrid = document.querySelectorAll(".gridRow");
        deleteGrid.forEach(gridRow => {
            container.removeChild(gridRow);
        })
        makeGrid(size);
    } else {
        alert("Invalid! Grid must be between 0 and 100")
    } 
}

function clearGrid () {
    let gridSpaces = document.querySelectorAll(".gridSpace");
        gridSpaces.forEach(gridspace => {
            gridspace.classList.remove("black");
        })
}

container.addEventListener("mousedown", drawSelect);
container.addEventListener("mouseup", drawSelect);
container.addEventListener("mousemove", gridDraw);
sizeButton.addEventListener("click", changeSize);
clearButton.addEventListener("click", clearGrid);



makeGrid(16);