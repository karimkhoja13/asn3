"use strict";
// interface IPig {
//   name: string;
//   breed: string;
//   height: number;
//   weight: number;
//   personality: string;
//   category: string;
//   displayInfo(): string;
// }
// class Pig implements IPig {
//   name: string;
//   breed: string;
//   height: number;
//   weight: number;
//   personality: string;
//   category: string;
//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     category: string
//   ) {
//     this.name = name;
//     this.breed = breed;
//     this.height = height;
//     this.weight = weight;
//     this.personality = personality;
//     this.category = category;
//   }
//   public displayInfo(): string {
//     return ` `;
//   }
//   public getUnique(): any {
//     return 0;
//   }
// }
// class GreyPig extends Pig {
//   swimmingAbility: number; // unique attribute for Grey pigs
//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     category: string,
//     swimmingAbility: number
//   ) {
//     super(name, breed, height, weight, personality, category); // call the super class constructor
//     this.swimmingAbility = swimmingAbility;
//   }
//   public getUnique(): any {
//     return this.swimmingAbility;
//   }
// }
// class ChestnutPig extends Pig {
//   language: string; // unique attribute for Grey pigs
//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     category: string,
//     language: string
//   ) {
//     super(name, breed, height, weight, personality, category); // call the super class constructor
//     this.language = language;
//   }
//   public getUnique(): any {
//     return this.language;
//   }
// }
// class WhitePig extends Pig {
//   runningAbility: number; // unique attribute for Grey pigs
//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     category: string,
//     runningAbility: number
//   ) {
//     super(name, breed, height, weight, personality, category); // call the super class constructor
//     this.runningAbility = runningAbility;
//   }
//   public getUnique(): any {
//     return this.runningAbility;
//   }
// }
// class BlackPig extends Pig {
//   strengthAbility: number; // unique attribute for Grey pigs
//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     category: string,
//     strengthAbility: number
//   ) {
//     super(name, breed, height, weight, personality, category); // call the super class constructor
//     this.strengthAbility = strengthAbility;
//   }
//   public getUnique(): any {
//     return this.strengthAbility;
//   }
// }
// function displayPig(pig: IPig): string {
//   return `<td>Name: ${pig.name}</td>
//     Name: ${pig.breed}
//     Name: ${pig.height}
//     Name: ${pig.weight}
//     Name: ${pig.personality}
//     Name: ${pig.name}`;
// }
// // Get the references to the HTML elements
// let addButton = document.getElementById('add-button') as HTMLButtonElement;
// let pigTable = document.getElementById('pig-table') as HTMLTableElement;
// let moreInfoTable = document.getElementById('more-info') as HTMLTableElement;
// let pigDetailsSection = document.getElementById(
//   'pig_details'
// ) as HTMLTableElement;
// let addForm = document.getElementById('add-form') as HTMLDivElement;
// let categorySelect = document.getElementById(
//   'category-select'
// ) as HTMLSelectElement;
// let nameInput = document.getElementById('name-input') as HTMLInputElement;
// let breedInput = document.getElementById('breed-input') as HTMLInputElement;
// let heightInput = document.getElementById('height-input') as HTMLInputElement;
// let weightInput = document.getElementById('weight-input') as HTMLInputElement;
// let personalityInput = document.getElementById(
//   'personality-input'
// ) as HTMLInputElement;
// let uniqueAttribute = document.getElementById(
//   'unique-attribute'
// ) as HTMLDivElement;
// let submitButton = document.getElementById(
//   'submit-button'
// ) as HTMLButtonElement;
// let cancelButton = document.getElementById(
//   'cancel-button'
// ) as HTMLButtonElement;
// let errorMsg = document.getElementById('error-message');
// // Load the pigs from the local storage
// let pigs: any[] = JSON.parse(localStorage.getItem('pigs') || '[]');
// // Populate the table with the pigs
// function populateTable() {
//   pigs.sort((a, b) => (a.category + a.name).localeCompare(b.category + b.name));
//   pigTable.querySelector('tbody')!.innerHTML = ''; // clear the table
//   pigs.forEach((pig, index) => {
//     // loop through the pigs array
//     // let category = pig.constructor.name; // get the category from the constructor name
//     let row = document.createElement('tr'); // create a new table row
//     row.innerHTML = `<td>${pig.name}</td><td>${pig.category}</td>`;
//     let actionCell = document.createElement('td');
//     let moreInfoButton = document.createElement('button');
//     moreInfoButton.className = 'btn btn-info';
//     moreInfoButton.textContent = 'More info';
//     console.log(pig);
//     moreInfoButton.addEventListener('click', () => {
//       // add a click event listener
//       let tableBody = moreInfoTable.querySelector('tbody');
//       tableBody!.innerHTML = '';
//       // let t_row = document.createElement('tr');
//       tableBody!.innerHTML = `<tr><td>Name</td><td>${pig.name}</td></tr>
//         <tr><td>Breed</td><td>${pig.breed}</td></tr>
//         <tr><td>Height</td><td>${pig.height}</td></tr>
//         <tr><td>Weight</td><td>${pig.weight}</td></tr>
//         <tr><td>Personality</td><td>${pig.personality}</td></tr>
//         `;
//       if (pig.category === 'Grey Pig')
//         tableBody!.innerHTML += `<tr><td>Swimming Ability</td><td>${pig.swimmingAbility}</td></tr>`;
//       if (pig.category === 'Chestnut Pig')
//         tableBody!.innerHTML += `<tr><td>Language</td><td>${pig.language}</td></tr>`;
//       if (pig.category === 'White Pig')
//         tableBody!.innerHTML += `<tr><td>Running Ability</td><td>${pig.runningAbility}</td></tr>`;
//       if (pig.category === 'Black Pig')
//         tableBody!.innerHTML += `<tr><td>Strength</td><td>${pig.strengthAbility}</td></tr>`;
//       // alert(displayPig(pig)); // display the pig's information using the displayInfo method
//       moreInfoTable.appendChild(tableBody!); // append the row to the table body
//       addForm.style.display = 'none'; // hide the form
//       addButton.style.display = 'block'; // show the button
//       pigDetailsSection.style.display = 'block'; // show the button
//       populateTable();
//     });
//     actionCell.appendChild(moreInfoButton);
//     let deleteButton = document.createElement('button');
//     deleteButton.className = 'btn btn-danger';
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//       if (confirm(`Are you sure you want to delete ${pig.name}?`)) {
//         pigs.splice(index, 1);
//         localStorage.setItem('pigs', JSON.stringify(pigs));
//         populateTable();
//         pigDetailsSection.style.display = 'none';
//       }
//     });
//     actionCell.appendChild(deleteButton); // append the button to the cell
//     row.appendChild(actionCell); // append the cell to the row
//     pigTable.querySelector('tbody')!.appendChild(row); // append the row to the table body
//   });
// }
// populateTable();
// addButton.addEventListener('click', () => {
//   addForm.style.display = 'block'; // show the form
//   addButton.style.display = 'none'; // hide the button
//   pigDetailsSection.style.display = 'none'; // hide the button
// });
// // Hide the add form when the cancel button is clicked
// cancelButton.addEventListener('click', () => {
//   addForm.style.display = 'none'; // hide the form
//   addButton.style.display = 'block'; // show the button
// });
// // Populate the unique attribute based on the selected category
// function populateUniqueAttribute() {
//   uniqueAttribute.innerHTML = ''; // clear the unique attribute
//   let category = categorySelect.value; // get the selected category
//   if (category === 'Grey') {
//     // if the category is Grey
//     uniqueAttribute.innerHTML =
//       "<label for='swimming-input'>Enter a swimming ability:</label><input id='swimming-input' type='number' class='form-control' required >"; // append a label and an input for swimming ability
//   } else if (category === 'Chestnut') {
//     // if the category is Chestnut
//     uniqueAttribute.innerHTML =
//       "<label for='language-input'>Enter a language:</label><input id='language-input' type='text' class='form-control' required >"; // append a label and an input for language
//   } else if (category === 'White') {
//     // if the category is White
//     uniqueAttribute.innerHTML =
//       "<label for='running-input'>Enter a running ability:</label><input id='running-input' type='number' class='form-control' required >"; // append a label and an input for running ability
//   } else if (category === 'Black') {
//     // if the category is Black
//     uniqueAttribute.innerHTML =
//       "<label for='strength-input'>Enter a strength:</label><input id='strength-input' type='number' class='form-control' required >"; // append a label and an input for strength
//   }
// }
// populateUniqueAttribute();
// // Update the unique attribute when the category is changed
// categorySelect.addEventListener('change', () => {
//   populateUniqueAttribute();
// });
// // Add a new pig when the submit button is clicked
// submitButton.addEventListener('click', () => {
//   let category = categorySelect.value;
//   let name = nameInput.value;
//   if (name === '') {
//     errorMsg!.innerHTML = 'Please enter a name.';
//     return;
//   }
//   let breed = breedInput.value;
//   if (breed === '') {
//     errorMsg!.innerHTML = 'Please enter a breed.';
//     return;
//   }
//   let height = heightInput.valueAsNumber;
//   if (height < 0 || isNaN(height)) {
//     errorMsg!.innerHTML = 'Please enter a height value in non-negative numbers';
//     return;
//   }
//   let weight = weightInput.valueAsNumber;
//   if (weight < 0 || isNaN(weight)) {
//     errorMsg!.innerHTML = 'Please enter a weight value in non-negative numbers';
//     return;
//   }
//   let personality = personalityInput.value;
//   if (personality === '') {
//     errorMsg!.innerHTML = 'Please enter a personality.';
//     return;
//   }
//   let newPig: Pig;
//   if (category === 'Grey') {
//     let swimmingAbility = (
//       document.getElementById('swimming-input') as HTMLInputElement
//     ).valueAsNumber;
//     if (
//       swimmingAbility < 0 ||
//       swimmingAbility > 100 ||
//       isNaN(swimmingAbility)
//     ) {
//       errorMsg!.innerHTML =
//         'Please enter a swimming ability value between 0 and 100';
//       return;
//     }
//     newPig = new GreyPig(
//       name,
//       breed,
//       height,
//       weight,
//       personality,
//       'Grey Pig',
//       swimmingAbility
//     );
//   } else if (category === 'Chestnut') {
//     let language = (
//       document.getElementById('language-input') as HTMLInputElement
//     ).value;
//     if (language === '') {
//       errorMsg!.innerHTML = 'Please enter a language.';
//       return;
//     }
//     newPig = new ChestnutPig(
//       name,
//       breed,
//       height,
//       weight,
//       personality,
//       'Chestnut Pig',
//       language
//     );
//   } else if (category === 'White') {
//     let runningAbility = (
//       document.getElementById('running-input') as HTMLInputElement
//     ).valueAsNumber;
//     if (runningAbility < 0 || runningAbility > 100 || isNaN(runningAbility)) {
//       errorMsg!.innerHTML =
//         'Please enter a running ability value between 0 and 100';
//       return;
//     }
//     newPig = new WhitePig(
//       name,
//       breed,
//       height,
//       weight,
//       personality,
//       'White Pig',
//       runningAbility
//     );
//   } else if (category === 'Black') {
//     let strength = (
//       document.getElementById('strength-input') as HTMLInputElement
//     ).valueAsNumber;
//     if (strength < 1 || strength > 10 || isNaN(strength)) {
//       errorMsg!.innerHTML =
//         'Please enter a strength ability value between 1 and 10';
//       return;
//     }
//     newPig = new BlackPig(
//       name,
//       breed,
//       height,
//       weight,
//       personality,
//       'Black Pig',
//       strength
//     );
//   }
//   pigs.push(newPig!);
//   localStorage.setItem('pigs', JSON.stringify(pigs));
//   populateTable();
//   addForm.style.display = 'none';
//   addButton.style.display = 'block';
// });
