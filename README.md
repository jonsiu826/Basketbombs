# Basketbomb

[Play the game here!](https://jonsiu826.github.io/javascript_project/)

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
### Future Features

* Implement another falling item 
* Implement additional rule
