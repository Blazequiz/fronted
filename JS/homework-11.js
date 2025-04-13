// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, 
// та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. 
// Після проведення операції виводити повідомлення про залишок на рахунку. 
// 1

const bankAccount = {
   ownerName: "Alex",
   accountNumber: 768456789632,
   balance: 4500,
   deposit(newMoneys) {
    this.balance += newMoneys;
    alert(`Поповнення на ${newMoneys}.`);
   },
   withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів!");
    } else {
      this.balance -= amount;
      alert(`Знято ${amount}.`);
    }
   },
   operate() {
    if(confirm("Хочете поповнити рахунок?")){
      const amount = parseFloat(prompt("Введіть суму для поповнення:"));
      if (!isNaN(amount)) {
        this.deposit(amount)
      }
    } else if (confirm("Хочете зняти кошти?")) {
      const amount = parseFloat(prompt("Введіть суму для зняття:"));
      if (!isNaN(amount)) {
        this.withdraw(amount)
      }
    }
   }
}

// bankAccount.operate();
// console.log(bankAccount.balance);

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", 
// якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
// 2

// const temperature = parseFloat(prompt("Enter the temperature: "))

// const weather = {
//   temperature: temperature,
//   humidity: 700,
//   windSpeed: 5,
//   isEnoughWarm() {
//     if(this.temperature < 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(weather.isEnoughWarm());

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
// Додайте метод "login", який буде перевіряти правильність введеного email та password. 
// 3

const user = {
  name: "Chessplayer1",
  email: "chessplayer2001@gmail.com",
  password: "adsas1213@#34s",
  login (email, password) {
    if (email === this.email && password === this.password) {
      return true
    } else {
      return false
    }
  }
}

console.log(user.login("chessplayer2001@gmail.com", "adsas1213@#34s"));

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", 
// якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
// 4

const movie = {
  title: "Scary Movie",
  director: "Addie Hall",
  year: "1999",
  rating: 10,
  rated() {
    if(this.rating > 8) {
      return true
    } else {
      return false
    }
  }
}

console.log(movie.rated());