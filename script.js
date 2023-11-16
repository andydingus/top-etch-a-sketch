// Ready to script!
const container = document.getElementById('container');
for (let i = 0; i < 32; i ++) {
    const div = document.createElement('div');
    div.className = 'grid';
    div.textContent = 'pluh';
    document.body.appendChild(div);
    container.appendChild(div);
}

// const div = document.createElement('div');

// document.body.onload()