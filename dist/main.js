"use strict";
class GreyPig {
    constructor(name, breed, height, weight, personality, swimmingAbility) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.swimmingAbility = swimmingAbility;
    }
    displayInfo() {
        return `Name: ${this.name}\nBreed: ${this.breed}\nHeight: ${this.height}\nWeight: ${this.weight}\nPersonality: ${this.personality}\nSwimming Ability: ${this.swimmingAbility}`;
    }
}
var pigs = [];
pigs.push(new GreyPig('Pork Chop', 'White', 15, 30, 'Brave', 80));
console.log(pigs);
let addButton = document.getElementById('add-button'); // get the reference to the add button
let addForm = document.getElementById('add-form'); // get the reference to the add form
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', () => {
    // add a click event listener to the add button
    if ((addForm === null || addForm === void 0 ? void 0 : addForm.style.display) === 'block') {
        // if the add form is visible
        addForm.style.display = 'none'; // hide the add form
    }
    else if ((addForm === null || addForm === void 0 ? void 0 : addForm.style.display) === 'none') {
        // if the add form is hidden
        addForm.style.display = 'block'; // show the add form
    }
});
