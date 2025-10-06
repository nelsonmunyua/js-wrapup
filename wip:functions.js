// 🚕 Practical Problem: Mini Taxi Dispatch System
// Requirements

// Drivers List

// Start with an array of drivers:

// const drivers = ["Antonia", "Nuru", "Amari", "Mo"];


// Driver Selection Functions

// Write two functions:

// returnFirstTwoDrivers(drivers) → returns the first two drivers.

// returnLastTwoDrivers(drivers) → returns the last two drivers.

// Store Functions in an Array

// Create a variable selectingDrivers that holds both functions.

// Use it to dynamically pick which selection strategy to use.

// Trip Distance

// Write a function distanceTravelledInFeet(start, destination) that calculates distance.

// Use Math.abs() so distance is always positive.

// Fare Calculation

// Write calculateFarePrice(start, destination) with the rules:

// First 400 feet → free

// 400–2000 feet → 2 cents per foot

// 2000–2500 feet → flat $25

// 2500 feet → "cannot travel that far"

// Trip Description

// Write tripDescription(start, destination) → returns:

// "The trip is X feet and the fare is $Y"


// Dispatch Function (Higher-Order Function)

// Write a function dispatchTrip(drivers, selectionFn, start, destination) that:

// Uses selectionFn to pick drivers.

// Uses tripDescription to describe the trip.

// Returns something like:

// "Drivers assigned: Nuru, Amari. The trip is 1056 feet and the fare is $13.12"

// 🎯 Your Goal

// Implement all these steps and test them with different inputs.

// Example run:

// console.log(dispatchTrip(drivers, returnFirstTwoDrivers, 34, 38));


// Expected output:

// "Drivers assigned: Antonia, Nuru. The trip is 1056 feet and the fare is $13.12"


// This problem will test:
// ✔ Arrays
// ✔ Functions
// ✔ First-class functions (functions stored in arrays and passed around)
// ✔ Function composition (functions calling other functions)
// ✔ Conditional logic & math



const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// const returnFirstTwoDrivers = (arr) => {
//     return arr.slice(0, 2);  
// }
// console.log(returnFirstTwoDrivers(drivers));

// const returnLastTwoDrivers = (arr) => {
//     return arr.slice(-2)
// }

const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);
const returnLastTwoDrivers = (arr) => arr.slice(-2);

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// calculate far price
function calculateFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return "The trip is free";
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'Can not travell that far';
    }
}

function tripDescription(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    const fare = calculateFarePrice(start, destination)

    return `The trip is ${distanceTravelled} feet and the fare is $${fare}`
}

function dispatchTrip(drivers, selectionFn, start, destination) {
    const assignedDrivers = selectionFn(drivers);
    const trip = tripDescription(start, destination)

   return `Drivers assigned: ${assignedDrivers.join(", ")}. ${trip}`
}
console.log(dispatchTrip(drivers, selectingDrivers[0], 42, 50));

function disptchTrip(drivers, selectionFn, start, destination) {
    const assignedDrivers = selectionFn(drivers);
    const trip = tripDescription(start, destination)

   return `Drivers assigned: ${assignedDrivers.join(", ")}. ${trip}`
}
console.log(dispatchTrip(drivers, selectingDrivers[0], 42, 50));