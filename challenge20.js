/* 
Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values. 
*/

// Utility function to determine if two objects are equal
function areEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key].length) {
      return false;
    }
  }
  return true;
}

const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  return speed <= checks.maxSpeed && speed >= checks.minSpeed && areEqual(checks.dataEntries, missionData);
};

// Example - everything is right
const speed = 60;
const missionData = {
  astro: ['...', '...'],
  bio: ['...'],
  physics: ['...'],
};

const checks = {
  maxSpeed: 50,
  minSpeed: 20,
  dataEntries: {
    astro: 2,
    bio: 1,
    physics: 1,
  },
};

console.log(confirmReentryPlans(speed, missionData, checks)); // => true
