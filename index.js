
bricks = document.querySelectorAll('.brick');
Array.from(bricks).map((brick)=>{brick.addEventListener('click',fall)})
for(i=0;i<bricks.length;i++){
    bricks[i].addEventListener('click',fall);
}
function fall() {
    console.log(this);
    this.style.display="none";
}