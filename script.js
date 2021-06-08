/*
const paintWall = function(paintColor){
    console.log("The wall has been painted red");
    console.log(paintColor);
    console.log("The wall has been painted " + paintColor);
}

paintWall("Redredred");
paintWall("green");
paintWall("olivedrab");
*/

const paintWall = function(paintColor, locationWall){
    console.log("The wall has been painted red");
    console.log("The " + locationWall + "has been painted red")
    console.log("The wall has been painted " + paintColor);
    console.log("The " + locationWall + "has been painted " + paintColor);
}

paintWall("purple ", "west wall ");
