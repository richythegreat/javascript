for (let i = 11; i < 21; i++) {
    console.log(i);
}
for (let i = 20; i > 10; i--) {
    console.log(i);
}

const draugi = []
    draugi[0]= "eriks", 
    draugi[1]="liene", 
    draugi[2]="janis", 
    draugi[3]="oskars", 
    draugi[4]="adams";

console.log(draugi[0], draugi[2] ); 

console.log(draugi.length)

draugi.forEach((item, index) => {
    console.log(`${index +1}: ${item}`);
  });