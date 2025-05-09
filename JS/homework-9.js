// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, 
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '
// 1 - Mango', а для індексу 2 виведе '3 - Ajax'.


const logItems = function(arr) {
  for(let i = 0; i < arr.length; i+=1) {
    console.log(`${i+1} - ${arr[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax'])

// 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function(message, pricePerWord) { 
  const wordsToArray = message.split(' ')

  let total = 0;
  for (const words of wordsToArray) {
    total += 1;
  }
  return total * pricePerWord;
}

const message1 = "i love javascript"
const pricePerWord = 10

console.log(calculateEngravingPrice(message1, pricePerWord));

// 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function(string) {
  const words = string.split(' ');
  let theLongestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > theLongestWord.length) {
      theLongestWord = words[i];
    }
  }
  
  return theLongestWord;
}

const strings = "asadasds sdfadsaf fsdfsd fdsdfsd fds";
console.log(findLongestWord(strings)); // Виведе: "sdfadsaf"

/* 
//4
Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію. 
*/

const formatString = function (string) {
  if (string.length <= 40) {
    return string; 
  } else {
    return string.slice(0, 40) + '...'; //якщо у нас буде кількість симловів перевищувати сорок, то ми додамо три крапки
  }
}


const string1 = "hello my name is Jack and i like to create programms and i also like to read a cod of programms , that is existed yet";


console.log(formatString(string1));


// 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє 
// її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо 
// заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

const message = "hello i have a good offer for you it goes about SalE and Spam";

console.log(checkForSpam(message));