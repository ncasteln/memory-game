export class Card {
	#id: number;
	#imgPath: string;
	#retroImg: string;
	#DOMcard: HTMLDivElement;
	#DOMimg: HTMLImageElement;
	#isSelected: boolean;
	#isEnabled: boolean;

	constructor(id: number, imgId: number) {
		this.#id = id;
		this.#imgPath = `img-${imgId}.jpg`;
		this.#retroImg = `retro.jpg`

		// <div> member
		this.#DOMcard = document.createElement("div");
		this.#DOMcard.classList.add("card");
		this.#isSelected = false;
		this.#isEnabled = true;

		// <img> member
		this.#DOMimg = document.createElement("img");
		this.#DOMimg.setAttribute("src", this.#retroImg);
		this.#DOMimg.setAttribute("alt", this.#imgPath); // fix description
		this.#DOMcard.appendChild(this.#DOMimg);
	}


	getId(): number { return (this.#id) };
	getImgPath(): string { return (this.#imgPath) };
	getDOMcard(): HTMLDivElement { return (this.#DOMcard) };
	isEnabled(): boolean { return (this.#isEnabled) };

	toggleIsSelected(): void {
		this.#isSelected = !this.#isSelected;
		if (this.#isSelected) {
			this.#DOMimg.setAttribute("src", this.#imgPath);
		} else {
			this.#DOMimg.setAttribute("src", this.#retroImg);
		}
	};


	disable(): void { this.#isEnabled = false; };
}
