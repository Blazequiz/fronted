// 1. Створіть дві змінні для зберігання значень двох текстових полів. 
// Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

const firstTextField = "asdasd";
const secondTextField = "asdasd";

if (firstTextField !== "" && secondTextField !== "") {
    console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2. Створіть дві змінні для зберігання числових значень. 
// Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const firstNum = 10;
const secondNum = 2;

const sumOfTheseTwoNumbers = firstNum + secondNum;

if (sumOfTheseTwoNumbers > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// 3. Створіть змінну для зберігання тексту. 
// Перевірте, чи містить цей текст слово "JavaScript". Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const isHereJavascript = prompt("Enter JavaScript: ");
const toLowerCase = isHereJavascript.toLocaleLowerCase();

if (isHereJavascript === "javascript") {
  console.log("JavaScript");
} else {  console.log("Текст не містить слово JavaScript");  }

// 4. Створіть змінну для зберігання числа. 
// Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

const num1 = 5;
const conditional = num1 > 10 && num1 < 20;
if (conditional) {
  console.log("Число входить в діапазон від 10 до 20");
} else {  console.log("Число не входить в діапазон від 10 до 20");  }

// 5. Створіть змінні для зберігання значень полів (ім'я, email, пароль). 
// Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. 
// Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".

const email = "asdsaasd2000@gmail.com";
const Name = "Oleks";
const password = "12345dfd";

if (
  email.includes("@") && 
  email.includes(".", email.indexOf("@")) && 
  Name.length > 3 && 
  password.length > 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
