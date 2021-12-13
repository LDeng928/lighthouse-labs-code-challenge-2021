/* Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, missionData with the missionData object.

Each message should be parsed using the same structure as the first challenge; */

// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  let newObject = new Object();
  let allMessages = exchanges.reduce((previousValue, currentValue) => {
    return [...previousValue, `${currentValue.origin}: ${currentValue.message}`];
  }, []);
  newObject.transcript = allMessages;
  newObject.missionData = missionData;
  return newObject;
};

// Example data
const exchanges = [
  { origin: 'MC', message: 'So how is it out there?' },
  { origin: 'Shuttle', message: "Oh it's pretty nice!" },
  { origin: 'MC', message: 'Did you like the challenges?' },
];

const missionData = {
  astro: ['...', '...'],
  bio: ['...'],
  physics: ['...'],
};

console.log(parseMissionSummary(exchanges, missionData));

// Output
/* 
{
  transcript: [
    'MC: So how is it out there?',
    "Shuttle: Oh it's pretty nice!",
    'MC: Did you like the challenges?'
  ],
  missionData: { 
    astro: [ '...', '...' ], 
    bio: [ '...' ], 
    physics: [ '...' ] }
} 
*/
