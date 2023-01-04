let gridSize = 64; // hard-coded grid size, to be replace later;
 // defines the column dimensions
let mainContainer = document.querySelector("#container")

for (let i=0; i<gridSize; i++){
    let newContainer = document.createElement('div');
    newContainer.classList.add('gridBoxes');
    mainContainer.appendChild(newContainer);

}