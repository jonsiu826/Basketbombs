let scoreDisplay = document.getElementById('score');
let livesDisplay = document.getElementById('lives');
const highscoreDisplay = document.getElementById('high-score');
let basketball = document.getElementById("basketball");
let basket = document.getElementById("basket");
let bomb = document.getElementById("bomb");
const sound = document.getElementById("sound-settings");
let score = 0;
let highScore = 0;
let isPlaying = true;
let lives = 3;



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
        backgroundMusic()
        bomb.style.animation = "slide 2s infinite linear"
        basketball.style.animation = "basketballslide 2s infinite linear"
    })

     medium.addEventListener("click", () => {
        document.getElementById("introduction").classList.add("hidden");
        startGame();
        backgroundMusic()
         bomb.style.animation = "slide 1.8s infinite linear";
        basketball.style.animation = "basketballslide 1.8s infinite linear"
    })

     hard.addEventListener("click", () => {
        document.getElementById("introduction").classList.add("hidden");
        startGame();
        backgroundMusic()
         bomb.style.animation = "slide 1.2s infinite linear";
        basketball.style.animation = "basketballslide 1.2s infinite linear"
    })

      easy1.addEventListener("click", () => { 
       resetGame();
       backgroundMusic()
        bomb.style.animation = "slide 2s infinite linear";
       basketball.style.animation = "basketballslide 2s infinite linear"
       document.getElementById("modal").classList.add("hidden");
  })

       medium1.addEventListener("click", () => { 
       resetGame();
       backgroundMusic()
        bomb.style.animation = "slide 1.8s infinite linear";
        basketball.style.animation = "basketballslide 1.8s infinite linear"
       document.getElementById("modal").classList.add("hidden");
  })

       hard1.addEventListener("click", () => { 
       resetGame();
       backgroundMusic()
        bomb.style.animation = "slide 1.2s infinite linear";
        basketball.style.animation = "basketballslide 1.2s infinite linear"
       document.getElementById("modal").classList.add("hidden");
  })

function startGame(){
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
      
        scoreDisplay.innerHTML = score
        if (score > highScore) highScore = score;
        highscoreDisplay.innerHTML = highScore;
    });

     bomb.addEventListener('animationiteration', () => {
        let randomBomb = Math.floor(Math.random() * 8);
        if (randomBasketball == randomBomb && randomBomb == 1){
            resetbombleft = (randomBomb * 100) + 100;
            bomb.style.left = resetbombleft + "px";
        } else if (randomBomb == randomBasketball1 && randomBomb <= 8){
            resetbombleft = (randomBomb * 100) - 100
            bomb.style.left = resetbombleft + "px";
        } else {
            resetbombleft = randomBomb * 100;
            bomb.style.left = resetbombleft + "px";
        }
    });
        requestAnimationFrame(collision)
    
   
   }
 
  function collision(){
        let start = requestAnimationFrame(collision)
        let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
        let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
        let bombTop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
        // let lives = 3
        
        if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490 ){
            // document.getElementById("modal").classList.remove("hidden");
            // basketball.style.animation = "none";
            // bomb.style.animation = "none";
            lives--;
            livesDisplay.innerHTML = lives
            if (lives < 1){
                document.getElementById("modal").classList.remove("hidden");
                basketball.style.animation = "none";
                bomb.style.animation = "none";
                scoreDisplay.innerHTML = 0;
                lives = 3
                livesDisplay.innerHTML = 3;
                 cancelAnimationFrame(start);
            }
        } else if (characterLeft==blockLeft && blockTop<700 && blockTop>590 ) {
              score++;
                swishSound();
        }
        
        // if((characterLeft!==blockLeft && blockTop<700 || characterLeft===bombLeft && bombTop<600 && bombTop>490) && (lives > 1)){
        //     lives--;
        //     livesDisplay.innerHTML = lives
        // }else if ((characterLeft!==blockLeft && blockTop<700 && blockTop>590 || characterLeft===bombLeft && bombTop<600 && bombTop>490) && (lives === 1)) {
        //     basketball.style.animation = "none";
        //     bomb.style.animation = "none";
        //     // bomb.style.left = "105px";
        //     scoreDisplay.innerHTML = 0;
        //     document.getElementById("modal").classList.remove("hidden");
            // lives = 3;
        // if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490){
        //     // basketball.style.animation = "none";
        //     // bomb.style.animation = "none";
        //     // scoreDisplay.innerHTML = 0
        //     // document.getElementById("modal").classList.remove("hidden")
        //     lives--;
        //     livesDisplay.innerHTML = lives
        // } else if (lives === 0) {
        //     basketball.style.animation = "none";
        //     bomb.style.animation = "none";
        //     scoreDisplay.innerHTML = 0
        //     document.getElementById("modal").classList.remove("hidden")
        //     livesDisplay.innerHTML = 3;
        // }
        
    // },500);
}
//  function init(){
//         setInterval(collision,50)
//    }

