//D&D Dice front end elements

//Buttons

//Toimii
// const diceCustom = document.getElementById('custom').addEventListener('click', () => {totalArray = Array.from({length:document.getElementById('dices').value},() => diceRoll(document.getElementById('sides').value, Number(document.getElementById('extra').value)));total = totalArray.reduce((a, b)=> a + b, 0);outcomeToFront();outcomeToFrontArray();});

//Ei toimi - toimii osittain
const diceCustom = document.getElementById('custom').addEventListener('click', () => {totalArray = Array.from({length:document.getElementById('dices').value}, () => new Calculator(document.getElementById('sides').value, Number(document.getElementById('extra').value))); test2();});

//Toimii
const calculator4 = document.getElementById('4sided').addEventListener('click', () => {new Calculator(4, Number(document.getElementById('extra').value)); outcomeToFront();outcomeToFrontArray()});
const calculator6 = document.getElementById('6sided').addEventListener('click', () => {new Calculator(6, Number(document.getElementById('extra').value)); outcomeToFront();outcomeToFrontArray()});
const calculator8 = document.getElementById('8sided').addEventListener('click', () => {new Calculator(8, Number(document.getElementById('extra').value)); outcomeToFront();outcomeToFrontArray()});
const calculator12 = document.getElementById('12sided').addEventListener('click', () => {new Calculator(12, Number(document.getElementById('extra').value)); outcomeToFront();outcomeToFrontArray()});
const calculator20 = document.getElementById('20sided').addEventListener('click', () => {new Calculator(20, Number(document.getElementById('extra').value)); outcomeToFront();outcomeToFrontArray()});



//Calculations to front end

const outcomeToFront = () => {
	totalToFront = document.getElementById('total').appendChild(document.createTextNode('p'));
	totalToFront.textContent = total + "-";};

const outcomeToFrontArray = () => {
	totalToFrontArray = document.getElementById('rolls').appendChild(document.createTextNode('p'));
	totalToFrontArray.textContent = totalArray + "-";};


//REMOVALS

// const dice4 = document.getElementById('4sided').addEventListener('click', () => {total = diceRoll(4, Number(document.getElementById('extra').value)); convert(); outcomeToFront();outcomeToFrontArray();});
// const dice6 = document.getElementById('6sided').addEventListener('click', () => {total = diceRoll(6, Number(document.getElementById('extra').value)); convert(); outcomeToFront();outcomeToFrontArray();});
// const dice8 = document.getElementById('8sided').addEventListener('click', () => {total = diceRoll(8, Number(document.getElementById('extra').value)); convert(); outcomeToFront();outcomeToFrontArray();});
// const dice12 = document.getElementById('12sided').addEventListener('click', () => {total = diceRoll(12, Number(document.getElementById('extra').value)); convert(); outcomeToFront();outcomeToFrontArray();});
// const dice20 = document.getElementById('20sided').addEventListener('click', () => {total = diceRoll(20, Number(document.getElementById('extra').value)); convert(); outcomeToFront();outcomeToFrontArray();});
