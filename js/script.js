const container = document.querySelector(".container");

function makeGrid () {

    for (i = 0; i < 16; i++){
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        container.appendChild(gridRow);
        
        for (j = 0; j < 16; j++){
            const gridSpace = document.createElement("div");
            gridSpace.setAttribute("class", "gridSpace")
            gridRow.appendChild(gridSpace);
        }
    }
}

makeGrid();