/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
console.log("Hello from webpack")

document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
   })
})
/******/ })()
;
//# sourceMappingURL=bundle.js.map