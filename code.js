const container = document.querySelector(".containerY");

let grid_size = 16;

const createGrid = (size) => {
    // container.replaceChild();
    for (let i = 0; i < size; i++) {
        let contX = document.createElement("div");
        contX.classList.add("containerX")
        container.append(contX)
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            contX.append(cell);
        }
    }
}
createGrid(grid_size);
const cells = document.querySelectorAll(".cell");

const setTrail = (cell) => {
    cell.style.backgroundColor = "purple"
}

cells.forEach(cell => {
    cell.addEventListener("mouseout", () => {
        setTrail(cell);
    })
})
