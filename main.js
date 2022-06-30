const moods = ['happy', 'sad', 'lost', 'helpless', 'determined', 'hyped', 'focused'];
const animals = ['alpa', 'sheep', 'finch', 'goat', 'whale', 'dolphin', 'puppy'];
const costumes = ['pajama', 'shirt', 'jersey', 'hoodie', 'slippers'];
const favFoods = ['dumpling', 'home fries', 'omelet', 'chicken fajita', 'taco'];

function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

let mood = getRandomElement(moods);
let animal = getRandomElement(animals);
let costume = getRandomElement(costumes);
let favFood = getRandomElement(favFoods);

console.log(`Hi this is a random message generated! I am a robot and I am currently ${mood} for no reason. Do you know I have a ${animal}? It is a digital one tho, and I have decorated them with a ${costume}. Cute isn't it? Btw, my favorite food is ${favFood}. Maybe we should dine out some day? Yeah kinda weird to dine out with a robot but any how...`)