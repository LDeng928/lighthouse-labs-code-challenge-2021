const gaugeList = [
    {
      current:0.4,
      min:0.1,
      max:0.9
    },
    {
      current:1.2,
      min:0.1,
      max:0.6
    }
]



const checkAllGauges = (gaugeList) => {
    // Code here!
    let results = true;

    for (let i = 0; i < gaugeList.length; i++) {
        if (gaugeList[i].current >= gaugeList[i].min &&  gaugeList[i].current <= gaugeList[i].max) {
           results = true;
        } else {
          results = false
        }
    }
    return results;
}

console.log(checkAllGauges(gaugeList));

  