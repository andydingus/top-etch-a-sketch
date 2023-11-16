// Ready to script!

// Style variables
let gridBlockWidth = '32px';
let gridBlockHeight = gridBlockWidth; // Should be the same as the width
let gridBorderWidth = '2px';
let gridSize = 16;
let containerWidth = gridBlockWidth * gridSize;

// Element constants
const btnChangeSize = document.getElementById('btnChangeSize');
const container = document.getElementById('container');

function createGrid(){
    // For this function:
    // 1) Check if the grid exists already and if it does, delete all the divs before creating the grid
    // 2) Otherwise, create the grid if there's none
    if (!div) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.className = 'grid';
        
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'red';
            });
        
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = 'initial';
            });
            document.body.appendChild(div);
            container.appendChild(div);   
        }
    } else {
        div.remove();
    }  
}

createGrid();


// Listens to the user click and runs the function
btnChangeSize.addEventListener('click', () => {
    gridSize = Number(prompt('Enter a new grid size:'));
    createGrid();
});

// Testing for element existence
let eleExist = !!document.getElementById('exists');
console.log(eleExist);


// const div = document.createElement('div');

// document.body.onload()