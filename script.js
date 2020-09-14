var player = null, winner = null;
var selectedPlayer = document.getElementById('selected-player');
var selectedWinner = document.getElementById('selected-winner');
var xPlayerPoints = 0;
var oPlayerPoints = 0;
var roundsCounter = 1;


changePlayer('X');

function selectSquare(id) {
	
	if (winner != null) {
		return;
	}

    var square = document.getElementById(id);
	if (square.innerHTML != '-') {
		return;
	}

    square.innerHTML = player;
    square.style.color = '#000';
	
	if (player == 'X') {
		player = 'O';
	} else {
		player = 'X';
	}
	
	changePlayer(player);
	checkWinner();
}

function changePlayer(playerID) {
    player = playerID;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
	var square1 = document.getElementById(1);
	var square2 = document.getElementById(2);
	var square3 = document.getElementById(3);
	var square4 = document.getElementById(4);
	var square5 = document.getElementById(5);
	var square6 = document.getElementById(6);
	var square7 = document.getElementById(7);
	var square8 = document.getElementById(8);
	var square9 = document.getElementById(9);
	
	if (checkSequence(square1, square2, square3)) {
		changeColorSquare(square1, square2, square3);
		changeWinner(square1);
		return;
	}
	
	if (checkSequence(square4, square5, square6)) {
		changeColorSquare(square4, square5, square6);
		changeWinner(square4);
		return;
	}
	
	if (checkSequence(square7, square8, square9)) {
		changeColorSquare(square7, square8, square9);
		changeWinner(square7);
		return;
	}
	
	if (checkSequence(square1, square4, square7)) {
		changeColorSquare(square1, square4, square7);
		changeWinner(square1);
		return;
	}
	
	if (checkSequence(square2, square5, square8)) {
		changeColorSquare(square2, square5, square8);
		changeWinner(square2);
		return;
	}
	
	if (checkSequence(square3, square6, square9)) {
		changeColorSquare(square3, square6, square9);
		changeWinner(square3);
		return;
	}
	
	if (checkSequence(square1, square5, square9)) {
		changeColorSquare(square1, square5, square9);
		changeWinner(square1);
		return;
	}
	
	if (checkSequence(square3, square5, square7)) {
		changeColorSquare(square3, square5, square7);
		changeWinner(square3);
		return;
	}
}

function changeWinner(square) {
	winner = square.innerHTML;
	selectedWinner.innerHTML = winner;
	
	var playerPoints;
	if (winner == 'X') {
		xPlayerPoints++;
		playerPoints = document.getElementById('x-player-points');
		playerPoints.innerHTML = xPlayerPoints;
	}
	else {
		oPlayerPoints++;
		playerPoints = document.getElementById('o-player-points');
		playerPoints.innerHTML = oPlayerPoints;
	}
}
	

function changeColorSquare(square1, square2, square3) {
	square1.style.backgroundColor = '#0f0';
	square2.style.backgroundColor = '#0f0';
	square3.style.backgroundColor = '#0f0';
}

function checkSequence(square1, square2, square3) {
	var isEqual = false;
	
	if (square1.innerHTML != '-' && square1.innerHTML == square2.innerHTML  && 
	square2.innerHTML == square3.innerHTML) {
		isEqual = true;
	}
	
	return isEqual;
}

function reset() {
	
	if (winner != null) {
		roundsCounter++;
		var round = document.getElementById('round');
		round.innerHTML = roundsCounter;
	}
	
	winner = null;
	selectedWinner.innerHTML = '';
	
	for (var i = 1; i <= 9; i++) {
		var square = document.getElementById(i);
		square.style.backgroundColor = '#eee';
		square.style.color = '#eee';
		square.innerHTML = '-';
	}
	
	changePlayer('X');
}

function resetCounters() {
	roundsCounter = 1;
	xPlayerPoints = 0;
	oPlayerPoints = 0;
	
	var htmlElement = document.getElementById('round');
	htmlElement.innerHTML = roundsCounter;
	
	htmlElement = document.getElementById('x-player-points');
	htmlElement.innerHTML = xPlayerPoints;
	
	htmlElement = document.getElementById('o-player-points');
	htmlElement.innerHTML = oPlayerPoints;
	
	winner = null;
	selectedWinner.innerHTML = '';
	
	for (var i = 1; i <= 9; i++) {
		var square = document.getElementById(i);
		square.style.backgroundColor = '#eee';
		square.style.color = '#eee';
		square.innerHTML = '-';
	}
	
	changePlayer('X');
}