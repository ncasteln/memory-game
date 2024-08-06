import { Card } from "./Card.ts";

export class Game {
	#cardNumber: number;
	#cards: Card[];
	#selectedCards: [Card|null, Card|null];
	#needToWait: boolean;
	#onEndGame: CallableFunction;

	constructor(cardNumber: number, showRestartButtonCallback: CallableFunction) {
		this.#cardNumber = cardNumber;
		this.#cards = this.initCards();
		this.#selectedCards = [null, null];
		this.#needToWait = false;
		this.#onEndGame = showRestartButtonCallback;
	}

	initCards(): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < this.#cardNumber; i++) {
			const card0 = new Card(i, i);
			const card1 = new Card(i+10, i);
			card0.getDOMcard().addEventListener("click", () => this.handleClick(i));
			card1.getDOMcard().addEventListener("click", () => this.handleClick(i+10));
			cards.push(card0);
			cards.push(card1);
		}
		return (cards)
	}

	shuffle(): void {
		let i = this.#cards.length;
		let randomIndex;

		while (i != 0) {
			randomIndex = Math.floor(Math.random() * i);
			i--;
			[this.#cards[i], this.#cards[randomIndex]] = [this.#cards[randomIndex], this.#cards[i]]; // https://javascript.info/destructuring-assignment
		}
	}

	createTable(): void {
		const app = document.getElementById("app");
		this.#cards.forEach((card) => { app!.appendChild(card.getDOMcard()); });
	}

	handleClick(i: number): void {
		const card = this.#cards.find((card) => {
			return (card.getId() === i);
		});
		if (card) {
			if (card.isEnabled() && !this.#needToWait) {
				this.updateSelectedCards(card);
				if (this.#selectedCards[0] && this.#selectedCards[1])
					this.checkMatch();
				if (this.isEndGame()) {
					this.clearDOM()
					this.#onEndGame();
				}
			}
		}
	}

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
		if (this.#selectedCards[0]?.getFront().getPath() === this.#selectedCards[1]?.getFront().getPath()) {
			this.#selectedCards[0]?.disable();
			this.#selectedCards[1]?.disable();
			this.clearSelectedCards();
			this.#cardNumber--;
		}
		else {
			this.#needToWait = true;
			setTimeout(() => {
				this.#selectedCards[0]?.toggleIsSelected();
				this.#selectedCards[1]?.toggleIsSelected();
				this.clearSelectedCards();
				this.#needToWait = false;
			}, 1000);
		}
	}

	clearDOM(): void {
		const app = document.getElementById("app");
		this.#cards.forEach(card => {
			app?.removeChild(card.getDOMcard());
		});
	}

	clearSelectedCards() {
		this.#selectedCards[0] = null;
		this.#selectedCards[1] = null;
	}

	getCards(): Card[] { return (this.#cards) };
	getCardNumber(): number { return (this.#cardNumber) };
	isEndGame(): boolean { return (this.#cardNumber != 0 ? false : true) }
}
