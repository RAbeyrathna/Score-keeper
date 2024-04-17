const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', () => {
    p1Score += 1;
    let currentScore = document.querySelector("#p1Score");
    currentScore.textContent = p1Score;
});

p2Button.addEventListener('click', () => {
    p2Score += 1;
    let currentScore = document.querySelector("#p2Score");
    currentScore.textContent = p2Score;
});