/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previusDice0,previusDice1, winScore;


init();

// dice = Math.floor(Math.random() * 6);


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        // RULE OF 6
        if ((previusDice0 === 6 || previusDice1 === 6)  && (dice0 === 6 || dice1 ===6)) {
            scores[activePlayer] = 0;
            previusDice0 = 0;
            previusDice1 = 0;
            roundScore = 0

            // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            nextPlayer();
        } else {
            previusDice0 = dice0;
            previusDice1 = dice1;
        }

        // 2. Display the result
        var diceDOM = document.querySelector('.dice-0');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice0 + '.png';
        var diceDOM = document.querySelector('.dice-1');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1

        if (dice0 !== 1 && dice1 !== 1) {
            // Add score
            roundScore += (dice0 + dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            previusDice0 = 0;
            previusDice1 = 0;
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    winScore = parseInt(document.querySelector('.score').value);

    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice0').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;
