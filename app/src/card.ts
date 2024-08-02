export class Card {
	#id: number;
	#imgPath: string;
	_DOMcard: HTMLDivElement;
	#DOMimg: HTMLImageElement;

	constructor(id: number) {
		this.#id = id;
		this.#imgPath = `img-${id}.jpg`;

		// <div> member
		this._DOMcard = document.createElement("div");
		this._DOMcard.classList.add("card");

		// <img> member
		this.#DOMimg = document.createElement("img");
		this.#DOMimg.setAttribute("src", this.#imgPath);
		this.#DOMimg.setAttribute("alt", this.#imgPath); // fix description
		this._DOMcard.appendChild(this.#DOMimg);

		// not appended to the body yet

		// listeners
		this.handleClick = this.handleClick.bind(this);
		this._DOMcard.addEventListener("click", this.handleClick);
	}

	handleClick() {
		console.log(this.#id + " clicked!");
	}

	getDOMcard(): HTMLDivElement { return (this._DOMcard) };
}
