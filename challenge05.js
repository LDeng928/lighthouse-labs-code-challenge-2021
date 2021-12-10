const addJobToAstronaut = (astronaut, job) => {
  // Code here!
  const newAstronaut = {
    ...astronaut,
    job: job,
  };

  return newAstronaut;
  // Remember to return a value!
};

const exampleAstronaut = {
  firstName: 'Chris',
  lastName: 'Hadfield',
  nickname: 'Space Oddity',
  prefix: 'Astronaut',
};

console.log(addJobToAstronaut(exampleAstronaut, 'Shuttle DJ'));
