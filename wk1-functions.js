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