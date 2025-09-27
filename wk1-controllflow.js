function scuberGreetingForFeet(feet) {
  if (feet > 0 && feet < 400) {
    return "This one is on me";
  } else if (feet >= 2500) {
    return "No can do";
  } else if (feet >= 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (feet >= 400) {
    return "I will be twenty bucks";
  }
}
console.log(scuberGreetingForFeet(2500))

function scuberGreetingForFeet() {}
