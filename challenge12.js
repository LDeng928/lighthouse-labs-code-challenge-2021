const messages = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
  ]

const parseTranscripts = (messages) => {
    // Code here!
    let newArray = [];

    for (let i = 0; i < messages.length; i++) {
        let result = `${messages[i].origin}: ${messages[i].message}`;
        newArray.push(result);
    }
    return newArray;
  }

console.log(parseTranscripts(messages));