// 1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

console.log(5 + 5 + `5`);


// 2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт, 
// який перевіряє чи містить змінна email символ @ (за доп метода includes()  або indexOf()) 
// та рахує загальну кількість символів. Результат виведіть в консоль.

const userEmail = "shurikon2008@gmail.com"
const verificationOfUserEmail = userEmail.includes("@");
console.log(verificationOfUserEmail, userEmail.length);


// 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.(працюємо з конкатенацією)

const firstPhrase = "My";
const secondPhrase = "name";
const thirdPhrase = "is";
const fullName = `${firstPhrase} , ${secondPhrase} , ${thirdPhrase} Viktor`

console.log(fullName);


const fullName2 = firstPhrase + " " + "," + " " + secondPhrase + " " + "," + " " + thirdPhrase + " " + "Victor";

console.log(fullName2);

// 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. 
// За допомогою шаблонного рядка виведіть на екран через 
// alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Олександро";
const payment = 300;
const phrase1 = `Дякуємо, ${userName}! До сплати ${payment} гривень`;

alert(phrase1)

// Додаткові для практики:
// 5. Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//  Використовуючи метод .indexOf(), знайти і вивести в консоль 
// позицію, на якій знаходиться пробіл між ім'ям та прізвищем.

const myName = "Oleksandr Konovalenko";
console.log(myName.indexOf(" "));


// 6. Написати скрипт пошуку в рядку. Дано:
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

const isSpam = string1.includes(blacklistedWord1.toLowerCase());
console.log(isSpam);

const isSale = string2.toLowerCase().includes(blacklistedWord2.toLowerCase());
console.log(isSale);

const isSpam2 = string3.toLowerCase().includes(blacklistedWord1.toLowerCase());
console.log(isSpam2);