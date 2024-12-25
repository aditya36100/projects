const decreaseBtn = document.getElementById("decreasebtn");
const resetBtn = document.getElementById("resetbtn");
const increaseBtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countlabel");
let count=0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}