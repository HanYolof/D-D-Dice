//D&D Dice front end elements

let dices = document.getElementById("dices").value;
let sides = document.getElementById("sides").value;
let extras = document.getElementById("extras").value;

//Elements having effects with front end

//Add listeners to page on load
window.addEventListener("load", (e) => {
	buttonPressed();
	captureInputValues();
});

//Map all buttons to NodeList
const buttons = document.querySelectorAll("button");

//Add listener -> Make activeButton = button pressed
const buttonPressed = () => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", (evt) => {
			activeButton = evt.target;
			activeCalculator = new Calculator();
			totalToFront();
			totalToFrontArray();
			datalist();
		});
	}
};

//Capture input values and set listeners

const inputValues = document.querySelectorAll("input");

const captureInputValues = () => {
	for (let i = 0; i < inputValues.length; i++) {
		inputValues[i].addEventListener("input", (evt) => {
			dices = document.getElementById("dices").value;
			sides = document.getElementById("sides").value;
			extras = document.getElementById("extras").value;
		});
	}
};

//Move results to front end

const totalToFront = () => {
	let totalToFront = document
		.getElementById("total")
		.appendChild(document.createTextNode("p"));
	totalToFront.textContent = activeCalculator.total + "-";
};

const totalToFrontArray = () => {
	let totalToFrontArray = document
		.getElementById("rolls")
		.appendChild(document.createTextNode("p"));
	totalToFrontArray.textContent = activeCalculator.customDice + "-";
};

const datalist = () => {
	let selectList = document.getElementById("select");

	for (item of activeCalculator.customDice) {
		let purkkaviritys = (selectList.options = new Option(
			item,
			"x",
			true,
			true
		));
		selectList.appendChild(purkkaviritys);
	}
};
