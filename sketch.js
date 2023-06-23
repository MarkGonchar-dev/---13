
let salary = Number(prompt("Введіть свою зарплату (грн)", "0"));

let premium = salary * 0.15;

let total = salary + premium;

let tax = total * 0.1;

let spend = 190;

let left = total - tax - spend;

let perPerson = left / 2.0;

alert(perPerson);