function resetGame(){
   score = 0
    document.addEventListener("keydown", event => {
      if(event.key==="ArrowLeft"){moveLeft();}
      if(event.key==="ArrowRight"){moveRight();}
    });
    
    function moveLeft(){
        let left = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
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
        left = randomBasketball1 * 100;
        basketball.style.left = left + "px";
    });

      bomb.addEventListener('animationiteration', () => {
        let resetRandomBomb1 = Math.floor(Math.random() * 8);
        if (resetRandomBomb1 === randomBasketball1 && resetRandomBomb1 === 1){
            resetbombleft = (resetRandomBomb1 * 100) + 100;
             bomb.style.left = resetbombleft + "px";
        } else if (resetRandomBomb1 === randomBasketball1 && resetRandomBomb1 <= 8){
            resetbombleft = (resetRandomBomb1 * 100) - 100
             bomb.style.left = resetbombleft + "px";
        } else {
            resetbombleft = resetRandomBomb1 * 100;
            bomb.style.left = resetbombleft + "px";
        }
    });

     requestAnimationFrame(collision)
    
    // setInterval(function(){
    //     let characterLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
    //     let blockLeft = parseInt(window.getComputedStyle(basketball).getPropertyValue("left"));
    //     let blockTop = parseInt(window.getComputedStyle(basketball).getPropertyValue("top"));
    //     let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));
    //     let bombTop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
    //     if(characterLeft!=blockLeft && blockTop<700 && blockTop>590 || characterLeft==bombLeft && bombTop<600 && bombTop>490){
    //         lives--;
    //         // livesDisplay.innerHTML = lives;
    //     }
    //         // document.getElementById("modal").classList.remove("hidden");
    //         // basketball.style.animation = "none";
    //         // bomb.style.animation = "none";
    //         // scoreDisplay.innerHTML = 0;
    //         // lives = 3;
    //         // livesDisplay.innerHTML = 3;
    //     // }
    // },1);

}

const gameMusic = new Audio ("./assets/rumble.mov");
let soundOn = true;

sound.addEventListener("click", () => {
    if (soundOn === true) {
        soundOn = false;
        stopMusic();
    }   else {
        soundOn = true;
        backgroundMusic();
    }

    sound.innerHTML === "PLAY MUSIC" ? sound.innerHTML = "PAUSE MUSIC" : sound.innerHTML = "PLAY MUSIC"
});

function backgroundMusic() {
    if (soundOn === false) gameMusic.muted = true;
    if (soundOn === true) gameMusic.muted = false;
    gameMusic.volume = .10;
    gameMusic.play();
    gameMusic.loop = true;
}

function stopMusic() {
    gameMusic.pause();
}

function swishSound() {
    const madeBasket = new Audio("./assets/swishsound.mov");
    if (soundOn === false) madeBasket.muted = true;
    madeBasket.volume = .40;
    madeBasket.play();
}

