const exampleAstronaut = {
  firstName: 'Yuri',
  lastName: 'Gagarin',
  nickname: 'First!',
  prefix: 'Cosmonaut',
};

const generateAstronautTag = (astronaut) => {
  // Code here!
  let result = ``;
  let keysArray = Object.keys(astronaut);

  let firstName = '';
  let lastName = '';
  let nickname = '';
  let prefix = '';

  for (let i of keysArray) {
    if (keysArray[i] === 'firstName') {
      firstName = keysArray[i];
    } else if (keysArray[i] === 'lastname') {
      lastName = keysArray[i];
    } else if (keysArray[i] === 'nickname') {
      nickname = keysArray[i];
    } else if (keysArray[i] === 'prefix') {
      prefix = keysArray[i];
    }
  }

  result += `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`;

  console.log(result);

  return result;
  // Remember to return a value!
};

const exampleAstronaut = {
  firstName: 'Yuri',
  lastName: 'Gagarin',
  nickname: 'First!',
  prefix: 'Cosmonaut',
};

console.log(generateAstronautTag(exampleAstronaut)); // =>  Cosmonaut: Yuri "First!" Gagarin
