const gridContainer = document.getElementById('grid-container');

const cellsGenerator = document.getElementById('cells-btn-generator');


cellsGenerator.addEventListener('click', function() {
    gridContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        gridContainer.append(cell);

        const cellNumber = document.createElement('div');
        cellNumber.innerHTML = i + 1;
        cellNumber.className = 'cell-number';

        cell.append(cellNumber);

        cell.addEventListener('click', function () {
            this.classList.toggle('new-bg-color');

            console.log(cellNumber.innerHTML);
        })
    }
})
    


