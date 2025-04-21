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

user.mood = "happy"
user.hobby = "skydiving"
user.premium = false

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
    for(const product of allProdcuts) {
      if(product.name === productName) {
        return `${product.price * product.quantity}$`
      }
    }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроїд')); // 2800