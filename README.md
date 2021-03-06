# Basketbomb

[Play the game here!](https://jonsiu826.github.io/Basketbombs/)

Basketbomb is game built solely based on VanillaJS, CSS, and HTML. It utilizes CSS Keyframes to allow the bombs and basketballs to fall seemlessly. The user controls the movement of the basket. Their goal is to ensure no basketball hits the ground while also avoiding bombs. Players can select their level of difficulties. As the level of difficulties increase, so will the speed at which the basketballs fall.  

<p align="center">
  <img src="https://github.com/jonsiu826/javascript_project/blob/main/assets/gamplay.png">
</p>

### Instructions:

<p align="center">
  <img src="https://github.com/jonsiu826/javascript_project/blob/main/assets/intromodal.png">
</p>

### Technology and Languages:

* Javascript
* CSS
* HTML

### Technical Implementation

Collision detection is incorporated with the code snippet below. I utilized getComputedStyle and getPropertyValue to get information of where my basket, bomb, and basketball is located on the grid. I created an if statement to check if the basketball and basket are not at the same position or if the basket and bomb are at the same position when the basketball and bomb are at the bottom of the grid. Game over modal is shown if the collision detection is true and bomb and basketball animation are set to none.

```setInterval(function(){
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
    
```
I developed the randomization of where basketballs and bombs fall with the code snippet below. I utilized animation iteration to continuously display a basketball/bomb falling. In order to incorpate randomization, I created a function that used .random and multiplied it by 8 because my grid width is 800px. From there, I set the variable of "left" to the basketball.style.left which dictates where the basketball falls. If the ball finishes 1 iteration of the animation, then the score will increase by 1. 
```
  let randomBasketball;
    basketball.addEventListener('animationiteration', () => {
        randomBasketball = Math.floor(Math.random() * 8);
        left = randomBasketball * 100;
        basketball.style.left = left + "px";
        score++;
        swishSound();
        scoreDisplay.innerHTML = score
        if (score > highScore) highScore = score;
        highscoreDisplay.innerHTML = highScore;
    });

     bomb.addEventListener('animationiteration', () => {
        let randomBomb = Math.floor(Math.random() * 8);
        let startbombleft = randomBomb * 100;
        if (randomBomb === randomBasketball && randomBomb === 1){
            startbombleft = (randomBomb * 100) + 100;
        } else if (randomBomb === randomBasketball && randomBomb <= 8){
            startbombleft = (randomBomb * 100) - 100
        } else {
            bomb.style.left = startbombleft + "px";
        }
    });
```
### Future Features

* Implement another falling item 
* Implement additional rule
