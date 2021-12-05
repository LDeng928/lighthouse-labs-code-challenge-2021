/* Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled! 

Input:
const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

Output: 
[
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:true
	},
]
*/

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

const switchAllTogglesOn = (toggleList) => {
    // Code here!
    const result = toggleList.map(element => {
        if (!element.isOn) {
            element.isOn = true;
        }
        return element;
    });

    return result;
}

console.log(switchAllTogglesOn(toggleList));