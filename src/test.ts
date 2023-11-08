interface IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    category: string;
  
    displayInfo(): string;
  }
  
  class Pig implements IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    category: string;
  
    constructor(
      name: string,
      breed: string,
      height: number,
      weight: number,
      personality: string,
      category: string
    ) {
      this.name = name;
      this.breed = breed;
      this.height = height;
      this.weight = weight;
      this.personality = personality;
      this.category = category;
    }
  
    public displayInfo(): string {
      return ` `;
    }
  }

  class GreyPig extends Pig {
    swimmingAbility: number; // unique attribute for Grey pigs
  
    constructor(
      name: string,
      breed: string,
      height: number,
      weight: number,
      personality: string,
      category: string,
      swimmingAbility: number
    ) {
      super(name, breed, height, weight, personality, category); // call the super class constructor
      this.swimmingAbility = swimmingAbility;
    }
  
    public displayInfo(): string {
      return super.displayInfo() + `testing super: `;
    }
  }
  
  class ChestnutPig extends Pig {
    language: string; // unique attribute for Grey pigs
  
    constructor(
      name: string,
      breed: string,
      height: number,
      weight: number,
      personality: string,
      category: string,
      language: string
    ) {
      super(name, breed, height, weight, personality, category); // call the super class constructor
      this.language = language;
    }
  
    public displayInfo(): string {
      return super.displayInfo() +
        `testing chestnut super: `;
    }
  }
  
  class WhitePig extends Pig {
    runningAbility: number; // unique attribute for Grey pigs

    constructor(
      name: string,
      breed: string,
      height: number,
      weight: number,
      personality: string,
      category: string,
      runningAbility: number
    ) {
      super(name, breed, height, weight, personality, category); // call the super class constructor
      this.runningAbility = runningAbility;
    }

    public displayInfo(): string {
      return super.displayInfo() + `testing whitepig super: `;
    }
  }
  
  class BlackPig extends Pig {
    strengthAbility: number; // unique attribute for Grey pigs
  
    constructor(
      name: string,
      breed: string,
      height: number,
      weight: number,
      personality: string,
      category: string,
      strengthAbility: number
    ) {
      super(name, breed, height, weight, personality, category); // call the super class constructor
      this.strengthAbility = strengthAbility;
    }
  
    public displayInfo(): string {
      return super.displayInfo() +
        `blackpig super: `;
    }
  }


