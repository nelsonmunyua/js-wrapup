// Variable -> is acontainer in which we can store values for later retrival;
//1 .const -> mostly preffered used to declare variables
// -> can not be re-declared or reassigned
//2 .let -> can not be re-declared but can be re-assigned.

// declararation with both const & var and there use case syntax.
const firstName = 'Nelson';
let lastName = 'Munyua';
// re-assignment
lastName = 'Muigai';
console.log(lastName)

// String concatenation (+)
const greeting = "Good mornig: " + firstName;
console.log(greeting);

// string interpolation (${})

//const age = 25;
const ocupation = 'Software developer';

const bio = `My name is ${firstName} ${lastName} i am ${2025 - 2000} years old i am persuing a carrer in ${ocupation}`;

console.log(bio);
 
// String methods 
  // -> toUpperCase();
  console.log(bio.toUpperCase());
  // -> toLowerCase();
  console.log(bio.toLocaleLowerCase());
  // ->shortening string -- returning a portion of the string ie(first-character,second or 1st to 3rd)
  // This is achieved by use of either 
  // square brackets[]
  const car = 'Ferari';
  console.log(car[0]); // returns the first letter of the string -> F
  // chartAt()
  console.log(car.charAt(1)) // return the second letter of the string -> e
  // slice() takes two arguments (index of string start, index of the string end)
  console.log(car.slice()) // returns the whole string -> Ferari
  console.log(car.slice(0,3)) /// returns -> Fer

// comparison operators
  // srict equality(===)
  //strict inequality(!==)
  //loose equality(==)
  //loose inequality(!=)

  //javaScript expressions -> a unit of code that returns a value
  //types of expressions
   //-> arithmetic
   (8*8);
   //=>string
   'Hello, ' + 'world!';
   //comparison
   (2 > 1)
   //assignment
   let answer;
   answer = 43;
   //variable lookup
   const schoolName = "Moringa School";
   console.log(schoolName)

   // In javaScript the following values are falsy
   //false
   //null
   //undefined
   //0
   //NaN
   //('', "") every other value is truthy

   //Ternary Expression
   const age = 20;
   let isAdult;

   age >= 18 ? (isAdult = true) : (isAdult = false)
   console.log(isAdult); //true

   //the ternary or if ..else is only necessary if the desired return value is something other than boolean;

   const age1 = 20;
const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";

ageMessage;
//=> "Congratulations! You're an adult!"

// Nested if statement
//const age = 17;

let isAdolt, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

canWork;

// && and || operators
console.log(0 && false) //return the first evaluation that is false ->0
console.log(0 && true) //returns the first evaluation that is false ->0
console.log(true && NaN) // return ->NaN
console.log(true && !1) // false
console.log(!0 && "This is a string") // since the first evaluation is true it proccedes to evaluate the second returns -> "This is a string"
console.log(!0 && "") // returns -> ""
console.log(!0 && !!"")

// Practice with || / OR
console.log(0 || false) // evaluates and returns the first instance of truth value -> false
console.log(true || false) //->true
console.log(true || 1) // returns -> true
console.log(!true || !false) // returns true
console.log(!1 || !0) // returns -> true
