// Object - объект;
// Ссылочный и уникальный тип

// const object = {}
// console.log({} == {});

// Свойство
// Key
// value

// const obj = {
//   name: "Argen",
// };
// console.log(obj);
// console.log(obj.name);

// obj.age = 20;
// obj.name = "Bilal";
// console.log(obj);

// console.log(obj.age);
// console.log(obj["age"]);

// const company = {
//   "motion web": "IT Academy",
//   isActive: true,
//   users: [1, 2, 3, 4, 5],
// };
// // delete company["motion web"];

// console.log(company["motion web"]);
// console.log(company);

////////////////////////////////////////
// //object.keys()
// const user = {
//   username: "qwert...",
//   email: "email@gmail.com",
//   password: "12345",
//   age: 20,
// };
// console.log(Object.keys(user));

// //object.values()
// console.log(Object.values(user));

// //object.entries()
// console.log(Object.entries(user));

//object.frizze()
//  const car = {
//     name:'Lexus'
//     model:'LS570'
//  }

// 1. Создайте пустой объект в JavaScript.

// const obj = {};
// console.log(obj);

// 2. Создайте объект с двумя свойствами: "имя" и "возраст".

// const obj = {
//   name: "Aidai",
//   age: "20",
// };
// console.log(obj);

// 3. Получите значение свойства "имя" из объекта и выведите его в консоль.

// const obj = {
//   name: "Aidai",
// };
// console.log(obj.name);

// 4. Измените значение свойства "возраст" в объекте на новое значение.

// const obj = {
//   name: "Aidai",
//   age: 20,
// };
// obj.age = 21;
// console.log(obj);

// 5. Добавьте новое свойство "город" в объект.

// const obj = {
//   name: "Aidai",
//   age: 20,
// };
// obj.age = 21;
// obj.city = "Bishkek";
// console.log(obj);

// 6. Проверьте, существует ли свойство "город" в объекте.

// const obj = {
//   name: "Aidai",
//   age: 20,
// };
// obj.age = 21;
// obj.city = "Bishkek";
// console.log("city" in obj);
// console.log(obj.hasOwnProperty("city"));
// console.log(!!obj.city);

// 7. Удалите свойство "возраст" из объекта.

// const obj = {
//   name: "Aidai",
//   age: 20,
// };
// obj.age = 21;
// obj.city = "Bishkek";

// delete obj.age;

// console.log(obj);

// 8. Переберите все свойства объекта и выведите их в консоль.

// const obj = {
//   name: "Aidai",
//   age: 20,
// };
// obj.age = 21;
// obj.city = "Bishkek";
// console.log(Object.entries(obj));

// 9. Создайте функцию, которая принимает объект и возвращает количество его свойств.

// function getCountProperties(obj) {
//   return Object.entries(obj).length;
// }
// console.log(getCountProperties({ name: "Aidai", age: 20 }));

// 10. Создайте объект, который содержит массив в качестве значения одного из свойств.

// const obj = {
//   name: "Aidai",
//   arr: [1, 2, 3, 4, 5],
// };
// console.log(obj);

// 11. Получите доступ к элементу массива внутри объекта и выведите его в консоль.

// const obj = {
//   arr: ["qwerty"],
// };
// const res = obj.arr[0];
// console.log(res);

// 12. Измените элемент массива внутри объекта на новое значение.

// const obj = {
//   arr: [1, 2, 3, 4, 5],
// };
// obj.arr[0] = 10;
// console.log(obj.arr);

// 13. Создайте метод в объекте, который выводит в консоль все его свойства.

// 14. Создайте два объекта и объедините их в один новый объект.

// const obj0 = {
//   name: "Aidai",
// };
// const obj1 = {
//   city: "Bishkek",
// };
// const obj = {
//   ...obj0,
//   ...obj1,
// };
// console.log(obj);

// 15. Проверьте, является ли объект массивом.

// const obj = {
//   name: "Aidai",
//   arr: [1, 2, 3, 4, 5],
// };
// console.log(Array.isArray(obj));
// console.log(Array.isArray([]));

// 16. Создайте объект, у которого в качестве ключей используются числа.

// const obj = {
//   1: "one",
//   2: "two",
//   3: "three",
// };
// console.log(obj);

