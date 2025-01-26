// const isAdmin = confirm("Are u Admin");
// console.log("The User is admin: ", isAdmin);
// Classwork
// const userName = "Enter your name:"
// const userAnswerName = prompt(userName);
// const userAge = "Enter your age:"
// const userAnswerAge = prompt(userAge);
// const userSername = "Enter your sername:"
// const userAnswerSername = prompt(userSername);
// console.log(userAnswerName, userAnswerAge , userAnswerSername , typeof userAnswerAge);

// const userNumberAge = Number(userAnswerAge);
// console.log("user age:", userNumberAge , typeof userNumberAge);
//
// const renewalOfSubscription = "Do you want to renew your Subscription"
// const renewalOfSubscriptionBoolean = confirm(renewalOfSubscription);
// console.log("The answer of user: " , renewalOfSubscriptionBoolean);

// Homework
const myAge = 17;
const myName = "Oleks";
const myString =
  "Жодна перемога не принесе стільки, скільки може забрати одна поразка";
const isStudent = false;
const myNumber = 15;
let sumOfNumber = myNumber + 10;
const myNull = null;
console.log("User age: ", myAge ,"|", "User name: " , myName ,"|", "User string: " , myString ,"|", "Is user student: " , isStudent ,"|", "User number: " , myNumber ,"|", "Sum of user number and 10: " , sumOfNumber ,"|", "User null : " , myNull);

// Створити скрипт який виводить 
// спливаюче вікно з запитом на введення імені користувача “Введіть своє ім’я” 
// за допомогою prompt(). Результат зберегти в змінній userName. Після вивести alert з отриманим ім’ям. 
// Також перевірити за допомогою typeof тип змінної userName при отриманні імен.
const enterUserName = "Введіть своє ім`я: "
const userName = prompt(enterUserName);
// console.log("Your name is ", typeof userName)
alert("Your Name is - " + userName);

// 

const leavePage = "Ви дійсно хочете покинути сторінку?";
const userAnswer = confirm(leavePage);
console.log("the answer is: ", userAnswer);

// 

const attentionMessage = "Увага! Дія може бути небезпечною!";
alert(attentionMessage)
const isSure = "Ви впевнені, що хочете продовжити?"
const isUserContinue = confirm(isSure)
console.log("the user is answering: ", isUserContinue);
