// Следующая функция возвращает `true`, если параметр `age` больше `18`.
// В ином случае она задаёт вопрос `confirm` и возвращает его результат.

function checkAge(age) {
    (age>18) ? true : confirm('Родители разрешили?')
  }  

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n){
  let result = x;
  for(let i = 1; i < n; i++){
    result *= x;
  }
  return result;
}
let x = prompt("Value x?", '');
let n = prompt("Value n?", '');

if(n<1) {
  alert(`Значение ${n} должно быть положительным`);
}else{
  alert(pow(x,n));
}

// Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort((a, b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10

//У вас есть массив объектов `user`, и в каждом из них есть `user.name`. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(i => i.name);

alert( names ); // Вася, Петя, Маша

// У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.
// Напишите код, который создаст ещё один массив объектов с параметрами 
//`id` и `fullName`, где `fullName` – состоит из `name` и `surname`.
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//Напишите функцию `getAverageAge(users)`, которая принимает массив объектов со свойством `age`и возвращает средний возраст.
//Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28