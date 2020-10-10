/*
Board
*/
window.onload = function addClassName(){
	let currentPlayer = "X";
	let elem = document.querySelectorAll("#board div");
    for (let i=0; i < elem.length ; i++){
		elem[i].className += "square";
		elem[i].addEventListener('click', function(){
			console.log('Square ' + i + ' clicked');
			elem[i].innerHTML = currentPlayer;
			PlayerChange();
		});
	}
}
	var statusDisplay = document.querySelector("#status");
	let gameActive = true;
	const winningMessage = () => 'Congratulations, ${currentPlayer} is the winner!';
	const drawMessage = () => 'The game drawed';
	let gameState = ["", "", "", "", "", "", "", "", ""];
	const clickBox = elem.target;
	const currentPlayerTurn = () => "It's ${currentPlayer}'s turn.";
	statusDisplay.innerHTML = currentPlayerTurn();
	const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/* 
Callers
*/
function cellPlayed() {

}
function playerChange() {

}
function handleResult() {

}
function cellClicked() {

}
function restartGame() {

}
/* 
To change player
*/

	function playerChange(){
		currentPlayer = currentPlayer === "X" ? "O" : "X";
		statusDisplay.innerHTML = currentPlayerTurn();
	
} 

/* 
Checks the validation of the game
*/
function handleResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    PlayerChange();
}

/*
Handle Restart
*/

function restartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}

/*
Handle Cell Played
*/
function cellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

/*
Saves cell clicked
*/

function cellClicked(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('board')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }
    cellPlayed(clickedCell, clickedCellIndex);
    handleResult();
    
}