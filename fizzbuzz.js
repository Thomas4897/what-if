const prompt = require("prompt-sync")();

const num = Number(prompt("Please enter a number: "));
const remainderThree = num % 3;
const remainderFive = num % 5;

if (remainderThree === 0 && remainderFive === 0) {
	console.log("fizzbuzz");
} else if (remainderThree === 0) {
	console.log("fizz");
} else if (remainderFive === 0) {
	console.log("buzz");
} else {
	console.log("Error Not Divisble by 3 or 5.");
}
