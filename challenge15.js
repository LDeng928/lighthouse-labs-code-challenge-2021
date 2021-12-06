/* Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

A part of the code has been written for you, and it is important that it stays the same for the tests to work out.
*/

const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"

const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date() // Do not alter this line!
  
    // Code here!
    let daysRemaining;

    // Calculate the mission date
    let launch = new Date(launchDate);
    let month = launch.getUTCMonth() + 1;
    let date = launch.getUTCDate();
    
    // Calculate today's date
    let todayMonth = new Date(today).getUTCMonth() + 1;
    let todayDate = new Date(today).getUTCDate();
    
    // Calculate how many days left until mission
    daysRemaining = Math.abs(Math.round(date - todayDate));

    // Return the launch object
    let launchObject = new Object();
    launchObject.missionName = missionName;
    launchObject.daysRemaining = daysRemaining;

    return launchObject;
    
}

console.log(timeRemaining(launchDate, missionName, fakeToday));