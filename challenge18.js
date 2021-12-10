/* Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts! */

const listOfChoices = [
  'Ceasar Salad',
  'Ceasar Salad',
  'Ceasar Salad',
  'Stale Bread',
  'Stale Bread',
  'Stale Bread',
  'Stale Bread',
  'Chicken',
  'Chicken',
  'Chicken',
  'Chicken',
  'Chicken',
  'Crab Cake',
  'Crab Cake',
  'Crab Cake',
  'Crab Cake',
  'Crab Cake',
  'Crab Cake',
];

// Utility function to calculate the frequency of an element in a array using Array.reduce
const calculate_frequency = (allChoices, choice) => {
  if (choice in allChoices) {
    allChoices[choice]++;
  } else {
    allChoices[choice] = 1;
  }
  return allChoices;
};

const chooseLunchWinner = (listOfChoices) => {
  // Initialize a global element to keep
  maxEl = '';

  // Create the object for the lunch choice
  const countObject = listOfChoices.reduce(calculate_frequency, {});

  // Generate the keys array
  const keys = Object.keys(countObject);

  // Loop through the keys array and find the maxElement
  keys.map((key, index) => {
    maxCount = countObject[key];
    maxElement = keys[index];

    if (countObject[maxElement] == maxCount) {
      maxEl = maxElement;
    }
  });

  return maxEl;
};

console.log(chooseLunchWinner(listOfChoices)); // => Crab Cake
