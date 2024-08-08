import { Image } from "./Image";

export class Card {
	#id: number;
	#imgId: number;
	#imgPath: string;
	#DOMcard: HTMLDivElement;
	#isSelected: boolean;
	#isEnabled: boolean;
	#frontImage: Image;
	#backImage: Image;

	constructor(id: number, imgId: number) {
		this.#id = id;
		this.#imgId = imgId;
		this.#imgPath = `img-${this.#imgId}.jpg`;
		this.#isSelected = false;
		this.#isEnabled = true;
		this.#frontImage = new Image(this.#imgPath, "front");
		this.#backImage = new Image(`retro.jpg`, "back");

		this.#DOMcard = document.createElement("div");
		this.#DOMcard.classList.add("card");
		this.#DOMcard.appendChild(this.#backImage.getDOMdiv());
		this.#DOMcard.appendChild(this.#frontImage.getDOMdiv());
	}

	getId(): number { return (this.#id) };
	getImgId(): number { return (this.#imgId) };
	getImgPath(): string { return (this.#imgPath) };
	getDOMcard(): HTMLDivElement { return (this.#DOMcard) };
	getFront(): Image { return (this.#frontImage) };
	getBack(): Image { return (this.#backImage) };
	isEnabled(): boolean { return (this.#isEnabled) };

	toggleIsSelected(): void {
		this.#isSelected = !this.#isSelected;
		this.getFront().getDOMdiv().classList.toggle("flipped");
		this.getBack().getDOMdiv().classList.toggle("flipped");
	};

	disable(): void { this.#isEnabled = false; };
}
