/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
console.log("Hello from webpack")

basketball.style.animation = "none";
document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById("start-button");
    let resetButton = document.getElementById("reset-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
    // setInterval(counter,1000);
    basketball.style.animation = "slide 2s infinite linear"
    startGame();
   })

   resetButton.addEventListener("click", () => { 
     document.getElementById("game-over").classList.add("hidden");
  })
})


function startGame(){
    document.addEventListener("keydown", event => {
      if(event.key==="ArrowLeft"){moveLeft();}
      if(event.key==="ArrowRight"){moveRight();}
    });
    
    let basket = document.getElementById("basket");
    function moveLeft(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        left -= 100;
        if(left>=0){
            basket.style.left = left + "px";
        }
    }
    
    function moveRight(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        left += 100;
        if(left<800){
            basket.style.left = left + "px";
        }
    }
    
    let basketball = document.getElementById("basketball");
    let counter = 0;
    basketball.addEventListener('animationiteration', () => {
        let random = Math.floor(Math.random() * 8);
        left = random * 100;
        basketball.style.left = left + "px";
        counter++;
    });
    
    setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590){
            // alert("Game over. Score: " + counter);
            basketball.style.animation = "none";
        }
    },1);

}

/******/ })()
;
//# sourceMappingURL=bundle.js.map