let tileSize = 50;
let gridCount = 16;
let gridMax = 100;
let gridMin = 1;
let drawEnable = false;
let activeColor = '#000000';

const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector(".gridSizeInput");
const gridSizeButton = document.querySelector(".gridSizeButton");
const messageParagraph = document.querySelector(".message");
const gridContainer = document.querySelector(".gridContainer");
const body = document.querySelector("body");

gridSizeInput.value = gridCount;

gridContainer.addEventListener("mousedown", () => { drawEnable = true; console.log(drawEnable);});

body.addEventListener("mouseup", () => { drawEnable = false; console.log(drawEnable);});

// This should parse the input and enable the update button if 
// it's in the valid range and different from the current value.
gridSizeInput.addEventListener("input", (e) => {
    let input = parseInt(gridSizeInput.value);
    console.log(typeof input);
    if (typeof input === 'number' && input >= gridMin && input <= gridMax) {
        gridCount = input;
        messageParagraph.textContent = "";
        gridSizeButton.disabled = false;
    } else {
        messageParagraph.textContent = `Value must be between ${gridMin} and  ${gridMax}.`;
        gridSizeButton.disabled = true;
    }

    console.log(gridCount);
}); 

gridSizeButton.addEventListener("click", () => {
    redrawGrid();
})


redrawGrid();

function redrawGrid() {
    // clear the current grid
    grid.innerHTML = "";

    // draw the new grid
    tileSize = 100/gridCount;
    for (let i = 0; i < gridCount**2; i++) {
        let newTile = document.createElement("div");
        newTile.classList.add("tile");
        newTile.style.flexBasis = `${tileSize}%`
        newTile.addEventListener("mouseover", (e) => changeTileColor(e.target));
        grid.appendChild(newTile);
    }
}

function changeTileColor(tile) {
    if (drawEnable) {
        tile.style.backgroundColor = activeColor;
    }
}