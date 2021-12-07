/* Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds. */

const firstPosition = {
  time: 1637074462,
  altitude: 1100,
};
const secondPosition = {
  time: 1637074558,
  altitude: 2200,
};

const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  let time = secondPosition.time - firstPosition.time;
  let distance = secondPosition.altitude - firstPosition.altitude;

  return Math.round((distance / time) * 10) / 10;
};

console.log(getAverageSpeed(firstPosition, secondPosition)); // answer is 11.5
