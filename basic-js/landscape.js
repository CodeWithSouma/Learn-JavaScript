// Landscape or Portrait

function isLandscape(height,width) {
    return height > width;
}

console.log(isLandscape(20,150) ? 'Landscape' : 'Portrait');