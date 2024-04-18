const player1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    currentScore: document.querySelector("#p1Score")
}

const player2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    currentScore: document.querySelector("#p2Score")
}

let scoreSelect = document.querySelector("#winningScore");
let resetButton = document.querySelector("#resetButton");

let winningScore = parseInt(scoreSelect.value);
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;      
        player.currentScore.textContent = player.score;

        if((player1.score === player2.score) && (player1.score === (winningScore - 1))){
            winningScore = winningScore + 1;
            player1.currentScore.classList.add("has-text-warning");
            player2.currentScore.classList.add("has-text-warning");
        }

        if(player.score === winningScore){
            player.currentScore.classList.remove("has-text-warning");
            player.currentScore.classList.add("has-text-success");
            opponent.currentScore.classList.add("has-text-danger");
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}



const resetScores = () => {
    for(let player of [player1,player2]){
        player.score = 0;
        player.currentScore.textContent = 0;
        player.currentScore.classList.remove("has-text-success", "has-text-danger","has-text-warning");
        player.button.disabled = false;
        winningScore = parseInt(scoreSelect.value);
    }
    isGameOver = false;
}

scoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetScores();
    }
);


player1.button.addEventListener('click', () => {
    updateScores(player1,player2);
});

player2.button.addEventListener('click', () => {
    updateScores(player2,player1);
});

resetButton.addEventListener('click', resetScores);


