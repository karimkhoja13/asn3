interface IPig {
  name: string;
  breed: string;
  height: number;
  weight: number;
  personality: string;

  displayInfo(): string;
}

class GreyPig implements IPig {
  name: string;
  breed: string;
  height: number;
  weight: number;
  personality: string;
  swimmingAbility: number; // unique attribute for Grey pigs

  constructor(
    name: string,
    breed: string,
    height: number,
    weight: number,
    personality: string,
    swimmingAbility: number
  ) {
    this.name = name;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.personality = personality;
    this.swimmingAbility = swimmingAbility;
  }

  displayInfo(): string {
    return `Name: ${this.name}\nBreed: ${this.breed}\nHeight: ${this.height}\nWeight: ${this.weight}\nPersonality: ${this.personality}\nSwimming Ability: ${this.swimmingAbility}`;
  }
}

var pigs: IPig[] = [];
pigs.push(new GreyPig('Babe', 'Large White', 15, 30, 'Brave', 80));

console.log(pigs);

// const elem: any = document?.getElementById('add-form');
// elem.innerHTML = pigs[0].displayInfo();
