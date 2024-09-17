# memory-game

Goal of this project is to create a simple memory-game, in which the player has to guess the pairs having only a certain number of attempts. The main pourpose of this project is return into frontend topics that I've already learned, such as HTML, CSS, JavaScript and TypeScript. The project is bootstrapped using [Vite](https://vitejs.dev/) and using a dockerized environment created by myself, from this [github repo](https://github.com/ncasteln/vite-boilerplate/).

## Concept revisited
### JavaScript classes
I tried to encapsulate as much element as possible inside the classes. The `Game` holds the logic of the game, an array of `Card` instances, and each of it holds an `Image` instance. Between arrow functions and anonymous function, I preferred the use of `bind()` in the  `addEventListener()`; although we don't see any difference, this would result in an improved performance in big scale projects.
```javascript
document.getElementById("button").addEventListener("click", function() { /* Anonymous function as callback */ });

document.getElementById("button").addEventListener("click", () => handleClick());
handleClick() { /* Arrow function handler */ };

document.getElementById("button").addEventListener("click", handleClick.bind(this, i));
handleClick(i) {
	/* Bound function handler
	this is now bound with the current element
	i is passed as an extra argument if needed */
}
```

### Creation of a state handling
The game state is handled inside the `Game` class. To let the game restart a callback function is registered at the creation of the `Game` instance and called when the game ends. This function renders a button, which, when clicked, recalls `init()`, deleting itself and restarting the game.

### TypeScript
Using TypeScript in a small project like this doesn't show too many benefits, but it is still very useful to catch some little bug related to type checking and return values, prevent some undefined behavior and `null` checkings.

### CSS grid and responsivness
To achieve a responsive grid layout there are multiple approach. First, I followed a first-small-devices-approach which starts from the smallest screen we can have, that has to be resized for bigger screens. This approach is quite useful because I first make more confortable the view in a small screen with 'less' space.
To handle the grid itself I used the property `grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));` (notice the `50px`). [This](https://www.imarketinx.de/artikel/responsive-image-gallery-with-css-grid.html) article explains about the `auto-fill` and `auto-fit` properties and how they actually work. For other media queries, the `minmax()` function should accept as first argument a bigger value.

## Tri it out
The project is built iusing a simple docker container. After cloning just `make` and access it thorugh http://localhost:8080.
```bash
git clone https://github.com/ncasteln/memory-game.git;
cd memory-game && make;
```
