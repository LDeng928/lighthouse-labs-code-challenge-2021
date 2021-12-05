const switchToggle = (toggle) => {
    // Code here!
    return ({...toggle, isOn : !toggle.isOn});
    // Remember to return a value!
  }
  
  const someToggle = {
    name:"toggleA",
    isOn:true
  }
  
  console.log(switchToggle(someToggle));