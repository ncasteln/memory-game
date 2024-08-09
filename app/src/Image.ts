export class Image {
	#path: string;
	#className: string;
	#DOMdiv: HTMLDivElement;
	#DOMimg: HTMLImageElement;

	constructor(path: string, className: string) {
		this.#path = path;
		this.#className = className;

		// <div>
		this.#DOMdiv = document.createElement("div");
		this.#DOMdiv.classList.add(className);

		// <img>
		this.#DOMimg = document.createElement("img");
		this.#DOMimg.classList.add(this.#className + "Img");
		this.#DOMimg.setAttribute("src", this.#path);
		this.#DOMimg.setAttribute("alt", `Bird Card ${this.#path}`);
		this.#DOMimg.setAttribute("draggable", "false");

		this.#DOMdiv.appendChild(this.#DOMimg);
	}

	getDOMdiv(): HTMLDivElement { return (this.#DOMdiv); };
	getPath(): string { return (this.#path); };
}
