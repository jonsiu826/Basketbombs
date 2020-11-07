/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
console.log("Hello from webpack")

let scoreDisplay = document.getElementById('score')
const highscoreDisplay = document.getElementById('high-score');
let basketball = document.getElementById("basketball");
let basket = document.getElementById("basket");
let bomb = document.getElementById("bomb");
let score = 0;
let highScore = 0;



basketball.style.animation = "none";
bomb.style.animation = "none";

document.addEventListener("DOMContentLoaded", () => {
    // let startButton = document.getElementById("start-button");
    // let resetButton = document.getElementById("reset-button");
    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");
    let easy1 = document.getElementById("easy");
    let medium1 = document.getElementById("medium");
    let hard1 = document.getElementById("hard");

//   startButton.addEventListener("click", () => { 
//     document.getElementById("introduction").classList.add("hidden");
//     basketball.style.animation = "basketballslide 2s infinite linear"
//     bomb.style.animation = "slide 1.5s infinite linear"
//     startGame();
//    })

//    resetButton.addEventListener("click", () => { 
//        resetGame();
//        bomb.style.animation = "slide 1.5s infinite linear"
//        basketball.style.animation = "basketballslide 2s infinite linear"
//        document.getElementById("modal").classList.add("hidden");
//   })
})
        easy.addEventListener("click", () => {
            document.getElementById("introduction").classList.add("hidden");
            startGame();
            // bomb.style.animation = "slide 2s infinite linear"
            basketball.style.animation = "basketballslide 2s infinite linear"
            setInterval(firstBombEasy, 3000)
    
        })
    
        medium.addEventListener("click", () => {
            document.getElementById("introduction").classList.add("hidden");
            startGame();
            setInterval(firstBombMedium, 3000)
            basketball.style.animation = "basketballslide 1.5s infinite linear"
        })
    
        hard.addEventListener("click", () => {
            document.getElementById("introduction").classList.add("hidden");
            startGame();
            setInterval(firstBombHard, 3000)
            basketball.style.animation = "basketballslide 1s infinite linear"
        })
    
        easy1.addEventListener("click", () => { 
            resetGame();
            bomb.style.animation = "slide 2s infinite linear";
            basketball.style.animation = "basketballslide 2s infinite linear"
            document.getElementById("modal").classList.add("hidden");
        })
    
        medium1.addEventListener("click", () => { 
            resetGame();
            bomb.style.animation = "slide 1.5s infinite linear";
            basketball.style.animation = "basketballslide 1.5s infinite linear"
            document.getElementById("modal").classList.add("hidden");
        })
    
        hard1.addEventListener("click", () => { 
            resetGame();
            bomb.style.animation = "slide 1s infinite linear";
            basketball.style.animation = "basketballslide 1s infinite linear"
            document.getElementById("modal").classList.add("hidden");
        })


function startGame(){
    
    // setTimeout(1000)
    document.addEventListener("keydown", event => {
      if(event.key==="ArrowLeft"){moveLeft();}
      if(event.key==="ArrowRight"){moveRight();}
    });
    

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
     let randomBasketball;
    basketball.addEventListener('animationiteration', () => {
        randomBasketball = Math.floor(Math.random() * 8);
        left = randomBasketball * 100;
        basketball.style.left = left + "px";
         score++;
        scoreDisplay.innerHTML = score
        if (score > highScore) highScore = score;
        highscoreDisplay.innerHTML = highScore;
    });

     bomb.addEventListener('animationiteration', () => {
        let randomBomb = Math.floor(Math.random() * 8);
        let startbombleft = randomBomb * 100;
        // bomb.style.left = startbombleft + "px";
        if (randomBomb === randomBasketball && randomBomb === 1){
            startbombleft = (randomBomb * 100) + 100;
        } else if (randomBomb === randomBasketball && randomBomb <= 8){
            startbombleft = (randomBomb * 100) - 100
        } else {
            bomb.style.left = startbombleft + "px";
        }
    });


 
    setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
        let bombTop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
        
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490){
            basketball.style.animation = "none";
            bomb.style.animation = "none";
            scoreDisplay.innerHTML = 0
            document.getElementById("modal").classList.remove("hidden")
        }
    },1);
}

function resetGame(){
    // setTimeout(1000)
   score = 0
    document.addEventListener("keydown", event => {
      if(event.key==="ArrowLeft"){moveLeft();}
      if(event.key==="ArrowRight"){moveRight();}
    });
    
    // let score = 0;
    function moveLeft(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        // left -= 100;
        if(left>=0){
            basket.style.left = left + "px";
        }
    }
    
    function moveRight(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        if(left<800){
            basket.style.left = left + "px";
        }
    }
     let randomBasketball1;
    basketball.addEventListener('animationiteration', () => {
        randomBasketball1 = Math.floor(Math.random() * 8);
        left = random1 * 100;
        basketball.style.left = left + "px";
        //  score++;
        // scoreDisplay.innerHTML = score;
        // if (score > highScore) highScore = score;
        // highscoreDisplay.innerHTML = highScore;
    });

      bomb.addEventListener('animationiteration', () => {
        let resetRandomBomb1 = Math.floor(Math.random() * 8);
        resetbombleft = resetRandomBomb1 * 100;
        // bomb.style.left = left + "px";
            // let resetRandomBomb = 8;
        if (resetRandomBomb1 === random1 && resetRandomBomb1 === 1){
            resetbombleft = (resetRandomBomb1 * 100) + 100;
        } else if (resetRandomBomb1 === random1 && resetRandomBomb1 <= 8){
            resetbombleft = (resetRandomBomb1 * 100) - 100
        } else {
            bomb.style.left = resetbombleft + "px";
        }
    });
    
    // setInterval(function(){
    //     let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
    //     let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
    //     let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
    //     let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
    //     let bombTop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
    //     if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490 ){
    //         document.getElementById("modal").classList.remove("hidden");
    //         basketball.style.animation = "none";
    //         bomb.style.animation = "none";
    //     }
    // },50);

    function checker(){
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
        let bombTop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490 ){
            document.getElementById("modal").classList.remove("hidden");
            basketball.style.animation = "none";
            bomb.style.animation = "none";
        }
    };
    setInterval(checker,50)
    

}

function firstBombEasy(){
    bomb.style.animation = "slide 2s infinite linear";
}

function firstBombMedium(){
    bomb.style.animation = "slide 1.5s infinite linear";
}

function firstBombHard(){
    bomb.style.animation = "slide 1s infinite linear";
}


/******/ })()
;
//# sourceMappingURL=bundle.js.map