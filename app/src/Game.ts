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
			card0.getDOMcard().addEventListener("click", (e) => this.handleClick(e, i));
			card1.getDOMcard().addEventListener("click", (e) => this.handleClick(e, i+10));
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

	handleClick(e: Event, i: number): void {
		const card = this.#cards.find((card) => {
			return (card.getId() === i);
		})
		if (card) {
			if (card.isEnabled() && !this.#needToWait) {
				console.log("Clicked: ", card.getId(), card.getImgPath());
				this.updateSelectedCards(card);
				if (this.#selectedCards[0] && this.#selectedCards[1])
					this.checkMatch();
				this.checkEndGame();
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
		if (this.#selectedCards[0]?.getImgPath() === this.#selectedCards[1]?.getImgPath()) {
			this.#selectedCards[0]?.disable();
			this.#selectedCards[1]?.disable();
			this.clearSelected();
			this.#cardNumber--; // change
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

	checkEndGame(): void {
		if (this.#cardNumber === 0) { // end game
			const app = document.getElementById("app");
			this.#cards.forEach(card => {
				app?.removeChild(card.getDOMcard());
			});
			this.#onEndGame();
		}
	}

	clearSelected() {
		this.#selectedCards[0] = null;
		this.#selectedCards[1] = null;
	}

	getCards(): Card[] { return (this.#cards) };
	getCardNumber(): number { return (this.#cardNumber) };
}
