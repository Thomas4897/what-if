const prompt = require("prompt-sync")();

const num = Number(prompt("Please enter class size: "));
const divThree = num / 3;
const remainder = num % 3;
const remainderOne = (num - 4) / 3;
const remainderTwo = (num - 2) / 3;

if (num === 0 || num === 1) {
	console.log("Error: Class Size is:", num);
} else if (remainder === 0) {
	console.log(divThree + " groups of 3 and " + remainder + " groups of 2");
} else if (remainder === 1) {
	console.log(remainderOne + " groups of 3 and 2 groups of 2");
} else if (remainder === 2) {
	console.log(remainderTwo + " groups of 3 and 1 groups of 2");
} else {
	console.log("Error");
}
