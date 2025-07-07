let currentTool = "pen";
let selectedColor = "black";

const penBtn = document.getElementById("penBtn");
const eraserBtn = document.getElementById("eraserBtn");

const gridContainer = document.getElementById("myGrid");

penBtn.addEventListener("click", () => {
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});

eraserBtn.addEventListener("click", () => {
    currentTool = "eraser";
    eraserBtn.classList.add("selected");
    penBtn.classList.remove("selected");
});


pink.addEventListener("click", () => {
    selectedColor = "pink";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
green.addEventListener("click", () => {
    selectedColor = "green";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
blue.addEventListener("click", () => {
    selectedColor = "blue";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
yellow.addEventListener("click", () => {
    selectedColor = "yellow";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
purple.addEventListener("click", () => {
    selectedColor = "purple";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
red.addEventListener("click", () => {
    selectedColor = "red";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
orange.addEventListener("click", () => {
    selectedColor = "orange";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
grey.addEventListener("click", () => {
    selectedColor = "grey";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
white.addEventListener("click", () => {
    selectedColor = "white";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});
black.addEventListener("click", () => {
    selectedColor = "black";
    currentTool = "pen";
    penBtn.classList.add("selected");
    eraserBtn.classList.remove("selected");
});


function paint(gridItem) {
    if (currentTool === "pen") {
        gridItem.style.backgroundColor = selectedColor;
    } else if (currentTool === "eraser") {
        gridItem.style.backgroundColor = "#3E5F70";
    }
};

const rows = 25;
const columns = 70;

//maak een grid
for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    gridItem.addEventListener("click", function () {
        paint(gridItem);
    });

   gridItem.addEventListener("mouseover", function () {
    paint(gridItem);
});


    gridContainer.appendChild(gridItem);
};


//randje om geselecteerde kleur
const colorButtons = document.querySelectorAll("#colors button");

colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedColor = btn.style.backgroundColor;

        colorButtons.forEach((b) => b.classList.remove("selected"));

        btn.classList.add("selected");
    });
});

