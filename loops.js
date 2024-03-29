// loops: for

// 1. Выведите столбец чисел от 1 до 50.

// for (i = 1; i <= 50; i++) {
//   console.log(i);
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.

// let arr = [];
// for (i = 0; i < 10; i++) {
//   arr.push("X");
// }
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let res = 0;
// for (let i = 0; i <= 100; i++) {
//   res += i;
// }
// console.log(res);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let arr = [2, 4, 5, 6, 8];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [3, 4, 6, 12, 3, 5];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [2, -3, 4, -5, 6];
// res = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     res += arr[i];
//   }
// }
// console.log(res);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [5, 1, 4, 7, 6, 15, 3, 20];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть!");
//   } else {
//     console.log("nothing" );
//   }
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 40, 135, 2000];
// for (i = 0; i < arr.length; i++) {
//   let str = arr[i].toString()[0];
//   if (str === "1" || str === "2" || str === "5") {
//     console.log(arr[i]);
//   }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = "-";
// for (i = 0; i < arr.length; i++) {
//   res += arr[i] + "-";
// }
// console.log(res);

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;
// for (i = 0; n >= 50; num++) {
//   n /= 2;
// }
// console.log(n);
// console.log(num);

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let arr = [1, 2, 3, 7, 6, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   console.log(sum);
// }
// let res = sum / arr.length;
// console.log(res);

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Math.pow(arr[i], 2);
// }
// console.log(sum);

// Копирование массива:
// const originalArray = [1, 2, 3];
// const result = [...originalArray];
// console.log(result.reduce((acc, el) => acc + el, 0));
// console.log(originalArray);

// Объединение массивов:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// let result = [...array1, ...array2];
// console.log(result);

// Добавление элементов в массив:
// const originalArray = [1, 2, 3]; // [1, 2, 3, 4, 5]
// originalArray.push(4, 5);
// console.log(originalArray);

// Копирование объекта:
// const originalObject = { name: "John", age: 30 };
// const result = { ...originalObject };
// console.log(result);

// Добавление свойств к объекту:
// const originalObject = { name: "John" }; // { name: "John", age: 30 }
// originalObject.age = 30;
// console.log(originalObject);

// // Объединить два объекта
// // // { name: 'Анна', age: 30, city: 'Москва', job: 'разработчик' }
// let person = {
//   name: "Анна",
//   age: 30,
// };

// let details = {
//   city: "Москва",
//   job: "разработчик",
// };
// let obj = { ...person, ...details };
// console.log(obj);

// // Дан массив с объектами
// let users = [
//   { name: "Jack", age: 35, work: "IT-backend developer" },
//   { name: "Helen", age: 35, work: "Nurse" },
//   { name: "Bob", age: 35, work: "Driver" },
//   { name: "Jessica", age: 35, work: "IT-frontend developer" },
//   { name: "Hel'ga", age: 35, work: "IT-HR" },
// ];

// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере.

//TODO4  Дан массив let lengthName = [Patricia , William , Barbara , James , Chloe , Elizabeth ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().
// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];
// let res = lengthName.map((el) => {
//   return el.length;
// });
// console.log(res);

// TODO5  Дан массив с объектами:
// const cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020,  price: 120000, sale: 0 },
// ];
// cars.forEach((car) => {
//   if (car.year > 2007) {
//     car.sale = car.price * 0.2;
//   }
// });
// console.log(cars);

// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

//  TODO 4. Напишите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.
//  90 <= оценка <= 100 «А»
//  80 <= оценка < 90 «В»
//  70 <= оценка < 80 «С»
//  60 <= оценка < 70 «D»
//  0 <= оценка < 60  «F»
// Напишите функцию для преобразования имени в инициалы. Аргумент в видес строки  строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так:

// Sam Harris => S.H

// patrick feeney => P.F

// Создайте функцию, которая принимает число и возвращает массив чисел от 1 до этого числа

// let task = (num) => {
//   for (i = 1; i < num; i++) {
//     console.log(i);
//   }
//   return i;
// };
// console.log(task(60));
