/* 
Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values. 
*/

const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  maxSpeed = checks.maxSpeed;
  minSpeed = checks.minSpeed;
  if (missionData.astro) {
    astroLength = missionData.astro.length;
  }
  if (missionData.bio) {
    bioLength = missionData.bio.length;
  }
  if (missionData.physics) {
    physicsLength = missionData.physics.length;
  }

  checkAstroLength = checks.dataEntries.astro;
  checkBioLength = checks.dataEntries.bio;
  checkPhysicsLength = checks.dataEntries.physics;

  if (speed >= minSpeed && speed <= maxSpeed && astroLength === checkAstroLength && bioLength === checkBioLength && physicsLength === checkPhysicsLength) {
    return true;
  } else {
    return false;
  }
};

// Example - everything is right
const speed = 40;
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
