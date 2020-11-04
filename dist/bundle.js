/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
console.log("Hello from webpack")

const scoreDisplay = document.getElementById('score')
const highscoreDisplay = document.getElementById('high-score');
let basketball = document.getElementById("basketball");
let score = 0;
let highScore = 0;

basketball.style.animation = "none";
document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById("start-button");
    let resetButton = document.getElementById("reset-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
    basketball.style.animation = "slide 1s infinite linear"
    startGame();
   })

   resetButton.addEventListener("click", () => { 
       resetGame();
       basketball.style.animation = "slide 1s infinite linear"
       document.getElementById("modal").classList.add("hidden");
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
    
 
   
    
    basketball.addEventListener('animationiteration', () => {
        let random = Math.floor(Math.random() * 8);
        left = random * 100;
        basketball.style.left = left + "px";
         score++;
        scoreDisplay.innerHTML = score;
        if (score > highScore) highScore = score;
        highscoreDisplay.innerHTML = highScore;
    });
    
    setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590){
            basketball.style.animation = "none";
            document.getElementById("modal").classList.remove("hidden")
        }
    },1);
}

function resetGame(){
    document.addEventListener("keydown", event => {
      if(event.key==="ArrowLeft"){moveLeft();}
      if(event.key==="ArrowRight"){moveRight();}
    });
    
    let basket = document.getElementById("basket");
    function moveLeft(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        // left -= 100;
        if(left>=0){
            basket.style.left = left + "px";
        }
    }
    
    function moveRight(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        // left += 100;
        if(left<800){
            basket.style.left = left + "px";
        }
    }
    
    let basketball = document.getElementById("basketball");
    let score = 0;
    
    basketball.addEventListener('animationiteration', () => {
        let random = Math.floor(Math.random() * 8);
        left = random * 100;
        basketball.style.left = left + "px";
         score++;
        scoreDisplay.innerHTML = score;
        if (score > highScore) highScore = score;
        highscoreDisplay.innerHTML = highScore;
    });
    
    setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590){
            document.getElementById("modal").classList.remove("hidden");
            // score=0;
            basketball.style.animation = "none";
        }
    },1);
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map