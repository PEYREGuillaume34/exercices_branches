let number = 6

function posNeg(number){
if (number < 0)return `le chiffre ${number} est négatif`;
if (number >0) return `le chiffre ${number} est positif`;
if (number===0) return `rien à dire`;
}

console.log(posNeg(number));