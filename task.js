// Завдання 1: Перевести перший символ у верхній регістр
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log("Завдання 1:", ucFirst("hello")); // "Hello"
  
  // Завдання 2: Перевірка на спам
  function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('росі') || lowerStr.includes('xxx');
  }
  
  console.log("Завдання 2:", checkSpam("Це РОСІйська атака")); // true
  console.log("Завдання 2:", checkSpam("Just a regular message")); // false
  
  // Завдання 3: Урізання тексту
  function truncate(str, maxlength) {
    return str.length > maxlength
      ? str.slice(0, maxlength - 1) + '…'
      : str;
  }
  
  console.log("Завдання 3:", truncate("Оце довгий текст, який треба обрізати", 20)); 
  // "Оце довгий текст, як…"
  
  // Завдання 4: Розбивка на рядки, якщо більше 3 слів
  function strikeStr(str) {
    const words = str.split(' ');
    if (words.length <= 3) return str;
    return words.join('\n');
  }
  
  console.log("Завдання 4:\n" + strikeStr("Це речення містить більше трьох слів"));
  // Виведе кожне слово з нового рядка, якщо більше 3 слів
  