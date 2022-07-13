const gridDom = document.getElementById('grid');
let myArray = [];
for (let i = 0; i < 100; i++) {
    const divSquare = document.createElement('div');
    gridDom.append(divSquare);
    divSquare.classList.add('square');
    console.log(i + 1);
    divSquare.append(i + 1);
}





function generaNumeri (min, max) {
    return (Math.round(Math.random(max - min) * 100));
}
/*funxtion creaQuadrati(sqaure_number) {
    for(i < sqaurenumber)
}


creaQuadrati(100) */