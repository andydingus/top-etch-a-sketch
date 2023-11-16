// Ready to script!
const container = document.getElementById('container');
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'grid';
    document.body.appendChild(div);
    container.appendChild(div);
}

// const div = document.createElement('div');

// document.body.onload()