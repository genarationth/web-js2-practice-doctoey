//
/*Challenge 2: 

Create an information card
Create a card holding 3 pieces of information about a person, such as Name, Location, and Hobby.
Each piece of information should be a variable.
Display the card with the information in the correct place.

Example: “Hi, my name is John. I live in South Africa and enjoy drinking homemade wine.”

*/
//แบบแรก
let person = {
    Name: 'Cheewathun',
    Location: 'Yellow River',
    Hobby: 'Sleep'
}

console.log(`Hi, my name is ${person.Name}. I live in ${person.Location} and enjoy ${person.Hobby}.`)



//แบบสอง
let person = (Name, Location, Hobby) => {
  return `Hi, my name is ${Name}. I live in ${Location} and enjoy ${Hobby}.`
}

console.log(person('Cheewathun', 'Thailand', 'Sleep'))
