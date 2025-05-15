// Отримуємо елементи DOM
const valueEl = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

// Ініціалізуємо лічильник
let counter = 0;

// Функція для оновлення відображення лічильника
function updateCounter() {
  valueEl.textContent = counter;
  
  // Змінюємо колір в залежності від значення
  if (counter < 0) {
    valueEl.style.color = 'var(--clr-red-dark)';
  } else if (counter > 0) {
    valueEl.style.color = 'var(--clr-green-dark)';
  } else {
    valueEl.style.color = 'var(--clr-black)';
  }
}

// Додаємо обробники подій для кнопок
decreaseBtn.addEventListener('click', () => {
  counter--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});

increaseBtn.addEventListener('click', () => {
  counter++;
  updateCounter();
});

// Ініціалізуємо початковий стан
updateCounter();