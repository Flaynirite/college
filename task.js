// Завдання 1: Операції з масивами
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

let firstElement = styles.shift();
console.log("Видалено перший елемент:", firstElement);

styles.unshift("Rap", "Reggae");

console.log("Завдання 1: styles =", styles);
// ["Rap", "Reggae", "Classics", "Rock-n-Roll"]


// Завдання 2: Сума введених чисел
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введіть число", "");

    if (value === null || value.trim() === "" || isNaN(value)) break;

    numbers.push(+value);
  }

  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum;
}

// Щоб протестувати, раскоментуйте цей рядок:
// alert("Сума: " + sumInput());


// Завдання 3: Максимальний підмасив
function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let value of arr) {
    currentSum = Math.max(0, currentSum + value);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Приклад:
let arr = [1, -2, 3, 4, -9, 6];
console.log("Завдання 3: Максимальна сума підмасиву =", getMaxSubSum(arr)); 
// Результат: 7 (3 + 4)
