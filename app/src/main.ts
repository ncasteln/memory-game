import './style.css'
import { Game } from './Game.ts'

/*	 TO DO
	- Grid-flex etc.
	- button style
*/

const CARD_NUMBER = 10
const app = document.getElementById("app") as HTMLDivElement;
document.addEventListener("DOMContentLoaded", init);

function init() {
	const restartButton = document.getElementById("restart-button");
	if (restartButton)
		app.removeChild(restartButton);
	const game = new Game(CARD_NUMBER, showRestartButton); // register the call back
	game.shuffle();
	game.createTable();
}

function showRestartButton() {
	const restartButton = document.createElement('button');
	restartButton.textContent = 'Restart Game';
	restartButton.id = "restart-button";
	restartButton.addEventListener('click', init);
	app.appendChild(restartButton);
}
