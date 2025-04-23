// Завдання 1
let user = {};
user.name = "Марк";
user.surname = "Сміт";
user.name = "Тарас";
delete user.name;

// Завдання 2
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Перевірка:
console.log("Завдання 2:");
console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Anna" })); // false

// Завдання 3
let salaries = {
  Jarik: 1000,
  Anna: 1600,
  Miko: 1300
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log("Завдання 3: Сума зарплат =", sum); // 3900

// Завдання 4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Menu"
};

multiplyNumeric(menu);
console.log("Завдання 4:", menu);
