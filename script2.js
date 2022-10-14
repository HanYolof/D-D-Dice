//D&D Dice front end elements

//Elements having effects with front end

//Add listeners to page on load
window.addEventListener('load', () => {buttonPressed(); activateCalculators()});

//Map all buttons to NodeList
const buttons = document.querySelectorAll('button');

//Add listener -> Make activeButton = button pressed
const buttonPressed = () => {
for(let i=0; i<buttons.length;i++) {
	buttons[i].addEventListener('click', (evt) => activeButton = evt.target)
}};

//Add listener -> activate Calculators
const activateCalculators = () => {
for(let i=0; i<buttons.length;i++) {
	buttons[i].addEventListener('click', (evt) => activeCalculator = new Calculator)
}};

//Add listener -> Move totals to front end
const activateCalculators = () => {
for(let i=0; i<buttons.length;i++) {
	buttons[i].addEventListener('click', (evt) => {totalToFront(); totalToFrontArray();})
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
