


  //define grid height/width and pixelcanvas table
const table = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker");
let gridHeight, gridWidth;

//draw the grid when Submit is clicked or Enter/Return key is pressed
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});


function makeGrid() {

  //clear the existing table rows
  table.innerHTML = '';

  //get the user input values
  gridHeight = document.getElementById("inputHeight").value;
  gridWidth = document.getElementById("inputWidth").value;

  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      //to change background color when user clicks
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });

      //to remove the existing color when user double clicks
      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}
// this code was developed with the help of udacity and overflow + some GIthub users.
