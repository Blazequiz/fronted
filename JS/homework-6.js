// Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.

let value = 0;

while (value < 10) {
  value++;
  console.log(value);
}

// Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. 
// Якщо число парне, пропустити його за допомогою continue.
let nums = 0;

for (let i = 2; i <= 20; i+=1) {
  if (i % 2 !== 0) {
    continue
  }
  console.log(i);
}

// Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

const userNumber = 7;

for (let i = 1; i <= 10 ; i++) {
  console.log(`${i} * ${userNumber} = ${i * userNumber}`);
}

// Створити скрипт, який виводить в консоль всі числа , які менші за n. 
// Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const num2 = 8;

for (let i = 1; i < 10; i++) {
  if (i >= num2) {
    break
  }
  console.log(i);
}


// За допомогою циклу while вивести в консоль всі числа від 1 до 20, 
// крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let minValue = 1;

while ( minValue <= 20) {
  if (minValue % 3 !== 0) {
    console.log(minValue);
  }
  minValue++;
}