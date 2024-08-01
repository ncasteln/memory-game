import './style.css'
import { Card } from './card.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'


// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const CARD_NUMBER = 10

const app = document.getElementById("app") as HTMLDivElement;
document.addEventListener("DOMContentLoaded", init);

function init() {
	const cards: Card[] = createCards();
	renderGrid(cards);
	// createSharedState();
	// eventListen();
}

function createCards(): Card[] {
	const cards: Card[] = [];
	for (let i = 0; i < CARD_NUMBER; i++) {
		let img = `../public/img-${i}.jpg`;
		let card = new Card(i, img);
		cards.push(card);
	}
	return cards;
};

function renderGrid(cards: Card[]): void {
	cards.forEach(card => {
		const DOMcard = createDomCard(card);
		app.appendChild(DOMcard);
	});
}

function createDomCard(card: Card): HTMLDivElement {
	const DOMcard = document.createElement("div");
	const img = document.createElement("img");
	img.setAttribute("src", card.img);
	img.setAttribute("alt", "---fix description---");
	DOMcard.classList.add("card");
	DOMcard.appendChild(img);
	return (DOMcard)
}