// 17. Получите сумму всех значений числовых свойств объекта.

// const obj = {
//   1: 4,
//   2: 3,
//   3: 10,
// };
// const sum = Object.values(obj).reduce((acc, el) => acc + el, 0);
// console.log(sum);

// 18. Измените порядок свойств объекта на обратный.
// 19. Проверьте, содержит ли объект определенное свойство.

// const obj = {
//   name: "Edu",
//   age: 19,
//   job: "Investigator",
// };
// console.log(!!obj.job);

// 20. Создайте функцию-конструктор для создания объектов определенного типа и создайте несколько экземпляров этого объекта.

// function obj(name, age) {
//   (this.name = name), (this.age = age);
// }
// const person1 = new obj("Nur", 19);
// const person2 = new obj("Aidai", 20);
// console.log(person1);
// console.log(person2);

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const keys = Object.keys(obj).length;
// console.log(keys);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(obj["c"]);
// console.log(obj.c);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// console.log(obj.Атай, obj.Ширин);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// obj.Атай = "500";
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
// };
// obj.Медет = "1500";
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
//   salary: "500",
// };
// console.log(obj.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// const obj = {
//   1: "пн",
//   2: "вт",
//   3: "ср",
//   4: "чт",
//   5: "пт",
//   6: "сб",
//   7: "вс",
// };
// console.log(obj["7"]);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// const obj = {
//   1: "пн",
//   2: "вт",
//   3: "ср",
//   4: "чт",
//   5: "пт",
//   6: "сб",
//   7: "вс",
// };
// const day = 1;
// console.log(obj[day]);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
//   salary: "500",
// };
// console.log(Object.keys(obj));

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
//   salary: "500",
// };
// console.log(Object.values(obj));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// const obj = {
//   Ширин: "1000",
//   Айжан: "500",
//   Атай: "200",
//   salary: "500",
// };
// console.log(Object.entries(obj));

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// function KeyLength(obj) {
//   const key = Object.keys(obj)[0];
//   const result = key ? key.length % 2 : undefined;
//   console.log(result === undefined ? "1" : result);
// }
// KeyLength({ name: "igor" });

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// function printIds(arr) {
//   arr.forEach((obj) => console.log(obj.id));
// }
// printIds([{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }]);

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.

// function Object(obj) {
//   obj.age = 25;
//   obj.name = "Azat";
// }
// const person = { name: "Igor" };
// Object(person);
// console.log(person);

// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// const product = {
//   name: "headphones",
//   price: 100,
//   discount: 0,
// };

// if (product.price > 100) {
//   product.price -= 0.1 * product.price; // Снижаем на 10%
// } else {
//   product.price -= 0.07 * product.price; // Делаем скидку на 7%
// }

// console.log(product);

// let userData = [
//   {
//     id: 1,
//     name: "Dastan",
//     age: 16,
//     job: "developer",
//   },
//   {
//     id: 2,
//     name: "Emir",
//     age: 18,
//     job: "developer",
//   },
//   {
//     id: 3,
//     name: "Adana",
//     age: 19,
//     job: "developer",
//   },
//   {
//     id: 4,
//     name: "Tinatin",
//     age: 22,
//     job: "developer",
//   },
//   {
//     id: 5,
//     name: "Aiym",
//     age: 19,
//     job: "developer",
//   },
//   {
//     id: 6,
//     name: "Cholponai",
//     age: 16,
//     job: "developer",
//   },
//   {
//     id: 7,
//     name: "Aidai",
//     age: 23,
//     job: "developer",
//   },
// ];
// function task(userData) {
//   return userData.map((el) => {
//     return el.name;
//   });
// }
// console.log(task(userData));

// function task(userData) {
//   return userData.filter((el) => {
//     return el.age > 18;
//   });
// }
// console.log(task(userData));

// function task(userData) {
//   Object.keys(userData).map((el, idx) => {
//     if (el === "name") {
//       task(([el] = idx % 2 === 1 ? userData[el].toUpperCase() : userData[el]));
//     } else {
//       task(([el] = userData[el]));
//     }
//   });
// }
// console.log(task(userData));

// function task(userData) {
//   return userData.map((el) => {
//     if (el.name === "Aiym") {

//     }
//   });
// }
// console.log(task(userData));
