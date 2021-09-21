const prompt = require("prompt-sync")();

const weight = Number(prompt("Please enter Earth weight: "));
const planetNum = Number(prompt("Please enter the Planet number: "));

if (planetNum === 1) {
	console.log("Your Venus weight is", weight * 0.78);
} else if (planetNum === 2) {
	console.log("Your Mars weight is", weight * 0.39);
} else if (planetNum === 3) {
	console.log("Your Jupiter weight is", weight * 2.65);
} else if (planetNum === 4) {
	console.log("Your Saturn weight is", weight * 1.17);
} else if (planetNum === 5) {
	console.log("Your Uranus weight is", weight * 1.05);
} else if (planetNum === 6) {
	console.log("Your Neptune weight is", weight * 1.23);
} else {
	console.log("Error Invalid Planet Number.");
}
