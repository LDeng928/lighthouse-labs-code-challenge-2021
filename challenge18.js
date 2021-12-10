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
  //Code here!
  maxElement = '';

  let countObject = listOfChoices.reduce(calculate_frequency, {});

  // Generate the keys array
  const keys = Object.keys(countObject);

  // Loop through the keys array and find the maxElement
  for (let i = 0; i < keys.length; i++) {
    if (countObject[keys[i]] > countObject[keys[i + 1]]) {
      maxElement = keys[i];
    } else {
      maxElement = keys[i + 1];
    }
    return maxElement;
  }
};

console.log(chooseLunchWinner(listOfChoices)); // => Stale Bread
