let tileSize = 50;
let gridCount = 100;

tileSize = 100/gridCount;

const grid = document.querySelector(".grid");

grid.style.setProperty('--gridCount', gridCount);

for (let i = 0; i < gridCount**2; i++) {
    let newTile = document.createElement("div");
    newTile.classList.add("tile");
    newTile.style.flexBasis = `${tileSize}%`

    grid.appendChild(newTile);
}