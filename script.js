//D&D Dice program

//Base program ------------------------------------

//Setting variables to 0 / empty array - will be mutated based on roll outcomes
let total = 0;
let totalArray = [];
let str = [];

//Dice roll function
const diceRoll = (num, extra) => 
	{if(num == 0){
	return Math.floor(Math.random() * num + extra);
	} else {
	return 1 + Math.floor(Math.random() * num + extra);
	}
};

const test = () => {
	for(let i=0; i<totalArray.length;i++){
		console.log(totalArray[i].total || totalArray[i])}};

//Tää on rikki - Jussi auta!!! (str = Array({length:totalArray.length}), ()=>) toi ei toimi ku en keksi mite siihe saatas nii et se mappaa sen totalArray[i].totalin sinne


const test2 = () => {
	for(let i=0; i<totalArray.length;i++){

		if(totalArray.length > 1) {
			str.push(totalArray[i].total)		
		}
		else{
			str = totalArray[i];
		}
	}
}



//Calculator

class Calculator {
	constructor(num, extra) {
		this.total = diceRoll(num, extra);
		total = this.total;
		totalArray = total ? [].concat(total) : [];
		
		test();

	}
};













//REMOVED ------------------------------------------


//Convert single number to array 

// const convert = () => {
// 	if(total != totalArray.reduce((a, b)=> a + b, 0)) {
// 		totalArray = [total];
// 	} else {
// 		totalArray = totalArray;
// 	}
// 	return totalArray;
// }


// const test = () => {
// 	if(typeof total === 'number') {
// 		total = total;
// 	} else {
// 		total = totalArray.reduce((a, b)=> a + b, 0);
// 	}
// 	return total
// }

//Extras on dices


//Custom dice roll
// const customRoll = () => diceRoll(document.getElementById('sides').value);

//Extras -----------------------------------------

//Check if total is number or array and give out single value

// const test = () => {
// 	if(typeof total === 'number') {
// 		total = total;
// 	} else {
// 		total = totalArray.reduce((a, b)=> a + b, 0);
// 	}
// 	return total
// }

// //Converts single number to array 

// const test2 = () => {
// 	if(total != totalArray.reduce((a, b)=> a + b, 0)) {
// 		totalArray = [total]
// 	} else {
// 		totalArray = totalArray;
// 	}
// 	return totalArray
// }

//Buttons



// const diceCustom = document.getElementById('test').addEventListener('click', e => console.log(emptyArray.map(x => x + customRoll(document.getElementById('dices').value), 0)));



// const diceCustom3 = document.getElementById('test').addEventListener('click', e => console.log('totalArray', totalArray));

// const diceCustom5 = document.getElementById('test').addEventListener('click', e => totalArray = Array.from({length:document.getElementById('dices').value}, () => customRoll(document.getElementById('dices').value)));

// const diceCustom2 = document.getElementById('test').addEventListener('click', e => console.log('total conversion', test()));
 
// const diceCustom4 = document.getElementById('test').addEventListener('click', e => console.log('totalArray to total', total = totalArray.reduce((a, b)=> a + b, 0)))

// const diceCustom6 = document.getElementById('8sided').addEventListener('click', e => console.log('totalArray conversion', test2()));

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

//Initialize empty array and store custom rolls based on dices value
// const emptyArray = Array.from({length:document.getElementById('dices').value}, () => customRoll(document.getElementById('dices').value));

//This array works with button
// const trueArray = Array.from({length:document.getElementById('dices').value}, (v = 0) => v);

// //Setting total to 0 - will be mutated based on roll outcomes
// let total = 0;
// let totalArray = [];