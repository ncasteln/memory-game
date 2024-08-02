import { Card } from "./Card.ts";

interface IState {
	selectedCard: Card | null;
}

export class Game {
	#cardNumber: number;
	#cards: Card[];
	_state: IState;

	constructor(cardNumber: number) {
		this.#cardNumber = cardNumber;
		this.#cards = this.initCards();
		this._state = {
			selectedCard: null,
		};
	}

	initCards(): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < this.#cardNumber; i++) {
			const card = new Card(i);
			cards.push(card);
			// need to be doubled
		}
		return (cards)
	}

	getCards(): Card[] { return (this.#cards) };
}
