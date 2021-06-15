const colors = ["yellow", "blue", "red", "orange"];
var i = 0;

while (i < colors.length){
    console.log(colors[i]);
    i++
}

for (i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(element => console.log(element))

// 4, 3
// 1
// Minder regels code dus makkelijker leesbaar. Minder kans op (typ)fouten

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Volgens Mozilla is dit wel itereren.