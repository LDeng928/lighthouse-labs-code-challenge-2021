const exampleGauge = {
  current: 0.4,
  min: 0.1,
  max: 0.9,
};

const checkGaugeStatus = (gauge) => {
  // Code here!
  let current;
  let min;
  let max;

  const keysArray = Object.keys(gauge);

  // console.log(keysArray);

  for (let i of keysArray) {
    if (keysArray[i] === 'current') {
      current = keysArray[i];
    } else if (keysArray[i] === 'min') {
      min = keysArray[i];
    } else if (keysArray[i] === 'max') {
      max = keysArray[i];
    }
  }

  const currentValue = gauge.current;
  const minValue = gauge.min;
  const maxValue = gauge.max;

  // console.log(currentValue);
  // console.log(minValue)
  // console.log(maxValue)

  if (currentValue >= minValue && currentValue <= maxValue) {
    return true;
  }

  return false;
  // Remember to return a value!
};

const exampleGauge = {
  current: 0.4,
  min: 0.1,
  max: 0.9,
};

checkGaugeStatus(exampleGauge); // => true
