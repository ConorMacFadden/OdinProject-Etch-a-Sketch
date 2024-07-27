let tileSize = 50;
let gridCount = 50;

tileSize = 100/gridCount;

const grid = document.querySelector(".grid");



for (let i = 0; i < gridCount**2; i++) {
    let newTile = document.createElement("div");
    newTile.classList.add("tile");
    newTile.style.flex = `${tileSize}%`

    grid.appendChild(newTile);
}