//D&D Dice front end elements

//Elements having effects with front end

//Add listeners to page on load
window.addEventListener('load', () => buttonPressed());

//Map all buttons to NodeList
const buttons = document.querySelectorAll('button');

//Add listeners 
const buttonPressed = () => {
for(let i=0; i<buttons.length;i++) {
	buttons[i].addEventListener('click', (evt) => {activeButton = evt.target; activeCalculator = new Calculator; totalToFront(); totalToFrontArray();})
}};

//Capture input values (needs fixing to work live)

const dices = document.getElementById('dices').value;
const sides = document.getElementById('sides').value;
const extras = document.getElementById('extra').value; 

//Move results to front end

const totalToFront = () => {
	let totalToFront = document.getElementById('total').appendChild(document.createTextNode('p'));
	totalToFront.textContent = activeCalculator.total + "-"};

const totalToFrontArray = () => {
	let totalToFrontArray = document.getElementById('rolls').appendChild(document.createTextNode('p'));
	totalToFrontArray.textContent = activeCalculator.customDice + "-"};
