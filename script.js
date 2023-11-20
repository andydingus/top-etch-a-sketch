// CONSTANTS
const CONTAINER_WIDTH = 400; // Should always remain the same, the grid will adjust
const CONTAINER_HEIGHT = CONTAINER_WIDTH;

//// COLORS
const RED = "rgb(255,0,0)";
const BLUE = "rgb(0,0,255)";
const GREEN = "rgb(0,255,0)";
const YELLOW = "rgb(255,255,0)";
const ORANGE = "rgb(255,165,0)";
const INDIGO = "rgb(75,0,130)";
const PURPLE = "rgb(127,0,255)";
const COLORS = [RED, BLUE, GREEN, YELLOW, ORANGE, INDIGO, PURPLE];

//// MODES
let DEFAULT_MODE = true;
let RAINBOW_MODE = false;


// Element variables
const btnChangeSize = document.getElementById('btnChangeSize');
const btnRainbowMode = document.getElementById('btnRainbowMode');
const container = document.getElementById('container');
const gridInfo = document.getElementById('gridInfo');

// Variables
let gridSize = 16;
let mouseDown = false;
let selectedColor = RED;
let colorMode = DEFAULT_MODE;


// Needed for click-hold coloring
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Credit: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorGridBlock(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (colorMode === DEFAULT_MODE) {
        e.target.style.backgroundColor = selectedColor;
    } else if (colorMode === RAINBOW_MODE) {
        // e.target.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
}

function createGrid() {
    // Ensures that the grid-blocks won't change the grid's size
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // For this function:
    // 1) Check if the grid exists already and if it does, delete all the divs before creating the grid
    // 2) Otherwise, create the grid if there's none
    if (container.hasChildNodes() === false) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid-block';

            // Styles for the grid blocks
            div.style.width = `${parseFloat(CONTAINER_WIDTH / gridSize)}px`;
            div.style.height = `${parseFloat(CONTAINER_HEIGHT / gridSize)}px`;

            // Allows for click-hold coloring
            div.addEventListener('mouseover', colorGridBlock);
            div.addEventListener('mousedown', colorGridBlock);

            // Finally, add it the body and container as children
            container.appendChild(div);
        }
    } else {
        // Same as above, just erases the previous grid before creating one
        removeAllChildNodes(container);
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid';

            // Styles for the grid blocks
            div.style.width = `${CONTAINER_WIDTH / gridSize}px`;
            div.style.height = `${CONTAINER_HEIGHT / gridSize}px`;

            // Allows for click-hold coloring
            div.addEventListener('mouseover', colorGridBlock);
            div.addEventListener('mousedown', colorGridBlock);

            container.appendChild(div);
        }
    }
}

createGrid();
// Display current size to user
gridInfo.textContent = `Current size: ${gridSize}x${gridSize}`;

// Listens to the user click and runs the function
btnChangeSize.addEventListener('click', () => {
    gridSize = Number(prompt('Enter a new grid size:'));
    if (gridSize >= 100 || isNaN(gridSize)) {
        alert('Please enter a valid number below 100.');
    } else {
        createGrid();
        gridInfo.textContent = `Current size: ${gridSize}x${gridSize}`;
    }
});

// Changes to rainbow mode
btnRainbowMode.addEventListener('click', () => {
    RAINBOW_MODE = true;
    DEFAULT_MODE = false;
    colorMode = RAINBOW_MODE;
});


// Testing for element existence
// let eleExist = !!document.getElementById('exists');
// console.log(eleExist);


// const div = document.createElement('div');

// document.body.onload()