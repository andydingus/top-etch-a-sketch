// Ready to script!

// Style variables
// let gridBlockWidth = 16; // **** THIS NEEDS TO BE SMALLER AS THE GRID SIZE INCREASES, LARGER AS THE GRID SIZE DECREASES
// let gridBlockHeight = gridBlockWidth; // Should be the same as the width
let gridSize = 16;
// let containerWidth = `${(gridBlockWidth + gridBorderWidth + gridBorderHeight) * gridSize}px`;
const containerWidth = 400; // Should always remain the same, the grid will adjust
const containerHeight = containerWidth;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Element constants
const btnChangeSize = document.getElementById('btnChangeSize');
const container = document.getElementById('container');

// Credit: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function selectGridBlock() {
//     this.style.backgroundColor = 'gray';
// }

// function unselectGridBlock() {
//     this.style.backgroundColor = 'initial';
// }

function colorGridBlock(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'red';
}

function createGrid(){
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
            div.style.width = `${containerWidth / gridSize}px`;
            div.style.height = `${containerHeight / gridSize}px`;

            // Allows for click-hold coloring
            div.addEventListener('mouseover', colorGridBlock);
            div.addEventListener('mousedown', colorGridBlock);
            // Once grid block is filled, let it remain filled
            // div.addEventListener('click', () => {
            //     div.style.backgroundColor = 'red';
            //     div.removeEventListener('mousemove', selectGridBlock);
            //     div.removeEventListener('mouseout', unselectGridBlock);               
            // });     
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
            div.style.width = `${containerWidth / gridSize}px`;
            div.style.height = `${containerHeight / gridSize}px`;

            // Allows for click-hold coloring
            div.addEventListener('mouseover', colorGridBlock);
            div.addEventListener('mousedown', colorGridBlock);
            // div.addEventListener('click', () => {
            //     div.style.backgroundColor = 'red';
            //     div.removeEventListener('mousemove', selectGridBlock);
            //     div.removeEventListener('mouseout', unselectGridBlock);               
            // });
            container.appendChild(div); 
        }
    }
}

createGrid();

// Listens to the user click and runs the function
btnChangeSize.addEventListener('click', () => {
    gridSize = Number(prompt('Enter a new grid size:'));
    if (gridSize >= 100) {
        alert('Only grids below 100 allowed. Please enter a lower number.');
    } else {
        createGrid();
    } 
});

// Testing for element existence
// let eleExist = !!document.getElementById('exists');
// console.log(eleExist);


// const div = document.createElement('div');

// document.body.onload()