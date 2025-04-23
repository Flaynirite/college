let login = prompt("Введіть логін");

if (login === "Admin") {
  let password = prompt("Введіть пароль");

  if (password === "Господар") {
    alert("Ласкаво просимо!");
  } else if (password === "" || password === null) {
    alert("Скасовано");
  } else {
    alert("Неправильний пароль");
  }

} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
s