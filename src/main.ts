// interface IPig {
//   name: string;
//   breed: string;
//   height: number;
//   weight: number;
//   personality: string;

//   displayInfo(): string;
// }

// class pig implements IPig {
//   name: string;
//   breed: string;
//   height: number;
//   weight: number;
//   personality: string;

//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string
//   ) {
//     this.name = name;
//     this.breed = breed;
//     this.height = height;
//     this.weight = weight;
//     this.personality = personality;
//   }

//   public displayInfo(): string {
//     return `<tr><td>Name: ${this.name}\n
//             Breed: ${this.breed}\n
//             Height: ${this.height}\n
//             Weight: ${this.weight}\n
//             Personality: ${this.personality}
//             </td></tr>`;
//   }
// }

// class GreyPig extends pig {
//   swimmingAbility: number; // unique attribute for Grey pigs

//   constructor(
//     name: string,
//     breed: string,
//     height: number,
//     weight: number,
//     personality: string,
//     swimmingAbility: number
//   ) {
//     super(name, breed, height, weight, personality); // call the super class constructor
//     this.swimmingAbility = swimmingAbility;
//   }

//   displayInfo(): string {
//     return super.displayInfo() + `\nSwimming Ability: ${this.swimmingAbility}`;
//   }
// }

// function displayAllPigs(pig: IPig): string {
//   // let info = `Name: ${pig.name}\nBreed: ${pig.breed}\nHeight: ${pig.height}\nWeight: ${pig.weight}\nPersonality: ${pig.personality}\n`;
//   let info = `<tr><td>Name: ${pig.name}</td><td>Category: ${pig.constructor.name}</td><td><a>More Info</a></td><td><a>Delete</a></td>: ${pig.height}\nWeight: ${pig.weight}\nPersonality: ${pig.personality}\n`;
//   switch (pig.constructor.name) {
//     case 'GreyPig':
//       info += `Swimming Ability: ${(pig as GreyPig).swimmingAbility}`;
//       break;
//     // case 'ChestnutPig':
//     //   info += `Language: ${(pig as ChestnutPig).language}`;
//     //   break;
//     // case 'WhitePig':
//     //   info += `Running Ability: ${(pig as WhitePig).runningAbility}`;
//     //   break;
//     // case 'BlackPig':
//     //   info += `Strength: ${(pig as BlackPig).strength}`;
//     //   break;
//   }
//   return info;
// }

// var pigs: IPig[] = [];
// pigs.push(new GreyPig('Pork Chop', 'Black', 15, 30, 'Brave', 80));

// console.log(pigs);

// let pigTable = document.getElementById('pig-table') as HTMLTableElement;
// function showAllPigs() {
//   pigTable.querySelector('tbody')!.innerHTML = ' ';
//   pigs.forEach((pig, index) => {
//     // loop through the pigs array
//     let category = pig.constructor.name; // get the category from the constructor name
//     let row = document.createElement('tr'); // create a new table row
//     row.innerHTML = `<td>${pig.name}</td><td>${category}</td>`; // append the name and category
//     let actionCell = document.createElement('td'); // create a cell for the actions
//     let moreInfoButton = document.createElement('button'); // create a button for more info
//     moreInfoButton.className = 'btn btn-info';
//     moreInfoButton.textContent = 'More info';
//     moreInfoButton.addEventListener('click', () => {
//       // add a click event listener
//       alert(pig.displayInfo()); // display the pig's information using the displayInfo method
//     });
//     actionCell.appendChild(moreInfoButton); // append the button to the cell
//     let deleteButton = document.createElement('button'); // create a button for delete
//     deleteButton.className = 'btn btn-danger';
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//       // add a click event listener
//       if (confirm(`Are you sure you want to delete ${pig.name}?`)) {
//         // ask for confirmation
//         pigs.splice(index, 1); // remove the pig from the array
//         localStorage.setItem('pigs', JSON.stringify(pigs)); // update the local storage
//         showAllPigs(); // update the table
//       }
//     });
//     actionCell.appendChild(deleteButton); // append the button to the cell
//     row.appendChild(actionCell); // append the cell to the row
//     pigTable.querySelector('tbody')!.appendChild(row); // append the row to the table body
//   });
// }

// showAllPigs();

// // const elem: any = document?.getElementById('add-form');
// // elem.innerHTML = pigs[0].displayInfo();

// let addButton = document.getElementById('add-button'); // get the reference to the add button
// let addForm = document.getElementById('add-form'); // get the reference to the add form
// addButton?.addEventListener('click', () => {
//   // add a click event listener to the add button
//   if (addForm?.style.display === 'block') {
//     // if the add form is visible
//     addForm.style.display = 'none'; // hide the add form
//   } else if (addForm?.style.display === 'none') {
//     // if the add form is hidden
//     addForm.style.display = 'block'; // show the add form
//   }
// });
