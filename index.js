document.querySelector(".wall").addEventListener("click", wallHit);
bricks = document.querySelectorAll(".brick");
Array.from(bricks).map((brick) => {
  brick.addEventListener("click", fall);
});

for (i = 0; i < bricks.length; i++) {
  bricks[i].addEventListener("click", fall);
}
function fall() {
  // console.log(this);
}
function wallHit(event) {
  radius = 100;
  left = event.x - radius;
  right = event.x + radius;
  topp = event.y - radius;
  bottom = event.y + radius;
    console.log(event);
  for (i = 0; i < bricks.length; i++) {
    // console.log(bricks[i]);
    if ((bricks[i].offsetLeft > left) &  (bricks[i].offsetLeft < right)) {
    if ((bricks[i].offsetParent.offsetTop > topp) & (bricks[i].offsetParent.offsetTop < bottom))
     {
      bricks[i].style.backgroundImage = "none";
      bricks[i].style.boxShadow = "0px 0px 1.5px 1.5px transparent";
      bricks[i].style.borderColor = "transparent";
      console.log("Yes found");
    }
}
     else {
      console.log("Not Found");
    }
  }
}
