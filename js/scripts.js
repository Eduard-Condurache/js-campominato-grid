const gridContainer = document.getElementById('grid-container');

const cellsGenerator = document.getElementById('cells-btn-generator');

const difficultySelect = document.getElementById('difficulty');


cellsGenerator.addEventListener('click', function() {
    gridContainer.innerHTML = '';

    const difText = difficultySelect.options[difficultySelect.selectedIndex].text;
    let cellNumber;

    gridContainer.classList.remove('easy-dif', 'normal-dif', 'hard-dif');

    if (difText === 'Easy') {
        cellNumber = 49;
        gridContainer.classList.add('easy-dif');
    }

    else if (difText === 'Normal') {
        cellNumber = 81;
        gridContainer.classList.add('normal-dif');
    }

    else if (difText === 'Hard') {
        cellNumber = 100;
        gridContainer.classList.add('hard-dif');
    }
    
    for (let i = 0; i < cellNumber; i++) {
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

    


