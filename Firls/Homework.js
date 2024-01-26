
let hisAge = 18;
let hisName = "Oleck";
let hisDepartment = "QA";

function canSmokeAgeFirst(age){

    if(age >= 18){
        console.log("You can smoke ");
        return; 
    } 
    console.log(" You are to small for smoke"); 
}

canSmokeAgeFirst(16);  

let canSmokeAgeSecond = function(age) {
    if(age >= 18){
        console.log("You can smoke ");
        return;
    }
    console.log("You are to small for smoke ");
}
canSmokeAgeSecond(86);

let canSmokeAgeThird = (age) => {
    if(age >= 18){
        console.log("You can smoke ");
        return;
    }
    console.log("You are to small for smoke ");
}
canSmokeAgeThird(66);

function allowedTOIn(name, age, department){
    if(name == "Oleck" && age == 18 && department == "QA"){  
    console.log("Welcome to Engeeniring Club");

    return;
} 
console.log(" Go learn, dude!")

}

allowedTOIn(hisName, hisAge, hisDepartment);
allowedTOIn("Volodia", 65, "student")