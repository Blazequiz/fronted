// 1 Створіть функцію processArray(array, callback), 
// яка приймає масив та функцію-колбек. Викличте processArray з різними масивами 
// та функціями-колбеками, щоб виконати наступні операції:

const processArray = (array, callback) => {
  return console.log(callback(array));
};
const getSum = (arr) => {return arr.reduce((acc, curr) => acc + curr)}
const getMin = (arr) => {return Math.min(...arr)}
const getMax = (arr) => {return Math.max(...arr)}

processArray([1, 2, 3, 4, 5, 6, 7], getSum);
processArray([1, 2, 3, 4, 5, 6, 7], getMax);
processArray([1, 2, 3, 4, 5, 6, 7], getMin);

// 1 Порахувати суму всіх елементів масиву.
// 2 Знайти мінімальний елемент масиву.
// 3 Знайти максимальний елемент масиву.
// 4 Перепишіть колбек-функції на стрілки

const operate = (a, b, callback) => {
  return callback(a , b);
};

// Виклик функції з різними операціями
console.log(operate(10, 5, (a, b) => { return a - b})); // Віднімання
console.log(operate(10, 5, (a, b) => { return a + b})); // Додавання
console.log(operate(10, 5, (a, b) => { return a * b})); // Множення
console.log(operate(10, 5, (a, b) => { return a / b})); // Ділення