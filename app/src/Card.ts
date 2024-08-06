export class Card {
	#id: number;
	#frontImgPath: string;
	#backImgPath: string;
	#DOMcard: HTMLDivElement;
	#DOMback: HTMLDivElement;
	#DOMbackImg: HTMLImageElement
	#DOMfront: HTMLDivElement;
	#DOMfrontImg: HTMLImageElement
	#isSelected: boolean;
	#isEnabled: boolean;

	constructor(id: number, imgId: number) {
		this.#id = id;
		this.#frontImgPath = `img-${imgId}.jpg`;
		this.#backImgPath = `retro.jpg`
		this.#isSelected = false;
		this.#isEnabled = true;

		// .card
		this.#DOMcard = document.createElement("div");
		this.#DOMcard.classList.add("card");

		// .back
		this.#DOMback = document.createElement("div");
		this.#DOMback.classList.add("back");
		this.#DOMbackImg = document.createElement("img");
		this.#DOMbackImg.classList.add("backImg");
		this.#DOMbackImg.setAttribute("src", this.#backImgPath);

		// .front
		this.#DOMfront = document.createElement("div");
		this.#DOMfront.classList.add("front");
		this.#DOMfrontImg = document.createElement("img");
		this.#DOMfrontImg.classList.add("frontImg");
		this.#DOMfrontImg.setAttribute("src", this.#frontImgPath);

		this.#DOMback.appendChild(this.#DOMbackImg);
		this.#DOMfront.appendChild(this.#DOMfrontImg);
		this.#DOMcard.appendChild(this.#DOMback);
		this.#DOMcard.appendChild(this.#DOMfront);
	}


	getId(): number { return (this.#id) };
	getImgPath(): string { return (this.#frontImgPath) };
	getDOMcard(): HTMLDivElement { return (this.#DOMcard) };
	isEnabled(): boolean { return (this.#isEnabled) };

	toggleIsSelected(): void {
		this.#isSelected = !this.#isSelected;
		this.#DOMfront.classList.toggle("flipped");
		this.#DOMback.classList.toggle("flipped");
	};

	disable(): void { this.#isEnabled = false; };
}
