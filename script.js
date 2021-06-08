const age = 19;
const isFemale = true;
const driverStatus = "bob";
const name = "Renee"
const totalAmount = 150

if (age >= 18){
    console.log ("Welkom, kom binnen!");
} else {
    console.log ("Sorry, jij moet buiten blijven.");
}

if (isFemale) {
    console.log ("Jij mag een kaart kopen.");
} else {
    console.log ("Jij mag geen kaart kopen");
}

if (driverStatus == "bob") {
    console.log ("Wel thuis!");
} else {
    console.log ("Blijf jij maar een nachtje hier.");
}

if (age >= 18 && age <= 25) {
    console.log ("Je krijgt 50% korting!")
} else {
    console.log ("Je betaalt de volle mep.")
}

if (name == "Sarah" || name == "Bram"){
    console.log("Je krijgt een gratis biertje!")
} else {
    console.log("Had je nou maar Sarah of Bram geheten")
}

if (totalAmount >= 25 && totalAmount < 50){
    console.log("Je krijgt gratis (vega)bitterballen")
} 
if (totalAmount >= 50 && totalAmount < 100){
    console.log("Je krijgt gratis een portie nachos")
}
if (totalAmount >= 100){
    console.log("Je krijgt een gratis flesje champagne")
}
if (totalAmount < 25){
    console.log("Je krijgt helemaal niks")
}

/*comparison operators
 >, <, >=, <=, ==, === (value and type)
! means is not (negation operator)

logical operators
check whether multiple conditions are true
&& means both conditions have to be met
|| means either of the conditions have to be met
you can add more than 2 variables

var myAge = 34;
if (myAge >= 18 && myAge <= 35){
}
if (myAge < 18 || myAge >35){
}

 */