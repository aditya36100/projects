const mybutton = document.getElementById("btn");
const mylabel = document.getElementById("clabel");
const min = 1;
const max = 6;
let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max)+min;
    mylabel.textContent = randomnum;
}