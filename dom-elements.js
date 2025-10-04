// DOM manipulation
const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}
element.append(ul);

// Add elements to the Dom using innerHTML
const main = document.getElementById("main");
main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// change proeperties on the DOM Nodes

function updateDay(day) {
    let h4 = document.querySelector('h4');
    h4.textContent = day
    h4.id = day
    h4.className = 'title';
    h4.style.color = 'blue'
    h4.style.fontSize = '18px'
}
updateDay('Teusday');

// Demonstration of DOMContent loading sequence

document.addEventListener("DOMContentLoaded", function() {
    console.log('The DOM has loaded');
});

console.log(
    "fires before the DOMcontent is loaded"
);
