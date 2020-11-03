console.log("Hello from webpack")

document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
   })
})