import { Card } from "./Card.ts";

export class Game {
	#cardNumber: number;
	#cards: Card[];
	#selectedCards: [Card|null, Card|null];

	constructor(cardNumber: number) {
		this.#cardNumber = cardNumber;
		this.#cards = this.initCards();
		this.#selectedCards = [null, null];
	}

	initCards(): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < this.#cardNumber; i++) {
			const card = new Card(i);
			card.getDOMcard().addEventListener("click", (e) => this.handleClick(e, i));
			cards.push(card);
		}
		return (cards)
	}

	handleClick(e: Event, i: number): void {
		const card = this.#cards.find((card) => {
			return (card.getId() === i);
		})
		if (card)
			this.updateSelectedCards(card);
		this.displaySelectedCards();
	}

	getCards(): Card[] { return (this.#cards) };

	displaySelectedCards(): void { console.log(this.#selectedCards); };

	updateSelectedCards(card: Card): void {
		// if (this.#selectedCards[0]?.getId() === card.getId())
		// this.#selectedCards.push(card);
	}
}
