/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: this keyword will default to the window object if no other rules apply. Strict mode will default it to undefined.

* 2. Implicit Binding: Implicit means automatic. This is when a function is invoked, you look to left of the dot to see the "this" keyword refers to. This is the most common method.

* 3. Explicit Binding: You can explicitly tell JS engine to point to a certain value using call, apply, or bind. Call, apply, and bind can be used to invoke a funcion with a specific value for "this".

* 4. New Binding: Using the new keyword constructs a new object, and "this" points to it. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function game(){
    console.log(this.broke);
}
game();
const broke = "This game is broke";

// Principle 2
// code example for Implicit Binding

const game1 = {
    name: 'Fortnite',
    type: 'Shooter',
    rating: 8,
    opinion: function(){
        return `${this.name} is a ${this.type} and I give it a ${this.rating} out of 10`;
    }
}
console.log(game1.opinion());

// Principle 3
// code example for New Binding

function Game(saying){
    this.thing = saying;
}

let myGame = new Game('Overwatch');
console.log(`My favourite game is ${myGame.thing}`);

// Principle 4
// code example for Explicit Binding

function gameSalary(){
    console.log(`${this.name} players can make up to ${this.salary} not including bonuses`);
}

const game2 = {
    name: 'Fortnite',
    salary: '$40,000'
}
gameSalary.call(game2);