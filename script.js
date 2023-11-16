// Ready to script!

// Style variables
let gridBlockWidth = '32px';
let gridBlockHeight = gridBlockWidth; // Should be the same as the width
let gridBorderWidth = '2px';
let gridSize = 16;
let containerWidth = gridBlockWidth * gridSize;
const container = document.getElementById('container');
for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.className = 'grid';

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    })

    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = 'initial';
    })
    document.body.appendChild(div);
    container.appendChild(div);   
}



// const div = document.createElement('div');

// document.body.onload()