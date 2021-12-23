let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        rgb(153, 248, 75)  ${progressValue * 3.6}deg,
        rgb(243, 117, 45) ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }

}, speed);