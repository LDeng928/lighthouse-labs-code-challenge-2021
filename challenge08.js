const countActiveAstronauts = (roster) => {
  // Code here!
  return roster.length;
};

const exampleRoster = [
  {
    firstName: 'Chris',
    lastName: 'Hadfield',
    nickname: 'Space Oddity',
    prefix: 'Astronaut',
    job: 'Shuttle DJ',
  },
];

console.log(countActiveAstronauts(exampleRoster)); // => 1
