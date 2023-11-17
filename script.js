// Ready to script!

// Style variables
const gridBlockWidth = 16;
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

function selectGridBlock() {
    this.style.backgroundColor = 'gray';
}

function unselectGridBlock() {
    this.style.backgroundColor = 'initial';
}

function createGrid(){
    // For this function:
    // 1) Check if the grid exists already and if it does, delete all the divs before creating the grid
    // 2) Otherwise, create the grid if there's none
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

            // New approach: 'select' the grid block if the cursor is hovering over it
            div.addEventListener('mousemove', selectGridBlock);

            // ...and then 'unselect' it once the cursor is out of the block
            div.addEventListener('mouseout', unselectGridBlock);

            // Once grid block is filled, let it remain filled
            div.addEventListener('click', () => {
                div.style.backgroundColor = 'red';
                div.removeEventListener('mousemove', selectGridBlock);
                div.removeEventListener('mouseout', unselectGridBlock);               
            });
            
            // Finally, add it the body and container as children
            document.body.appendChild(div);
            container.appendChild(div);  
        }
    } else {
        // Same as above, just erases the previous grid before creating one
        removeAllChildNodes(container);
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid';

            div.style.width = `${gridBlockWidth}px`;
            div.style.height = `${gridBlockHeight}px`;
            div.style.borderWidth = `${gridBorderWidth}px`;
            div.style.borderHeight = `${gridBorderHeight}px`;
            container.style.width = containerWidth;
        
            div.addEventListener('mousemove', selectGridBlock);
            div.addEventListener('mouseout', unselectGridBlock);
            div.addEventListener('click', () => {
                div.style.backgroundColor = 'red';
                div.removeEventListener('mousemove', selectGridBlock);
                div.removeEventListener('mouseout', unselectGridBlock);               
            });
            document.body.appendChild(div);
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
        containerWidth = `${(gridBlockWidth + gridBorderWidth + gridBorderHeight) * gridSize}px`;
        createGrid();
    } 
});

// Testing for element existence
// let eleExist = !!document.getElementById('exists');
// console.log(eleExist);


// const div = document.createElement('div');

// document.body.onload()