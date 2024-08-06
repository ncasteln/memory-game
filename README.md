# memory-game

Goal of this project is to create a simple memory-game, in which the player has to guess the pairs having only a certain number of attempts. The main pourpose of this project is return into frontend topics that I've already learned, such as HTML, CSS, JavaScript and TypeScript. The project is bootstrapped using [Vite](https://vitejs.dev/) and using a dockerized environment created by myself, from this [github repo](https://github.com/ncasteln/vite-boilerplate/).

## Concept revisited
### CSS image sizing and responsivness

### JavaScript classes
I tried to encapsulate as much element as possible inside the classes: `Game` which holds the game logic. The `Game` holds an array of `Card` instances, and each of it holds an `Image` instance. A performance improvement could be done by not creating the event listener function for each Card instance, but share the same method.

### Creation of a state handling
The game state is handled inside the `Game` class. To let the game restart a callback function is registered at the creatino of the `Game` instance and called when the game ends.

### TypeScript
Using TypeScript in a small project like this doesn't show too many benefits, but it is still very useful to catch some little bug related to type checking and return values.
