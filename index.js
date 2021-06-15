/*carInfo = {make: "Toyota", year: 2007, model: "Camry"}

for (key in carInfo){
  console.log(key);
}
//console.log("This is the console");
*/

var restart = document.querySelector("#b");

var squares = document.querySelectorAll('td');

restart.addEventListener('click',clearBoard);

var cellOne = document.querySelector(#one)

function changeMarker(){
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeMarker)
  }
