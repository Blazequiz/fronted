// 1
/* 
Напиши скрипт, який, для об'єкта user, послідовно:
додає поле mood зі значенням 'happy'
замінює значення hobby на 'skydiving'
замінює значення premium на false
виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
*/

const user = {
  hobby: "traveling",
  premium: true
}

const { mood = "happy" , hobby = "skydiving" , premium = false } = user
console.log(mood, hobby, premium);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// 2
/*
Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
Функція повертає число — кількість властивостей.
*/

const countProps = (obj) => {
  const keys = Object.keys(obj);
  let totalKeys = 0;
  for (let i = 0; i < keys.length; i+=1) {
    totalKeys += 1;
  }
  return totalKeys
}

console.log(countProps(user));

// 3
/* 
Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і 
повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі 
"ім'я":"кількість задач".
*/



const employees = {
  employer1: 5,
  employer2: 10,
  employer3: 7,
  employer4: 12,
  employer5: 4,
  employer6: 11
}

const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee = '';

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};


console.log(findBestEmployee(employees));

// 4
/* 
Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
Функція рахує загальну суму зарплати працівників і повертає її. 
Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
*/
 

const employeesSalary = {
  mango: 100,
  poly: 150,
  alfred: 80,
}

const countTotalSalary = (employees) => {
  let totalSalary = 0;
  console.log(employees);
  const keys = Object.keys(employees)
  for (const key of keys) {
    totalSalary += employees[key]
  }
  console.log(`${totalSalary}$`);
} 

countTotalSalary(employeesSalary)

// 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів 
// і ім'я властивості. Повертає масив значень певної 
// властивості prop з кожного об'єкта в масиві.

const products = [
  { 
    name: 'Радар', 
    price: 1300, 
    quantity: 4 
  },
  { 
    name: 'Сканер', 
    price: 2700, 
    quantity: 3 
  },
  { 
    name: 'Дроїд', 
    price: 400, 
    quantity: 7 
  },
  { 
    name: 'Захоплення', 
    price: 1200, 
    quantity: 2 
  },
];

const getAllPropValues = function (arr, prop) {
  const propertiesArr = [];
  for(const element of arr) {
    if(Object.hasOwn(element, prop)) {
      propertiesArr.push(element[prop])
    }
  }
  return propertiesArr;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, ""));

// 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.


const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
    for(const { name , price , quantity} of allProdcuts) {
      if( name === productName) {
        return `${price * quantity}$`
      }
    }
    return `Product is not found`
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроїд')); // 2800

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const {DEPOSIT , WITHDRAW} = Transaction;

const userChoice = DEPOSIT;
const userAmount = 500;

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      type,
      amount
    };
    if (type === DEPOSIT) {
      this.deposit(amount);
      this.transactions.push(transaction);
      return transaction;
    } else if (type === WITHDRAW) {
      if (this.balance >= amount) {
        this.withdraw(amount);
        this.transactions.push(transaction);
        return transaction;
      } else {
        console.log("Недостатньо коштів");
        return null;
      }
    } else {
      console.log("Невідомий тип транзакції");
      return null;
    }
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    return console.log(this.balance += amount);;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`Недостатньо коштів`);
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}$`);
    return this.balance;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    console.log(`Your belance equal ${this.balance}$`);
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for(const {id: transactionId, type, amount } of this.transactions) {
      if( transactionId === id) {
        return console.log({transactionId, type, amount});
      }
    } 
    return console.log(`Something went wrong`);
    // for(const item of this.transactions) {
    //   if(item.id === id) {
    //     return item
    //   }
    // }
    // return `This id doesn't exist`
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    if(type === DEPOSIT){
      let allCash = 0;
      let depositArr = [];
      for(const {id, type: transactionType , amount} of this.transactions) {
        if(transactionType === DEPOSIT) {
          depositArr.push({id, transactionType, amount});
          allCash += amount;
        } else {
          continue;
        }
      }
      return console.log(`deposite amount ${allCash}$ and the history of deposits: ${depositArr}`);
    } else if (type === WITHDRAW){
      let allCash = 0;
      let withdrawArr = [];
      for(const {id, type: transactionType, amount} of this.transactions) {
        if(transactionType === WITHDRAW) {
          withdrawArr.push({id, transactionType, amount});
          allCash += amount;
        } else {
          continue;
        }
      }
      return console.log(`withdraw amount -${allCash}$ and the history of deposits`, withdrawArr);
    }
    return `Type is not correct!`
  },
};
account.createTransaction(4500, DEPOSIT)
account.createTransaction(500, WITHDRAW)
account.createTransaction(4500, DEPOSIT)
account.createTransaction(500, WITHDRAW)
account.createTransaction(4500, DEPOSIT)
account.getBalance();
console.log(account.transactions);
account.getTransactionDetails(1);
account.getTransactionTotal(WITHDRAW)
