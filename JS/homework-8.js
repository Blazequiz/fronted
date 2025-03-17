// 1 join + for 

let friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
let methodJoin = "";
const koma = ","

// for (let i = 0; i < friends.length; i+=1) {
//   newArr += friends[i];
for(let i = 0; i < friends.length; i+=1) {
  methodJoin += friends[i]
  if (i < friends.length - 1) {
    methodJoin += koma
  }
}

console.log(methodJoin);

// 2

const cards = [
  'Card-1',
  'Card-2',
  'Card-3',
  'Card-4',
  'Card-5'
]
const cardToRemove = 'Card-3'
const indexOf = cards.splice(cards.indexOf(cardToRemove) , 1)
console.log(cards);

const cardToInsert = 'Card-6'
const indexOf2 = cards.splice(cards.length, 0 , cardToInsert)
console.log(cards);

const cardToUpdate = 'Card-4'
const indexOf3 = cards.splice(cards.indexOf(cardToUpdate), 0)
console.log(cards);

// Перетворити масив:
const arrayOriginal = ["true", "Kiwi", "Monkong", "Singu", "Mango", "Ajax", "Poly", "false"];

// на масив arrayNew:
//todo: ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"];

// не змінюючи значення елементів та використовуючи методи:
// push(), pop(), unshift(), shift(),
// slice(), splice(), concat() за власним бажанням!

arrayOriginal.pop()
arrayOriginal.shift()
let newArr = arrayOriginal.slice(3, 6)
let secondArr = arrayOriginal.slice(0, 3)
console.log(newArr);
let arrayNew = newArr.concat(secondArr);

console.log(arrayNew);
