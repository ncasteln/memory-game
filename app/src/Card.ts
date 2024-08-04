export class Card {
	#id: number;
	#imgPath: string;
	#DOMcard: HTMLDivElement;
	#DOMimg: HTMLImageElement;
	#isSelected: boolean;
	#isEnabled: boolean;

	constructor(id: number, imgId: number) {
		this.#id = id;
		this.#imgPath = `img-${imgId}.jpg`;

		// <div> member
		this.#DOMcard = document.createElement("div");
		this.#DOMcard.classList.add("card");
		this.#isSelected = false;
		this.#isEnabled = true;

		// <img> member
		this.#DOMimg = document.createElement("img");
		this.#DOMimg.setAttribute("src", this.#imgPath);
		this.#DOMimg.setAttribute("alt", this.#imgPath); // fix description
		this.#DOMcard.appendChild(this.#DOMimg);
	}


	getId(): number { return (this.#id) };
	getImgPath(): string { return (this.#imgPath) };
	getDOMcard(): HTMLDivElement { return (this.#DOMcard) };
	isEnabled(): boolean { return (this.#isEnabled) };

	toggleIsSelected(): void {
		this.#isSelected = !this.#isSelected;
		this.#DOMimg.classList.remove("selected");
		if (this.#isSelected)
			this.#DOMimg.classList.add("selected");
	};
	disable(): void {
		this.#isEnabled = false;
		this.#DOMimg.classList.add("disable")
	};
}
