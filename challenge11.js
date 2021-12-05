const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 

const bookFreePlatform = (platformList, missionDate) => {
    // Code here!
    let result = platformList.find((el) => {
        return el.bookDate == undefined;
    })

    let index = platformList.indexOf(result);

    platformList[index].bookDate = missionDate;

    return platformList;
};

console.log(bookFreePlatform(platformList, missionDate));
  