const averageWindSpeed = (weatherEntries) => {
    // Code here!
    let weatherEntryLength = weatherEntries.length;
    
    let sumOfSpeed = 0;
    
    for (let i = 0; i < weatherEntryLength; i++) {
      sumOfSpeed += weatherEntries[i].windSpeed;
    }
    
    let avgWindSpeed = Math.round(sumOfSpeed / weatherEntryLength);
    return avgWindSpeed;
  }

  const exampleEntries = [
    { 
      temperature:0, 
      weather:"sunny", 
      windDirection: "NNE", 
      windSpeed:24
    },
    { 
      temperature:10, 
      weather:"cloudy", 
      windDirection: "NNE", 
      windSpeed:9 
    }
  ] 

  console.log(averageWindSpeed(exampleEntries));