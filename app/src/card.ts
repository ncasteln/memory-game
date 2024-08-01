export class Card {
	id: number;
	img: string

	constructor(id: number, img: string) {
		this.id = id;
		this.img = img;
	}

	handleClick() {
		console.log(this.id + " clicked!");
	}
}
