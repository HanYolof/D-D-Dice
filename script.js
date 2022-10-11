//D&D style random dice

const dices = document.getElementById('dices').value;
const sides = document.getElementById('sides').value;

//Base program ------------------------------------

//Dice roll function
const diceRoll = (num) => {
	return 1 + Math.floor(Math.random() * num);
};

//Custom dice rolls -------------------------------

//Custom dice roll
const customRoll = () => diceRoll(sides);

//Empty array to store index based on dices length
const emptyArray = Array.from({length:dices}, (v, i) => i);

//Array to map the real values
const totalRolls = emptyArray.map(x => x + customRoll(dices));

//Calculate total outcome of the custom rolls 
const total = totalRolls.reduce((a, b)=> a + b, 0);

//Legacy - alternative to custom dice rolls--------

//Initialize array for total rolls
// totalRolls = [];

//For loop to push the custom dice roll values to the array
// for(let i=0; i<dices;i++){totalRolls.push((customRoll(dices)));};

//Standard roll calculcations ----------------------

//Standard rolls based on D&D dices
const rollDice4 = () => diceRoll(4);
const rollDice6 = () => diceRoll(6);
const rollDice8 = () => diceRoll(8);
const rollDice12 = () => diceRoll(12);
const rollDice20 = () => diceRoll(20);

//Extras -----------------------------------------

//Buttons

const dice4 = document.getElementById('4sided').addEventListener('click', e => console.log(diceRoll(4) + Number(document.getElementById('4sidedextra').value)));
const dice6 = document.getElementById('6sided').addEventListener('click', e => console.log(diceRoll(6) + Number(document.getElementById('6sidedextra').value)));
const dice8 = document.getElementById('8sided').addEventListener('click', e => console.log(diceRoll(8) + Number(document.getElementById('8sidedextra').value)));
const dice12 = document.getElementById('12sided').addEventListener('click', e => console.log(diceRoll(12) + Number(document.getElementById('12sidedextra').value)));
const dice20 = document.getElementById('20sided').addEventListener('click', e => console.log(diceRoll(20) + Number(document.getElementById('20sidedextra').value)));


console.log(total);
console.log(totalRolls);


//To HTML code

const totalOutcome = () => {
	let totalToFront = document.getElementById('total').appendChild(document.createElement('p'));
	totalToFront.textContent = total;
};

const totalOutcomeAll = () => {
	let totalAllToFront = document.getElementById('rolls').appendChild(document.createElement('p'));
	totalAllToFront.textContent = totalRolls;
};

const randomizeButton = document.getElementById('test').addEventListener('click', e => totalOutcomeAll() + totalOutcome());

