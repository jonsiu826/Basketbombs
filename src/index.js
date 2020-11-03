console.log("Hello from webpack")


document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
   })


})

document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
});

let basket = document.getElementById("basket");
function moveLeft(){
    let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
    left -= 50;
    if(left>=0){
        basket.style.left = left + "px";
    }
}

function moveRight(){
    let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
    left += 50;
    if(left<800){
        basket.style.left = left + "px";
    }
}