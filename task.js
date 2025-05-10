// Практична робота №6 - JavaScript

// ===== Завдання 1 =====
// Фільтрувати унікальні елементи масиву

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  // Приклад використання:
  let values = ["apple", "banana", "apple", "orange", "banana"];
  console.log("Завдання 1 - Унікальні елементи:", unique(values));
  // Результат: ["apple", "banana", "orange"]
  
  
  // ===== Завдання 2 =====
  // Відфільтруйте анаграми
  
  function aclean(arr) {
    const map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  // Приклад використання:
  let words = ["nap", "pan", "ear", "are", "era", "cheaters", "hectares", "teachers"];
  console.log("Завдання 2 - Без анаграм:", aclean(words));
  // Результат: ["pan", "era", "teachers"]
  
  
  // ===== Завдання 3 =====
  // Підрахунок кількості входжень елементів в масиві
  
  function countOccurrences(arr) {
    const map = new Map();
  
    for (let item of arr) {
      map.set(item, (map.get(item) || 0) + 1);
    }
  
    return map;
  }
  
  // Приклад використання:
  let numbers = [1, 2, 2, 3, 1, 4, 2];
  console.log("Завдання 3 - Кількість входжень:");
  console.log(countOccurrences(numbers));
  // Результат: Map {1 => 2, 2 => 3, 3 => 1, 4 => 1}
  
  
  // ===== Завдання 4 =====
  // Перевірка на унікальність елементів
  
  function isUnique(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // Приклад використання:
  console.log("Завдання 4 - Перевірка унікальності:");
  console.log(isUnique([1, 2, 3]));       // true
  console.log(isUnique([1, 2, 2, 3]));    // false
  