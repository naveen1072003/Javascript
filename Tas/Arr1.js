const cargoHold= ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5]='space tether';
cargoHold.pop();
console.log(cargoHold.shift())
cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);
console.log(`${cargoHold}`)
