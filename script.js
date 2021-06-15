/* var number = 1;
var range = 10;

for (number; number <= 20; number++){
    if (number % 2) {
    console.log(number + " is Odd")
} else{
    console.log(number + " is Even")
}
}


for (number; number <= range; number++){
    console.log(number + " x " + range + " = " + range * number)
} */

var score = 60;
for (score; score <= 100; score++){
    function assignGrade(score) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'E';
        }
    }
    console.log("Voor " + score + " punten krijg je een " + assignGrade(score))
}