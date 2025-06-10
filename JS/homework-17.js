// 1. 
// Створити розмітку з кнопкою та текстовим полем. 
// За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами 
// та змінити текст на кнопці на значення текстового поля.

const button = document.querySelector(".btn")
console.log(button);
const paragraph = document.querySelector(".paragraph")
console.log(paragraph);
// 2. 
// Створити розмітку з заголовком та зображенням. 
// За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" 
// на шлях до іншого зображення.

const image = document.querySelector("#porsche")
console.log(image);
image.src = "https://files.porsche.com/filestore/image/multimedia/none/motorsport-racingcars-911gt3cup2021/normal/55942a12-6f79-11eb-80d2-005056bbdc38/porsche-normal.jpg"
console.log(image);
// 3. 
// Створити розмітку з посиланням та зображенням. 
// За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. 
// Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const link = document.querySelector("#link")
console.log(link.href);
link.href = "https://www.youtube.com/"
console.log(link);
const secondImage = document.querySelector(".secondImage")
console.log(secondImage);
secondImage.alt = "iphone-image"

// 4. 
// творити розмітку зі списком елементів. 
// За допомогою JavaScript отримати доступ до першого елемента списку 
// та змінити його вміст на новий текст.

const firstListEl = document.querySelector(".list > li")
console.log(firstListEl);
firstListEl.textContent = 'Hello world!'
