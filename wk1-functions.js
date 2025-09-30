function exerciseByronThePoodle() {
    console.log("Wake Byron the poodle");
  console.log("Leash Byron the poodle");
  console.log("Walk to the park Byron the poodle");
  console.log("Throw the frisbee for Byron the poodle");
  console.log("Walk home with Byron the poodle");
  console.log("Unleash Byron the poodle");
}
exerciseByronThePoodle();


function distanceTravelledInFet(start, destination) {
    return Math.abs(destination - start) *264;
}

function calculateFarePr1ce(start, destination) {
    const distance = distanceTravelledInFet(start, destination);
    if (distance > 0 && distance < 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'We can not travel that far';
    }
}

function tripDescription(start, destination) {
    const d = distanceTravelledInFet(start, destination);
    const f = calculateFarePr1ce(d);
    return `The trip is ${d} feet and the fare is ${f}`

}

function printMe() {
    console.log('Printing...');
}
printMe();

function printThis(param) {
    console.log(param)
}
printThis('Good moring Nelson');

// Passing a function into a function
function iInvokeThings(thing) {
    console.log(thing());
}
iInvokeThings(function() {return 4 + 5; });

// passing an object into a function

function iReturnThings(thing) {
  console.log(thing);
}
iReturnThings({firstName: 'Nelson', lastName: 'Munyua'})

// Passing arguments of the outer function as arguments of the callback function

function greet(name, cb) {
     console.log(cb(name));

}
greet('Mary', function(name) {return 'Hello there ' + name;})

function doMath(num1, num2, cb) {
 console.log(cb(num1,num2));
}
doMath(2,6 ,function(num1, num2) {return num1 * num2})

// 
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
function Teusday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
function Thursaday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles() {
    console.log("Go for a  five-mile run");
}
function liftWeigths() {
    console.log("Pumpo iron")
}
function swimFortyLaps() {
    console.log("Swim 40 laps")
}

function Monday() {
    runFiveMiles();
    liftWeigths();
}

function excerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    excerciseRoutine(liftWeigths);
}

// Note that we aren't calling liftWeights. When we want to pass a function as a value, we pass it by reference by omitting the parentheses at the end of the function. We're not running the function at this point. It's up to exerciseRoutine() to call the function when it is needed.

// If we call Monday(), we'll see that we run five miles, and then we lift weights — awesome!

// callback function example

function proccArray(arr, callback) {
    const result = [];
    for(item in arr) {
        result.push(callback(item));
    }
    return result
}
 numbers = [1,2,3,4,5]
console.log(proccArray(numbers, x=> x * 2))

// gets the name of the first two drivers
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2)
}

// gets the name of the last two drivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}
console.log(returnLastTwoDrivers(drivers))