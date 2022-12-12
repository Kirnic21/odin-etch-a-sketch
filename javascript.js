const container = document.getElementById("container");
const btn = document.querySelector('#botao');
btn.addEventListener('click',gridSize)
  function gridSize(){

    let size = prompt("what is the size(max 100)")
    //making sure the user inputs a valuid number
    if (size>=100 || size <0)
    {
      alert('fuck you, insert a valid value')
    }
    else
    //call function that create the grid
    {
    makeRows(size,size)
    }
  }
  ;
function makeRows(rows, cols) {
  //setting 
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
  }
}
document.querySelector("div").addEventListener('mouseover', function (e) {
  e.target.style.background = 'blue';
});