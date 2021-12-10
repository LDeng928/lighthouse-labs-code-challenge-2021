const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  let celsius = Math.round((temperature - 32) * (5 / 9));
  let meters = Math.round(windSpeed / 2.237);

  let weatherConditionObject = {};
  weatherConditionObject.temperature = celsius;
  weatherConditionObject.condition = condition;
  weatherConditionObject.windSpeed = meters;
  weatherConditionObject.windDirection = windDirection;

  return weatherConditionObject;
  // Remember to return an object!
};

const temperature = 32;
const condition = 'Sunny with small clouds';
const windSpeed = 20;
const windDirection = 'NNE';

/* 
  Output
    {
      temperature:0,
      windSpeed:9,
      windDirection:"NNE",
      condition:"Sunny with small clouds"
    }
*/

console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection));
