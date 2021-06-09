const checkNumber = function(randomNumber){
    if (randomNumber > 100){
        return true;
    } else{
        return false;
    }
}


let randomNumber = 20;

if (checkNumber(randomNumber)){
    console.log("True");
} else {
    console.log("False")
}


const bouncerBrenda = function(maxNumber, currNumber, age){
    if (currNumber < maxNumber && age >= 18){
        return console.log("come in");
    } else if (currNumber >= 100){
        return console.log("it's too busy now, come back later");
    } else if (age < 18){
        return console.log("this is a club for adults");
    }
}

bouncerBrenda (100, 90, 20)

function average(nums) {
    return nums.reduce((a, b) => (a+b)) / nums.length;
}

average(1, 2, 3, 4, 5);