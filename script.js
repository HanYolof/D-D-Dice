//D&D Dice program

//Base program

//Array builder

const arrayBuilder = () => {

	let totalArray = [];	

	if(activeButton.id == "custom") {
		totalArray = Array.from({length:dices}).fill(0);
	} else {
		totalArray = [1].fill(0);
	}
	return totalArray;
};

//Value capturation

const valueCapture = () => {

	let num = 0;

	switch(activeButton.id) {
		case "custom":
		num = Number(sides);
		break;
		case "4sided":
		num = 4;
		break;
		case "6sided":
		num = 6;
		break;
		case "8sided":
		num = 8;
		break;
		case "12sided":
		num = 12;
		break;
		case "20sided":
		num = 20;
		break;
		default:
		num = 0;
	}

	return num;
};

//Dice roll 
const diceRoll = (num, extra) => 
	{if(num == 0){
	return Math.floor(Math.random() * num + extra);
	} else {
	return 1 + Math.floor(Math.random() * num + extra);
	}
};

//Calculator

class Calculator{
	constructor(num, extra) {
		
		let total = 0;

		this.array = arrayBuilder();

		this.numberOfSides = valueCapture();
		num = this.numberOfSides;

		this.extra = Number(extras);
		extra = this.extra;

		this.customDice = this.array.map((a) => diceRoll(num, extra));

		this.total = this.customDice.reduce((a, b)=> a + b, 0);	
	}
};

