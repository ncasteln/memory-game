// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

import './style.css'
import { Game } from './Game.ts'

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const CARD_NUMBER = 10
const app = document.getElementById("app") as HTMLDivElement;
document.addEventListener("DOMContentLoaded", init);

function init() {
	const game = new Game(CARD_NUMBER);
	game.shuffle();
	game.getCards().forEach((card) => {
		app.appendChild(card.getDOMcard());
	})
}
