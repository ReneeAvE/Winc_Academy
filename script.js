alert("Welkom! Wat is je naam?");

const ingevuldeNaam = prompt("vul hier je naam in");

alert("Hey " + ingevuldeNaam);

const min = 1;
const max = 25;

let randomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const winningNumber = randomNumber(min, max);
console.log(winningNumber);

let chosenNumber = prompt("Voer een nummer in van 1 tot 25 om te beginnen met raden...");

let checkNumber = function(chosenNumber, winningNumber) {
  if (chosenNumber != winningNumber) {
      alert("Dat is niet correct. Probeer het nog eens.")
      let chosenNumber = prompt("Voer nogmaals een nummer in tussen 1 en 25.");
      checkNumber(chosenNumber, winningNumber);
  }
  else {
      alert("Gefeliciteerd, je hebt gewonnen!")
      alert("Dag " + ingevuldeNaam + ". Tot de volgende keer!")
  }
}

checkNumber(chosenNumber, winningNumber);