function displayPig(pig: IPig): string {
    return `<Name: ${pig.name}`;
    // +
    // `Name: ${pig.name}` +
    // `Name: ${pig.name}` +
    // `Name: ${pig.name}` +
    // `Name: ${pig.name}` +
    // `Name: ${pig.name}`;
}
  
  // Get the references to the HTML elements
  let addButton = document.getElementById('add-button') as HTMLButtonElement;
  let pigTable = document.getElementById('pig-table') as HTMLTableElement;
  let moreInfoTable = document.getElementById('more-info') as HTMLTableElement;
  let pigDetailsSection = document.getElementById('pig_details') as HTMLTableElement;
  let addForm = document.getElementById('add-form') as HTMLDivElement;
  let categorySelect = document.getElementById(
    'category-select'
  ) as HTMLSelectElement;
  let nameInput = document.getElementById('name-input') as HTMLInputElement;
  let breedInput = document.getElementById('breed-input') as HTMLInputElement;
  let heightInput = document.getElementById('height-input') as HTMLInputElement;
  let weightInput = document.getElementById('weight-input') as HTMLInputElement;
  let personalityInput = document.getElementById(
    'personality-input'
  ) as HTMLInputElement;
  let uniqueAttribute = document.getElementById(
    'unique-attribute'
  ) as HTMLDivElement;
  let submitButton = document.getElementById(
    'submit-button'
  ) as HTMLButtonElement;
  let cancelButton = document.getElementById(
    'cancel-button'
  ) as HTMLButtonElement;
  
  // Load the pigs from the local storage
  let pigs: IPig[] = JSON.parse(localStorage.getItem('pigs') || '[]');

  pigs.sort((a, b) => a.category.localeCompare(b.category));

  // Populate the table with the pigs
  function populateTable() {
    pigTable.querySelector('tbody')!.innerHTML = ''; // clear the table
    pigs.forEach((pig, index) => {
      // loop through the pigs array
      // let category = pig.constructor.name; // get the category from the constructor name
      let row = document.createElement('tr'); // create a new table row
      row.innerHTML = `<td>${pig.name}</td><td>${pig.category}</td>`; // append the name and category
      let actionCell = document.createElement('td'); // create a cell for the actions
      let moreInfoButton = document.createElement('button'); // create a button for more info
      moreInfoButton.className = 'btn btn-info';
      moreInfoButton.textContent = 'More info';
      console.log(pig); 
      moreInfoButton.addEventListener('click', () => {
        // add a click event listener
        moreInfoTable.querySelector('tbody')!.innerHTML = '';
        let t_row = document.createElement('tr');
        t_row.innerHTML = `<td>${pig.name}</td><td>${pig.category}</td>`;
        // alert(displayPig(pig)); // display the pig's information using the displayInfo method
        moreInfoTable.querySelector('tbody')!.appendChild(t_row); // append the row to the table body
        addForm.style.display = 'none'; // hide the form
        addButton.style.display = 'block'; // show the button
        pigDetailsSection.style.display = 'block'; // show the button
        populateTable();
      });
      actionCell.appendChild(moreInfoButton); // append the button to the cell
      let deleteButton = document.createElement('button'); // create a button for delete
      deleteButton.className = 'btn btn-danger';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        // add a click event listener
        if (confirm(`Are you sure you want to delete ${pig.name}?`)) {
          // ask for confirmation
          pigs.splice(index, 1); // remove the pig from the array
          localStorage.setItem('pigs', JSON.stringify(pigs)); // update the local storage
          populateTable(); // update the table
        }
      });
      actionCell.appendChild(deleteButton); // append the button to the cell
      row.appendChild(actionCell); // append the cell to the row
      pigTable.querySelector('tbody')!.appendChild(row); // append the row to the table body
    });
  }
  
  populateTable(); // call the function to populate the table initially
  
  // Show the add form when the add button is clicked
  addButton.addEventListener('click', () => {
    addForm.style.display = 'block'; // show the form
    addButton.style.display = 'none'; // hide the button
    pigDetailsSection.style.display = 'none'; // hide the button
  });
  
  // Hide the add form when the cancel button is clicked
  cancelButton.addEventListener('click', () => {
    addForm.style.display = 'none'; // hide the form
    addButton.style.display = 'block'; // show the button
  });
  
  // Populate the unique attribute based on the selected category
  function populateUniqueAttribute() {
    uniqueAttribute.innerHTML = ''; // clear the unique attribute
    let category = categorySelect.value; // get the selected category
    if (category === 'Grey') {
      // if the category is Grey
      uniqueAttribute.innerHTML =
        "<label for='swimming-input'>Enter a swimming ability:</label><input id='swimming-input' type='number' class='form-control'>"; // append a label and an input for swimming ability
    } else if (category === 'Chestnut') {
      // if the category is Chestnut
      uniqueAttribute.innerHTML =
        "<label for='language-input'>Enter a language:</label><input id='language-input' type='text' class='form-control'>"; // append a label and an input for language
    } else if (category === 'White') {
      // if the category is White
      uniqueAttribute.innerHTML =
        "<label for='running-input'>Enter a running ability:</label><input id='running-input' type='number' class='form-control'>"; // append a label and an input for running ability
    } else if (category === 'Black') {
      // if the category is Black
      uniqueAttribute.innerHTML =
        "<label for='strength-input'>Enter a strength:</label><input id='strength-input' type='number' class='form-control'>"; // append a label and an input for strength
    }
  }
  
  populateUniqueAttribute(); // call the function to populate the unique attribute initially
  
  // Update the unique attribute when the category is changed
  categorySelect.addEventListener('change', () => {
    populateUniqueAttribute();
  });
  
  // Add a new pig when the submit button is clicked
  submitButton.addEventListener('click', () => {
    let category = categorySelect.value; // get the selected category
    let name = nameInput.value; // get the name
    let breed = breedInput.value; // get the breed
    let height = heightInput.valueAsNumber; // get the height
    let weight = weightInput.valueAsNumber; // get the weight
    let personality = personalityInput.value;
    let newPig: Pig;
    if (category === 'Grey') {
      let swimmingAbility = (
        document.getElementById('swimming-input') as HTMLInputElement
      ).valueAsNumber;
      newPig = new GreyPig(
        name,
        breed,
        height,
        weight,
        personality,
        "Grey Pig",
        swimmingAbility
      );
    } else if (category === 'Chestnut') {
      let language = (
        document.getElementById('language-input') as HTMLInputElement
      ).value;
      newPig = new ChestnutPig(
        name,
        breed,
        height,
        weight,
        personality,
        "Chestnut Pig",
        language
      );
    } else if (category === 'White') {
      let runningAbility = (
        document.getElementById('running-input') as HTMLInputElement
      ).valueAsNumber;
      newPig = new WhitePig(
        name,
        breed,
        height,
        weight,
        personality,
        "White Pig",
        runningAbility
      );
    } else if (category === 'Black') {
      let strength = (
        document.getElementById('strength-input') as HTMLInputElement
      ).valueAsNumber;
      newPig = new BlackPig(
        name,
        breed,
        height,
        weight,
        personality,
        "Black Pig",
        strength
      );
    }
    pigs.push(newPig!); // add the new pig to the array
    localStorage.setItem('pigs', JSON.stringify(pigs)); // update the local storage
    populateTable(); // update the table
    addForm.style.display = 'none'; // hide the form
    addButton.style.display = 'block'; // show the button
  });
  