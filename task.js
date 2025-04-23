// ===== Завдання 1: Випадкове число від min до max =====
function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // ===== Завдання 2: Перевірка простого числа =====
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
  
    return true;
  }
  
  // ===== Завдання 3: Сума послідовності чисел =====
  function sumToN(n) {
    let sum = 0;
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
    } else {
      for (let i = 1; i >= n; i--) {
        sum += i;
      }
    }
    return sum;
  }
  
  // ===== Демонстрація результатів у консолі =====
  console.log("=== Практична робота №3 ===");
  
  console.log("\nЗавдання 1:");
  console.log("random(1, 5) = " + random(1, 5));
  
  console.log("\nЗавдання 2:");
  console.log("isPrime(7) = " + isPrime(7));
  console.log("isPrime(10) = " + isPrime(10));
  
  console.log("\nЗавдання 3:");
  console.log("sumToN(5) = " + sumToN(5));
  console.log("sumToN(-3) = " + sumToN(-3));
  