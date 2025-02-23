// Створити розмітку з формою, що містить список (select) 
// з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

const select = "Чай";
let message;

switch (select) {
  case "Чай": 
    message = `Ви обрали Чай!`;
    console.log(message);
    break;
  case "Кава": 
    message = `Ви обрали Каву!`;
    console.log(message);
    break;
  case "Сік": 
    message = `Ви обрали Сік!`;
    console.log(message);
    break;
    default:
      console.log("Invalid Value");
}


// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти,
//  чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const dayOfTheWeek = "Середа";

switch (dayOfTheWeek) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П`ятниця":
       console.log(`${dayOfTheWeek} - Робочий день`);
      break;
  case "Неділя":
  case "Суббота":
    console.log(`${dayOfTheWeek} - Вихідний день!`);
    break;
    default:
      console.log("Invalid Value");   
}

// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. 
// При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

const monthNumber = 1; 

let season;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = "That's Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "That's Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "That's Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "That's Autumn";
    break;
  default:
    season = "Invalid Value";
}

console.log(season);


// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. 
// При натисканні на кнопку виводити кількість днів у цьому місяці.

const daysInMonth = "January";

switch (daysInMonth) {
  case  "February":
    console.log(28);
    break;
    case  "June",
          "April",
          "August",
          "Semptember",
          "October":
    console.log(30);
    break;
    case  "December",
          "November",
          "Juli",
          "May",
          "March",
          "January":
    console.log(31);
    break;
    default:
      console.log("Invalid Value"); 
}

// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. 
// При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

const value = "зелений"

switch (value.toLowerCase()) {
  case "зелений":
    console.log("йти");
    break;
  case "червоний":
    console.log("стоп!");
    break;
  case "жовтий":
    console.log("чекати");
    break;
    default:
      console.log("Invalid Value");
}

// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". 
// При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.

const chooseAnOperator = prompt(`Enter an operator of: + , - , * , / `);
const enterFirstNumber = prompt("Enter first number:")
const enterSecondNumber = prompt("Enter second nubmer:")
let result;

switch (chooseAnOperator) {
  case "+":
    result = Number(enterFirstNumber) + Number(enterSecondNumber)
    break;
  case "-":
    result = Number(enterFirstNumber) - Number(enterSecondNumber)
    break;
  case "*":
    result = Number(enterFirstNumber) * Number(enterSecondNumber)
    break;
  case "/":
    if (Number(enterFirstNumber) === 0 || Number(enterSecondNumber) === 0) {
      console.log("Invalid Value");
    } else {
    result = Number(enterFirstNumber) / Number(enterSecondNumber)
    }
    break;
    default: 
      console.log("Something went wrong");
}
console.log(result);
