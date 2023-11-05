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
pigs.push(new GreyPig('pig', 'Large White', 15, 30, 'Brave', 80));
console.log(pigs);
const elem = document.getElementById('add-form');
elem;
// elem.innerHTML = pigs[0].displayInfo();
