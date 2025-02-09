// Задача №1.
// Знайти максимальне число з 10,58,39,-150,0

console.log(Math.max(10,58,39,-150,0));


// Задача №2.
// Округлити число 58.858 до числа 58

console.log(Math.floor(58.858));

// задача №3
// Напиши скрип,який генерує випадкове число від 10 до 80
const max = 80;
const min = 10;

console.log(Math.random() * (max - min) + min);


// 2. Додаткові завдання



// Створіть змінні a1, a2, a3, a4, a5 . За допомогою математичних операторів (додавання, віднімання і т.д.) знайдіть значення виразів: 5 + 3; 5 - 3; 5 * 3; 5/3, помістивши результат кожного виразу в змінну. Наприклад, let a1 = 5 + 3. Вивести в консоль всі змінні по черзі.
// Створіть змінні a6, a7, a8, a9, a10. Помістіть в них результат виразів: 5 % 3; 3 % 5; 5 + '3'; '5' - 3; 75 + 'кг' і виведіть на екран за допомогою alert по черзі всі змінні.
// Напишіть скрипт для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).
// Створіть функцію яка генерує випадкове ціле число від min до max включно.
// Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5/3;
// let a5 = 5 + 2;
// let a6 =  5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a1, a2 , a3, a4, a5);
// console.log(a6, a7 , a8, a9, a10);

// alert(a6)
// alert(a7)
// alert(a8)
// alert(a9)
// alert(a10)

// 3. Творчі завдання
// Створити змінні к1… к4 , в них почергово записати ТІЛЬКИ результат приведення до ЦІЛОГО ЧИСЛА з даних : 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
// Створити змінні к1… к4 , в них почергово записати ТІЛЬКИ результат приведення до ДРОБОВОГО ЧИСЛА з даних : 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)
// У змінну random згенеруйте випадкове число від 3 до 19 включно. Результат виведіть в консоль

let k1 = Number.parseInt("5px"); 
let k2 = Number.parseInt("12djd334"); 
let k3 = Number.parseInt("12.45asdwe12"); 
let k4 = Number.parseInt("qwqweeewq"); 

console.log(k1, k2, k3, k4)

let k5 = Number.parseFloat("5px"); 
let k6 = Number.parseFloat("12djd334"); 
let k7 = Number.parseFloat("12.45asdwe12"); 
let k8 = Number.parseFloat("qwqweeewq"); 

console.log(k5, k6, k7, k8)

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.random() * (19 - 3) + 3);

// 4. Супертворчі завдання





// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см — всі данні повинні зберігатися в змінних. Значення площі повинно зберігається в числовій змінній.
const width = 10;
const height = 23;

const squareOfRectangle = width * height;

console.log(squareOfRectangle)


// Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м , результат та дані повинні зберігатися в змінних.

const heightOfCylinder = 10;
const diameterOfCylinder = 4;

const squareOfCylinder = 3.14 * diameterOfCylinder/2;
const valumeOfCylinder =  squareOfCylinder * 10;

console.log(valumeOfCylinder.toFixed(1), "cm^3")

// У прямокутного трикутника дві сторони зі значенням 3 і 4. Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **). Результат та дані повинні зберігатися в змінних.
// Що буде в консолі

let firstCathetus = 3;
let secondCathetus = 4;

let firstSquared = Math.pow(firstCathetus, 2);  
let secondSquared = Math.pow(secondCathetus, 2);

const hypotenuse = Math.sqrt(firstSquared + secondSquared);

console.log(hypotenuse); 


// const pythagoreanTheorem = Math.sqrt(Math.pow(firstCathetus ** 2) + Math.pow(secondCathetus ** 2));




console.log("Here is hypotenuse: ", pythagoreanTheorem);