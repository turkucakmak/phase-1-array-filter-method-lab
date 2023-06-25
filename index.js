// Code your solution here
function findMatching(array,string){
   return array.filter(function (arg){
        return arg.toLowerCase() === string.toLowerCase();

    })
}

function fuzzyMatch(drivers,query){
   return drivers.filter(function (arg){
        return arg.startsWith(query);
    })
}

function matchName(driver,string){
   return driver.filter(function (arg){
        return arg.name === string

    })
}