class Animal {
  public name: string;

  constructor(name: string | undefined) {
    if (!name) {
      this.name = "Unknown";
    } else {
      this.name = name;
    }
  }
}

const newAnimal = new Animal(undefined);
console.log(newAnimal);

class Mammal extends Animal {
  constructor(name, genus, species) {
    super(name);
    if (genus === undefined || species === undefined) {
      throw new Error("No species added.", { cause: "Invalid input." });
    } else {
      this.genus = genus;
      this.species = species;
    }
    this.classification = "Mammalia";
  }
  getSpecies() {
    console.log(`${this.genus} ${this.species}`);
  }
}

const human = new Mammal("Stackie", "Homo", "sapiens");
console.log(human.name);
human.getSpecies();
