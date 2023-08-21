class user {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageComparison(x, y) {
    if (x > y) {
      console.log("utente1 è più vecchio di utente2");
    } else if (y > x) {
      console.log("utente2 è piu vecchio di utente1");
    }
  }
}

const utente1 = new user("son", "goku", 38, "terra");
const utente2 = new user("vegeta", "IV", 41, "vegeta");
console.log(utente1);
console.log(utente2);
utente1.ageComparison(utente1.age, utente2.age);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  ownerNameComparison(pet) {
    if (this.ownerName === pet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
const petArrey = [];
const getPetData = function (event) {
  event.preventDefault();

  const userPetName = document.getElementById("petName").value;
  const userOwnerName = document.getElementById("ownerName").value;
  const userSpecies = document.getElementById("species").value;
  const userBreed = document.getElementById("breed").value;
  const userPet = new Pet(userPetName, userOwnerName, userSpecies, userBreed);
  console.log(userPet.ownerNameComparison(userPet.ownerName));
  console.log(userPet);
  petArrey.push(userPet);
  const ul = document.getElementById("petList");
  const liPetName = document.createElement("li");
  ul.appendChild(liPetName);
  liPetName.innerText = userPetName;
  const liOwnerName = document.createElement("li");
  ul.appendChild(liOwnerName);
  liOwnerName.innerText = userOwnerName;
  const liSpecies = document.createElement("li");
  ul.appendChild(liSpecies);
  liSpecies.innerText = userSpecies;
  const liBreed = document.createElement("li");
  ul.appendChild(liBreed);
  liBreed.innerText = userBreed;
  console.log(petArrey);
  return userPet;
};
// getPetData().ownerNameComparison(getPetData().ownerName, getPetData().ownerName);
