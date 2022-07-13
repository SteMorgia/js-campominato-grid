const gridDom = document.getElementById('grid');
for (let i = 0; i < 100; i++) {
    const divSquare = document.createElement('div');
    gridDom.append(divSquare);
    divSquare.classList.add('square');
}





function generaNumeri ()