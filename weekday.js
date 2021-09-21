const prompt = require("prompt-sync")();

const num = Number(prompt("Please enter a number: "));

if (num === 1) {
	console.log("It is Monday");
} else if (num === 2) {
	console.log("It is Tuesday");
} else if (num === 3) {
	console.log("It is Wednesday");
} else if (num === 4) {
	console.log("It is Thursday");
} else if (num === 5) {
	console.log("It is Friday");
} else if (num === 6) {
	console.log("It is Saturday");
} else if (num === 7) {
	console.log("It is Sunday");
} else {
	console.log("Error: Invalid Number.");
}
