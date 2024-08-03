export class Card {
	#id: number;
	#imgPath: string;
	#DOMcard: HTMLDivElement;
	#DOMimg: HTMLImageElement;
	#isSelected: boolean;

	constructor(id: number) {
		this.#id = id;
		this.#imgPath = `img-${id}.jpg`;

		// <div> member
		this.#DOMcard = document.createElement("div");
		this.#DOMcard.classList.add("card");
		this.#isSelected = false;

		// <img> member
		this.#DOMimg = document.createElement("img");
		this.#DOMimg.setAttribute("src", this.#imgPath);
		this.#DOMimg.setAttribute("alt", this.#imgPath); // fix description
		this.#DOMcard.appendChild(this.#DOMimg);
	}


	getId(): number { return (this.#id) };
	getDOMcard(): HTMLDivElement { return (this.#DOMcard) };

	toggleIsSelected(): void { this.#isSelected = !this.#isSelected; };
}
