const prompt = require("prompt-sync")();

const num1 = Number(prompt("Please enter the first number: "));
const operation = prompt("Please enter an opertaiton (+, -, *, /): ");
const num2 = Number(prompt("Please enter the second number: "));

if (isNaN(num1)) {
	console.log("Error: The First Number is not a valid number.");
} else if (isNaN(num2)) {
	console.log("Error: The Second Number is not a valid number.");
} else if (operation === "+") {
	const result = num1 + num2;
	console.log("Your result is:", result);
} else if (operation === "-") {
	const result = num1 - num2;
	console.log("Your result is:", result);
} else if (operation === "*") {
	const result = num1 * num2;
	console.log("Your result is:", result);
} else if (operation === "/") {
	const result = num1 / num2;
	console.log("Your result is:", result);
} else {
	console.log("Error: Invalid operation.", operation);
}
