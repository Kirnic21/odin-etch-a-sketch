const container = document.getElementById("container");

function makeRows(rows, cols) {
  //setting 
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(12, 12);
