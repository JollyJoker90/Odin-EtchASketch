const frame = document.querySelector(".frame");
const resetBtn = document.querySelector("#button");
const rgb = [2,1,3];
let grid_size = 16;

const createGrid = (size) => {
    const container = document.createElement("div");
    container.classList.add("container");
    frame.append(container);
    for (let i = 0; i < size; i++) {
        const gridCol = document.createElement("div");
        gridCol.classList.add("gridCol");
        container.append(gridCol);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${400 / size}px`;
            cell.style.height = `${400 / size}px`;
            gridCol.append(cell);
            cell.addEventListener("mouseout", () => {
                setTrail(cell);
            })
        }
    }
}

createGrid(grid_size);
const cells = document.querySelectorAll(".cell");

const setTrail = (cell) => {
    cell.style.backgroundColor = `"rgba${rbgColor.join(", ")}"`
}


resetBtn.addEventListener("click", () => {
    const newGridSize = prompt("test");
    if (newGridSize < 100) {
        frame.removeChild(frame.lastChild)
        createGrid(newGridSize);
    }
})