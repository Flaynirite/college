// Практична робота №7 - JavaScript

// ===== Завдання 1 =====
// Підсумуйте властивості

function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
      sum += value;
    }
    return sum;
  }
  
  // Приклад використання:
  let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300
  };
  console.log("Завдання 1 - Сума зарплат:", sumSalaries(salaries)); 
  // Результат: 3900
  
  
  // ===== Завдання 2 =====
  // Порахуйте властивості
  
  function count(obj) {
    return Object.keys(obj).length;
  }
  
  // Приклад використання:
  let user = {
    name: "Alice",
    age: 25,
    city: "Kyiv"
  };
  console.log("Завдання 2 - Кількість властивостей:", count(user)); 
  // Результат: 3
  
  
  // ===== Завдання 3 =====
  // Деструктуроване присвоєння
  
  let person = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = person;
  
  console.log("Завдання 3 - Деструктуризація:");
  console.log("name:", name);     // John
  console.log("age:", age);       // 30
  console.log("isAdmin:", isAdmin); // false
  