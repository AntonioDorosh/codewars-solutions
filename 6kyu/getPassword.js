const grid = [
    ["x", "l", "m"],
    ["o", "f", "c"],
    ["k", "i", "t"]
];

const directions = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];

function getPassword(grid, directions) {
    let password = '';
    const rowLength = grid[0].length;
    const gridString = grid.join(',').split(',').join('');
    let currentPosition = gridString.indexOf('x');

    directions.map(dir => {
        const lastChar = dir.substring(-1);
        if(dir.includes('right')) {
            currentPosition += 1;
        } else if(dir.includes('left')) {
            currentPosition -= 1;
        } else if(dir.includes('down')) {
            currentPosition += rowLength;
        } else {
            currentPosition -= rowLength;
        }

        if(lastChar === 'T') {
            password += gridString[currentPosition];
        }
    })

    return password;
}


let pass = getPassword(grid, directions);
console.log(pass)