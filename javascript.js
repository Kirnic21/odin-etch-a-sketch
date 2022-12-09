const container = document.getElementById("container");
const size = document.getElementById("botao")
size.addEventListener('onclick',function(){
  gridSize = prompt("what is the size of the grid?")

  }
})

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
makeRows(100,100)
document.querySelector("div").addEventListener('mouseover', function (e) {
  e.target.style.background = 'blue';
});