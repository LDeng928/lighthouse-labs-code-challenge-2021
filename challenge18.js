/* Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts! */

const listOfChoices = ['Poutine', 'Poutine', 'Poutine', 'Smoked Meat', 'Smoked Meat'];

const listOfChoices2 = ['Poutine', 'Poutine', 'Poutine', 'Smoked Meat', 'Smoked Meat', 'Smoked Meat', 'Smoked Meat', 'Smoked Meat'];

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
  maxCount = 0;

  // Create the object for the lunch choice
  const countObject = listOfChoices.reduce(calculate_frequency, {});

  // Generate the keys array
  const keys = Object.keys(countObject);

  // Loop through the keys array and find the maxCount
  keys.map((key) => {
    if (countObject[key] > maxCount) {
      maxCount = countObject[key];
      return maxCount;
    }
  });

  // Using the maxCount to locate the object key
  for (const [choice, frequency] of Object.entries(countObject)) {
    if (frequency === maxCount) {
      return choice;
    }
  }
};

console.log(chooseLunchWinner(listOfChoices)); // => Poutine
console.log(chooseLunchWinner(listOfChoices2)); // => Smoked Meat
