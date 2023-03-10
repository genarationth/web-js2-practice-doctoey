/*
Challenge 1: Create an Age Calculator
Store your birth year in a variable.
Store a future year in another variable.
Calculate your possible ages for the future year and display it in the console.

Example: If you were born in 1988, then in 2026 you’ll be 37 or 38 (depending on the month in 2026).

*/

//แบบแรก 

let BirthYear = 1996;
let FutureYear = 2026;

let CurrentYear = new Date().getFullYear(); //2023
console.log(CurrentYear)

let ageInCurrentYear = CurrentYear - BirthYear;
let ageInFutureYear = FutureYear - BirthYear;
console.log(ageInCurrentYear)  //27 
console.log(ageInFutureYear)  //30

console.log(`If you were born in  ${BirthYear} then in ${FutureYear} you'll be ${ageInFutureYear} or ${(ageInFutureYear - 1)} (depending on the month in ${FutureYear} ).`);



//แบบสอง


let ageCal = (BirthYear , FutureYear) => {
    console.log(`If you were born in ${BirthYear}, then in ${FutureYear} you’ll be ${FutureYear - BirthYear} or ${FutureYear - BirthYear-1} (depending on the month in ${FutureYear}).`)
}


ageCal(1996,2026);  //29 or 30
ageCal(1988,2026);  // 37 or 38
