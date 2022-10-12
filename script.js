//D&D style random dice
//Base program ------------------------------------

//Setting total to 0 - will be mutated based on roll outcomes
let total = 0;
let totalArray = [];

//Dice roll function
const diceRoll = (num) => {return 1 + Math.floor(Math.random() * num);};

//Custom dice roll
const customRoll = () => diceRoll(document.getElementById('sides').value);

//Initialize empty array and store custom rolls based on dices value
// const emptyArray = Array.from({length:document.getElementById('dices').value}, () => customRoll(document.getElementById('dices').value));

//This array works with button
// const trueArray = Array.from({length:document.getElementById('dices').value}, (v = 0) => v);

//Extras -----------------------------------------

//Check if total is number or array and give out single value

const test = () => {
	if(typeof total === 'number') {
		total = total;
	} else {
		total = totalArray.reduce((a, b)=> a + b, 0);
	}
	return total
}

//Buttons

const dice4 = document.getElementById('4sided').addEventListener('click', e => total = diceRoll(4) + Number(document.getElementById('4sidedextra').value));
const dice6 = document.getElementById('6sided').addEventListener('click', e => total = diceRoll(6) + Number(document.getElementById('6sidedextra').value));
const dice8 = document.getElementById('8sided').addEventListener('click', e => total = diceRoll(8) + Number(document.getElementById('8sidedextra').value));
const dice12 = document.getElementById('12sided').addEventListener('click', e => total = diceRoll(12) + Number(document.getElementById('12sidedextra').value));
const dice20 = document.getElementById('20sided').addEventListener('click', e => total = diceRoll(20) + Number(document.getElementById('20sidedextra').value));

// const diceCustom = document.getElementById('test').addEventListener('click', e => console.log(emptyArray.map(x => x + customRoll(document.getElementById('dices').value), 0)));

const diceCustom2 = document.getElementById('test').addEventListener('click', e => console.log(test()));

// const diceCustom3 = document.getElementById('test').addEventListener('click', e => total = trueArray.map(x => x + customRoll(document.getElementById('dices').value), 0));

const diceCustom4 = document.getElementById('test').addEventListener('click', e => console.log(total));

const diceCustom5 = document.getElementById('test').addEventListener('click', e => totalArray = Array.from({length:document.getElementById('dices').value}, () => customRoll(document.getElementById('dices').value)));
 

// test(); //Workkaa


// console.log(total);
// console.log(totalRolls);


//To HTML code

// const totalOutcome = () => {
// 	let totalToFront = document.getElementById('total').appendChild(document.createElement('p'));
// 	totalToFront.textContent = total;
// };

// const totalOutcomeAll = () => {
// 	let totalAllToFront = document.getElementById('rolls').appendChild(document.createElement('p'));
// 	totalAllToFront.textContent = diceCustom;
// };

// const randomizeButton = document.querySelector('button').addEventListener('click', e => totalOutcome());


// Removals --------------------------

// const dices = document.getElementById('dices').value;
// const sides = document.getElementById('sides').value;

//Legacy - alternative to custom dice rolls array---

//Initialize array for total rolls
// totalRolls = [];

//For loop to push the custom dice roll values to the array
// for(let i=0; i<dices;i++){totalRolls.push((customRoll(dices)));};

//Standard roll calculcations ----------------------

//Standard rolls based on D&D dices
// const rollDice4 = () => diceRoll(4);
// const rollDice6 = () => diceRoll(6);
// const rollDice8 = () => diceRoll(8);
// const rollDice12 = () => diceRoll(12);
// const rollDice20 = () => diceRoll(20);

// const diceCustom = document.getElementById('test').addEventListener('click', e => console.log(diceRoll(document.getElementById('sides').value)));


//Array to map the real values

//Tää saatiin toimii nii et se randomizee uusiks joka button pressil

// const totalRolls = emptyArray.map(x => x + customRoll(document.getElementById('dices').value), 0);

//Tää ei viel toimi

//Calculate total outcome of the custom rolls 
// const total = totalRolls.reduce((a, b)=> a + b, 0);

