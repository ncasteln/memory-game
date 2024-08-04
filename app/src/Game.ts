import { Card } from "./Card.ts";

export class Game {
	#cardNumber: number;
	#cards: Card[];
	#selectedCards: [Card|null, Card|null];
	#needToWait: boolean;

	constructor(cardNumber: number) {
		this.#cardNumber = cardNumber;
		this.#cards = this.initCards();
		this.#selectedCards = [null, null];
		this.#needToWait = false;
	}

	initCards(): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < this.#cardNumber; i++) {
			const card0 = new Card(i, i);
			const card1 = new Card(i+10, i);
			card0.getDOMcard().addEventListener("click", (e) => this.handleClick(e, i));
			card1.getDOMcard().addEventListener("click", (e) => this.handleClick(e, i+10));
			cards.push(card0);
			cards.push(card1);
		}
		return (cards)
	}

	handleClick(e: Event, i: number): void {
		const card = this.#cards.find((card) => {
			return (card.getId() === i);
		})
		if (card) {
			if (card.isEnabled() && !this.#needToWait) {
				console.log("Clicked: ", card.getId(), card.getImgPath());
				this.updateSelectedCards(card);
				if (this.#selectedCards[0] && this.#selectedCards[1]) {
					this.checkMatch();
				}
			}
		}
	}

	getCards(): Card[] { return (this.#cards) };

	updateSelectedCards(currentClickedCard: Card): void {
		const first = this.#selectedCards[0];
		const second = this.#selectedCards[1];
		if (!first) {
			this.#selectedCards[0] = currentClickedCard;
			this.#selectedCards[0].toggleIsSelected();
		}
		else if (first && !second) {
			if (first.getId() === currentClickedCard.getId())
				return ;
			this.#selectedCards[1] = currentClickedCard;
			this.#selectedCards[1].toggleIsSelected();
		}
	}

	checkMatch() {
		if (this.#selectedCards[0]?.getImgPath() === this.#selectedCards[1]?.getImgPath()) {
			this.#selectedCards[0]?.disable();
			this.#selectedCards[1]?.disable();
			this.clearSelected();
		}
		else {
			this.#needToWait = true;
			setTimeout(() => {
				this.#selectedCards[0]?.toggleIsSelected();
				this.#selectedCards[1]?.toggleIsSelected();
				this.clearSelected();
				this.#needToWait = false;
			}, 1000);
		}
	}

	clearSelected() {
		this.#selectedCards[0] = null;
		this.#selectedCards[1] = null;
	}
}
