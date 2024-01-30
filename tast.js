// function countDeadAnts(trail) {
    
//     let ants = trail.split(".");
   
//     ants = ants.filter(word => word !== "");

   
//     let deadAntsCount = 0;
//     for (let i = 0; i < ants.length; i++) {
//         if (ants[i].includes("ant")) {
            
//             let antOccurrences = ants[i].match(/ant/g).length;
//             deadAntsCount += antOccurrences;
//         }
//     }

//     return deadAntsCount;
// }
// let trail = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t";
// console.log("Number of dead ants:", countDeadAnts(trail));

let str = "133";

function stringToNumber(str){
    let num = parseInt(str);
    return num;
}
console.log(stringToNumber(str))