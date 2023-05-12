"use strict";

let star = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < 10 - i; j++) {
    star += " ";
  }
  for (let k = 0; k < i * 2; k++) {
    star += " *";
  }
  star += "\n";
}
console.log(star);
