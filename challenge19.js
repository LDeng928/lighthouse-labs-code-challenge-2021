/* Your task is to write a function that will take in a list of data entries in the shape of an array of objects. 
The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays. */

const listOfReceivedData = [
  { type: 'astro', data: 'Saturn Data' },
  { type: 'bio', data: 'Space Potatoes' },
  { type: 'physics', data: 'Lagrange Points' },
  { type: 'bio', data: 'OMG Tardigrades' },
  { type: 'physics', data: 'Material reflectivity' },
  { type: 'astro', data: 'Mercury is not the hottest' },
];

const organizeData = (receivedData) => {
  // Use the reduce function to group each object that has the same type key-pair values and push the object data into a new array
  return receivedData.reduce((accumulated, object) => {
    if (!accumulated[object.type]) {
      accumulated[object.type] = [];
    }
    accumulated[object.type].push(object.data);
    return accumulated;
  }, {});
};

console.log(organizeData(listOfReceivedData));

// Output
// {
//   "astro":  ["Saturn Data", "Mercury is not the hottest"],
//   "bio": ["Space Potatoes", "OMG Tardigrades"],
//   "physics": ["Lagrange Points", "Material reflectivity"],
// }
