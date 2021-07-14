class Cells {

    // game state
    state = {
        gameStarted : false,
        player1sTurn : false,  // gets changed between pl1 and pl2 turn
        gameOver : false,
        player1Wins : false,   // gets changed between pl1 and pl2 turn
        draw : false,
        restart : false
    };

    // getting td elements
    _1 = document.getElementById('_1');
    _2 = document.getElementById('_2');
    _3 = document.getElementById('_3');
    _4 = document.getElementById('_4');
    _5 = document.getElementById('_5');
    _6 = document.getElementById('_6');
    _7 = document.getElementById('_7');
    _8 = document.getElementById('_8');
    _9 = document.getElementById('_9');

    // Win-causing patterns
    patterns = [
        [_1.textContent, _5.textContent, _9.textContent],
        [_3.textContent, _5.textContent, _7.textContent],
        [_1.textContent, _4.textContent, _7.textContent],
        [_2.textContent, _5.textContent, _8.textContent],
        [_3.textContent, _6.textContent, _9.textContent],
        [_1.textContent, _2.textContent, _3.textContent],
        [_4.textContent, _5.textContent, _6.textContent],
        [_7.textContent, _8.textContent, _9.textContent]
    ];
};

const cells = new Cells();

// adding event listener to the table, start button, ibot
const table = document.getElementById('game-table');
table.addEventListener('click', tdClick);

const btnStart = document.querySelector('.btnStart');
btnStart.addEventListener('click', startGame);

const ibot = document.querySelector('#ibot');

function tdClick(e) {
    if(e.target.localName === 'td') {
        if(cells.state.player1sTurn) {
            e.target.textContent = 'X';
            e.target.className = 'player1sTurn';
            e.target.style.pointerEvents = 'none';
            ibot.className = 'player2sTurn';
            ibot.textContent = '2 player\'s turn';
            cells.state.player1sTurn = !cells.state.player1sTurn;
            // if(checkPatterns()) {gameOver('1');}
            checkPatterns('1');
        } else {
            e.target.textContent = 'O';
            e.target.className = 'player2sTurn';
            e.target.style.pointerEvents = 'none';
            ibot.className = 'player1sTurn';
            ibot.textContent = '1 player\'s turn';
            cells.state.player1sTurn = !cells.state.player1sTurn;
            // if(checkPatterns()) {gameOver('1');}
            checkPatterns('2');
        }
    }
}

function startGame() {
    // player 1 starts the game
    cells.state.player1sTurn = true;

    ibot.className = 'player1sTurn';
    table.style.pointerEvents = 'all';

    // changing the style of the btn
    ibot.style.visibility = 'visible';
    btnStart.style.boxShadow = 'none';
    btnStart.style.animationPlayState = 'paused'; // animationPlayState = 'paused';
    btnStart.textContent = 'Restart';
    btnStart.removeEventListener('click', startGame);
    btnStart.addEventListener('click', restart);
}

let counter = 0;

function checkPatterns(player) {

    counter++;

    // don't know how it works but it works )
    const cells = new Cells();

    cells.patterns.forEach(pattern => {
        if(pattern.join('') === 'XXX' || pattern.join('') === 'OOO') {
            gameOver(player);  // bug here
            cells.state.gameOver = true;
            // return;
        } 
    });

    if(counter === 9 && !cells.state.gameOver) {
        ibot.className = 'game-over';
        ibot.textContent = 'Draw! Want to restart?'
        counter = 0;
    }
}

function gameOver(player) {
    counter = 0;
    ibot.textContent = `Player ${player} has won the game!`;
    ibot.className = 'game-over';

    table.style.pointerEvents = 'none';  // bug here
    document.getElementById('_1').style.pointerEvents = 'none';
    document.getElementById('_2').style.pointerEvents = 'none';
    document.getElementById('_3').style.pointerEvents = 'none';
    document.getElementById('_4').style.pointerEvents = 'none';
    document.getElementById('_5').style.pointerEvents = 'none';
    document.getElementById('_6').style.pointerEvents = 'none';
    document.getElementById('_7').style.pointerEvents = 'none';
    document.getElementById('_8').style.pointerEvents = 'none';
    document.getElementById('_9').style.pointerEvents = 'none';
}

function restart() {

    // player 1 starts the game
    cells.state.player1sTurn = true;

    counter = 0;
    // cells.state.gameOver = false;

    table.style.pointerEvents = 'all';
    ibot.className = 'player1sTurn';
    ibot.textContent = '1 player\'s turn';

    // wet code here
    document.getElementById('_1').textContent = '';
    document.getElementById('_2').textContent = '';
    document.getElementById('_3').textContent = '';
    document.getElementById('_4').textContent = '';
    document.getElementById('_5').textContent = '';
    document.getElementById('_6').textContent = '';
    document.getElementById('_7').textContent = '';
    document.getElementById('_8').textContent = '';
    document.getElementById('_9').textContent = '';

    document.getElementById('_1').style.pointerEvents = 'all';
    document.getElementById('_2').style.pointerEvents = 'all';
    document.getElementById('_3').style.pointerEvents = 'all';
    document.getElementById('_4').style.pointerEvents = 'all';
    document.getElementById('_5').style.pointerEvents = 'all';
    document.getElementById('_6').style.pointerEvents = 'all';
    document.getElementById('_7').style.pointerEvents = 'all';
    document.getElementById('_8').style.pointerEvents = 'all';
    document.getElementById('_9').style.pointerEvents = 'all';
}