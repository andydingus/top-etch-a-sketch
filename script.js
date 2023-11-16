// Ready to script!

// Style variables
const gridBlockWidth = 32;
let gridBlockHeight = gridBlockWidth; // Should be the same as the width
const gridBorderWidth = 2;
const gridBorderHeight = gridBorderWidth;
let gridSize = 16;
let containerWidth = `${(gridBlockWidth + gridBorderWidth + gridBorderHeight) * gridSize}px`;

// Element constants
const btnChangeSize = document.getElementById('btnChangeSize');
const container = document.getElementById('container');

// Credit: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createGrid(){
    // This function:
    // Creates the grid if it doesn't exist
    if (container.hasChildNodes() === false) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid';

            // Styles for the grid blocks
            div.style.width = `${gridBlockWidth}px`;
            div.style.height = `${gridBlockHeight}px`;
            div.style.borderWidth = `${gridBorderWidth}px`;
            div.style.borderHeight = `${gridBorderHeight}px`;

            // Makes the grid size the right size depending on user input
            container.style.width = containerWidth;
            container.style.height = 'auto';
            
            // The grid blocks are children of the container
            document.body.appendChild(div);
            container.appendChild(div);  

            // Change the color of the grid block when hovering
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'red';
            });
            
            // Return grid block color to original when cursor is not hovering
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = 'initial';
            });
        }
    // If a grid exists already, delete all the divs before creating another one
    } else {
        removeAllChildNodes(container);
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid';

            // Styles for the grid blocks
            div.style.width = `${gridBlockWidth}px`;
            div.style.height = `${gridBlockHeight}px`;
            div.style.borderWidth = `${gridBorderWidth}px`;
            div.style.borderHeight = `${gridBorderHeight}px`;

            // Makes the grid size the right size depending on user input
            container.style.width = containerWidth;
        
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'red';
            });
        
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = 'initial';
            });
            document.body.appendChild(div);
            container.appendChild(div);  
        }
    }
}

// Initializes the default 16x16 grid
createGrid();


// Listens to the user click and runs the function
btnChangeSize.addEventListener('click', () => {
    gridSize = Number(prompt('Enter a new grid size:'));
    if (gridSize >= 100) {
        alert('You may not go beyond 100, please enter a smaller number.');
    } else {
        containerWidth = `${(gridBlockWidth + gridBorderWidth + gridBorderHeight) * gridSize}px`;
        createGrid();
    }
});

// Testing for element existence
// let eleExist = !!document.getElementById('exists');
// console.log(eleExist);


// const div = document.createElement('div');

// document.body.onload()