// Створити масив з трьох чисел. 
// Змінити значення другого елемента масиву на 10.

const arrOfThreeNumbers = [12, 23, 35]
console.log(arrOfThreeNumbers[1]);
arrOfThreeNumbers[1] = 32;
console.log(arrOfThreeNumbers[1]);


// Створити масив із трьох рядків. 
// Додати до масиву ще одну рядків.

const arrayOfStrings = ["C++", "C", "Python"]

arrayOfStrings[3] = "Swift"
console.log(arrayOfStrings);

// Створити скрипт який поверне 
// суму всіх чисел в масиві.

const array = [12, 45, 87, 45, 85, 47, 855, 632, 532]
let sum = 0;

for (let i = 0; i < array.length; i+=1) {
  sum += array[i];
}
console.log(sum);


// Створити масив з 5-ти чисел. 
// Вивести на екран всі елементи масиву за допомогою циклу for.

const array2 = [12, 25, 76, 32, 23]

for (const allNumbers of array2) {
  console.log(allNumbers);
}

// Створити масив із 5-ти рядків. 
// Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const arrayStrings = ["privet", "john", "fortnite", "dota", "osu"]

for (let i = 0; i < arrayStrings.length; i+=1) {
  if (arrayStrings[i].length < 5) {
    continue
  }
  console.log(arrayStrings[i]);
}

// Створити масив з 10-ти чисел. 
// Знайти та вивести на екран максимальне значення з масиву.

const arr4 = [1, 2, 3, 4, 5, 21, 45, 63, 89, -1, -90]
let maxNumber = 0;

for (let i = 0; i < arr4.length; i+=1) {
  if(arr4[i] > maxNumber) {
    maxNumber = arr4[i]
  } 
}
console.log(maxNumber);

// Створити масив з 10-ти чисел. 
// Знайти всі парні числа в масиві та вивести їх на екран.

const array5 = [1, 2, 3, 4, 5, 21, 45, 63, 89]

for (let i = 0; i < array5.length; i+=1) {
  if (array5[i] % 2 !== 0) {
    continue
  }
  console.log(array5[i]);
}
