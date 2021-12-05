
const listAstronautJobs = (roster) => {
    // Code here!
    let newArray = [];
    for (let i = 0; i < roster.length; i++) {
        newArray.push(roster[i].job);
        return newArray;
    }
}
  
const exampleRoster = [
    {
        a: 1,
        job:"Shuttle DJ"
    },
    {
        a: 2,
        job:"Space Cook"
    }
] 
      
console.log(listAstronautJobs(exampleRoster))
      