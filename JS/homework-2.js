const requestCelsiusVariable = prompt("Enter the frangheit number: ");

const numberСonversionFarenheit = requestCelsiusVariable * 1.8 + 32; 
console.log(alert("Here is the result: " + numberСonversionFarenheit));

const monthJanuary = 31;
console.log("Here are the minutes in this month's: ", monthJanuary * 24 * 60);

let healthPoints = 100;
let energyPoints = 100;

const resultOfEnergyPoints =  100 - 10
const resultOfHealthPoints = 100 - 20

console.log("Your health point and energy point are there: " , resultOfHealthPoints + "hp" ,"|", resultOfEnergyPoints + "en" );

const commodityPrice = prompt("Enter a price here: ") 
let theDiscountPrice = commodityPrice * 0.1
let priceWithDiscount = commodityPrice - theDiscountPrice;
alert("Here is your discounted price: " + priceWithDiscount) 

// 5

let rundOfNumber = 1.7
console.log("Here is the result: ", Math.floor(rundOfNumber))

// 6 

const flotingPointNumber = "5.35pxemrem"
console.log("Here is the result: ", Number.parseFloat(flotingPointNumber)); 

// 7 Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.

const stringNumber = "5.35pxemrem"
console.log("Here is the result: ", Number.parseInt(stringNumber)); 

// 8

const rootOfTheNumber = prompt("enter the number from which you want to extract the root: ");
let resultOfTheNumberRoot = Math.sqrt(rootOfTheNumber);
alert("Here is the root of your number which you have choosed: " + resultOfTheNumberRoot);

// 9

const stringsAndNumbers = "5.35pxemrem"
console.log("Here is the result: ", Number.parseInt(stringsAndNumbers)); 
const methodToString = 456;
const stringValue = methodToString.toString()
console.log("Here is your string: ", "|" , stringValue) 

