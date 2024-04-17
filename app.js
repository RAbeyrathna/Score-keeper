const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

let p1Score = 0;
let p2Score = 0;

let p1CurrentScore = document.querySelector("#p1Score");
let p2CurrentScore = document.querySelector("#p2Score");
let resetButton = document.querySelector("#resetButton");

let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if(!isGameOver){
        p1Score += 1;      
        p1CurrentScore.textContent = p1Score;

        if(p1Score === winningScore){
            p1CurrentScore.style.color = "green";
            p2CurrentScore.style.color = "red";
            isGameOver = true;
        }
    }
});

p2Button.addEventListener('click', () => {
    if(!isGameOver){
        p2Score += 1;      
        p2CurrentScore.textContent = p2Score;

        if(p2Score === winningScore){
            p2CurrentScore.style.color = "green";
            p1CurrentScore.style.color = "red";
            isGameOver = true;
        }
    }
});

resetButton.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    p1CurrentScore.textContent = 0;
    p1CurrentScore.style.color = "black";
    p2CurrentScore.textContent = 0;
    p2CurrentScore.style.color = "black";
    isGameOver = false;
})