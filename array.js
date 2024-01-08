// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ["a", "b", "c"];
// arr.push(1, 2, 3);
// console.log(arr);

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr = [1, 2, 3],
//   arr1 = [4, 5, 6];

// console.log(arr.concat(arr1));

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ["js", "css", "jq"];
// console.log(arr.shift());

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ["js", "css", "jq"];
// console.log(arr.pop());

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3,5));

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 1);
// arr.splice(3, 1);
// console.log(arr);

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);

// Добавление и удаление элементов в конце массива:
//   Создайте массив с несколькими элементами. Используйте push для добавления нового элемента в конец массива, а затем pop, чтобы удалить последний элемент. Выведите массив после каждой операции.

// let arr = [1, 2, 3, 4, 5];
// arr.push("a");
// arr.pop("a");
// console.log(arr);

//   Добавление и удаление элементов в начале массива:
//   Создайте массив с несколькими элементами. Используйте unshift для добавления нового элемента в начало массива, а затем shift, чтобы удалить первый элемент. Выведите массив после каждой операции.

// let arr = [1, 2, 3, 4, 5];
// arr.unshift("b");
// arr.shift("b");
// console.log(arr);

// Разделение массива:
// Создайте массив с несколькими элементами. Используйте pop для удаления последнего элемента, а затем shift, чтобы удалить первый элемент, и выведите новый массив.

// let arr = [1, "a", "i", "d", "a", "i", 2];
// arr.pop();
// arr.shift();
// console.log(arr);

// Создать массив fruits = ["яблоко", "апельсин", "груша"]
// Добавить элемент в конец массива; // ['яблоко', 'апельсин', 'груша', 'банан']
// Удалить последний элемент массива
// ['яблоко', 'апельсин', 'груша']

// let fruits = ["яблоко", "апельсин", "груша"];
// fruits.push("банан");
// fruits.pop();
// console.log(fruits);

// Объединить два массива с помощью push
// [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr1.push(...arr2);
// console.log(arr1);

// Удалить последний элемент и добавить новый элемент в начало массива
// [0, 1, 2, 3, 4]

// let numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// numbers.unshift(0);
// console.log(numbers);

// Добавить элементы в очередь

// let queue = ["третий", "второй", "первый"];
// console.log(queue); // ['третий', 'второй', 'первый']
// let queue = []
// queue.push("")
// console.log(queue);
// Удалить элемент из очереди (первый добавленный)

// let queue = ["третий", "второй", "первый"];
// queue.pop();
// console.log(queue); // ['третий', 'второй']

// Удалить один элемент, начиная с индекса 2
// [10, 20, 40, 50]
// Удалить три элемента, начиная с индекса 1
// [10]

// let numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 1);
// numbers.splice(1, 3);
// console.log(numbers);

// Вставить 'желтый' на место индекса 1, удалить 0 элементов
// ['красный', 'желтый', 'зеленый', 'синий']

// let colors = ["красный", "зеленый", "синий"];
// colors.splice(1, 0, "желтый");
// console.log(colors);

// Заменить 'зеленый' на 'фиолетовый'
// ['красный', 'желтый', 'фиолетовый', 'синий']

// let colors = ["красный", "зеленый", "синий"];
// colors.splice(1, 0, "желтый");
// colors.splice(2, 1, "фиолетовый");
// console.log(colors);

// Добавить два элемента ('Фольксваген' и 'Тойота') начиная с индекса 1
// ['Мерседес', 'Фольксваген', 'Тойота', 'БМВ', 'Ауди']

// let cars = ["Мерседес", "БМВ", "Ауди"];
// cars.splice(1, 0, "Фольксваген", "Тойота");
// console.log(cars);

// Заменить один элемент на другой, начиная с индекса 0
// ['фиолетовый', 'желтый', 'синий']

// let colors = ["красный", "желтый", "синий"];
// colors.splice(0, 1, "фиолетовый");
// console.log(colors);

// Удалить два элемента начиная с индекса 1 и сохранить их в новом массиве
// ['груша', 'апельсин']

// let fruits = ["яблоко", "груша", "апельсин", "банан"];
// let result = fruits.slice(1, 3);
// console.log(result);

// Во всех задачах используйте только методы map, filter.

// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

// let arr = [315, 64, 75, 43, 65, 63];
// console.log(
//   arr.map((el) => {
//     return el + el;
//   })
// );

// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// let arr = ["Аскар", "Баяман", "Калмамат"];
// let err = arr.map((el) => {
//   return el.toLowerCase().replaceAll("а", "я");
// });
// console.log(err);

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.

// let arr = ["Аскар", "Баяман", "Калмамат"];
// let arr2 = arr.filter((el) => {
//   return el.toLowerCase().includes("к");
// });
// console.log(arr2);

// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.

// let arr = [4, 54, 49];
// let arr1 = arr.map((el) => {
//   return el * el;
// });
// console.log(arr1);

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// let arr = [3134, 4, -143, -245, -214];
// let arr1 = arr.filter((el) => {
//   return el < 0;
// });
// console.log(arr1);

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// let arr = [3, 51, 30, 54, 60]

// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// let arr = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// let arr1 = arr.filter((el) => {
//   return !el;
// });
// console.log(arr1);

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let arr = ["Бегимай", "Баяман", "Калмамат"];
// let arr1 = arr.map((idx) => {
//   return idx.length;
// });
// console.log(arr1);

// Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// let arr = ["асКар", "бЯяман", "калМмамат"];
// let arr1 = arr.map((el) => {
//   return el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// console.log(arr1);

// Преобразование данных
// Создайте массив чисел и используйте метод map(), чтобы преобразовать числа в строковый формат с добавлением символа "$" в начале каждой строки.
// let prices = [10, 20, 30, 40, 50];

// let prices1 = prices.map((el) => {
//   return el + "$";
// });
// console.log(prices1);

// Использование map() для удвоения значений в массиве:
// let numbers = [1, 2, 3, 4, 5];
// // [2, 4, 6, 8, 10]

// Использование filter() для фильтрации строк по содержанию подстроки:
// let words = ['apple', 'banana', 'grape', 'apricot', 'orange'];
// 'ap'

// // ['apple', 'apricot']

// Использование map() для создания нового массива с квадратами чисел:
// let numbers = [1, 2, 3, 4, 5];
// [1, 4, 9, 16, 25]

// let numbers = [1, 2, 3, 4, 5];
// let numbers1 = numbers.map((el) => {
//   return el ** 2;
// });
// console.log(numbers1);

// Использование map() для добавления индексов к элементам массива:
// let colors = ['красный', 'зеленый', 'синий'];
// // ['1. красный', '2. зеленый', '3. синий']

// let colors = ["красный", "зеленый", "синий"];
// let colors1 = colors.map((el, idx) => {
//   return idx + 1 + "." + el;
// });
// console.log(colors1);

// Проверка наличия элементов, удовлетворяющих условию
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент, удовлетворяющий определенному условию.

// let numbers = [10, 5, 8, 22, 3];
// let numbers1 = numbers.some((el) => {
//   return el === 8;
// });
// console.log(numbers1);

// Проверка наличия элемента больше определенного порога
// Используйте метод some(), чтобы проверить, есть ли в массиве хотя бы один элемент больше 15

// let numbers = [10, 5, 8, 22, 3];
// let numbers1 = numbers.some((el) => {
//   return el > 15;
// });
// console.log(numbers1);

// Проверка наличия строк, содержащих определенную букву
// Используйте метод some(), чтобы проверить, есть ли в массиве строк хотя бы одна строка, содержащая определенную букву “a”

// let words = ["apple", "banana", "cherry", "date"];
// let words1 = words.some((el) => {
//   return el.includes("a");
// });
// console.log(words1);

// Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2

// let numbers = [10, 20, 30, 40, 50];
// let numbers1 = numbers.find((el, idx) => {
//   return idx === 2;
// });
// console.log(numbers1);

// Поиск элемента с использованием функции-коллбэка
// Создайте массив строк и используйте метод find(), чтобы найти первую строку, которая начинается с "b" определенной буквы.

// let words = ["apple", "banana", "cherry", "date"];
// let words1 = words.find((el) => {
//   return el[0] === "b";
// });
// console.log(words1);

// Поиск элемента в массиве
// Создайте массив чисел и используйте метод find(), чтобы найти первый элемент, который больше  25 определенного порогового значения.

// let numbers = [10, 20, 30, 40, 50];
// let numbers1 = numbers.find((el) => {
//   return el > 25;
// });
// console.log(numbers1);

// Использование map() для преобразования массива строк в их длины и фильтрация по длине:// [6, 6]

// let words = ["apple", "banana", "orange", "kiwi", "grape"];
// let words1 = words.map((el) => el.length);
// let words2 = words1.filter((el) => el > 5);
// console.log(words2);

// .includes()

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(5));

// .every()

// const users = ['Ernist','Malika','Emir']
// const res = users.every((el,idx) =>{
//     return el.length > 5
// })
// console.log(res);

// const numbers = [21,23,2,4,5,7]
// const results = numbers.every(number =>{
//     return number % 2 == 0
// })
// console.log(results);

// .forEach()

// const nums = [1, 2, 3, 4, 5, 6, 6];
// let sum = 1;
// nums.forEach((el) => {
//   // sum = sum + el
//   sum += el;
// });
// console.log(sum);

// 1. Найти первый элемент в массиве, который больше 10.

// let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let arr2 = arr.find((el) => {
//   return el > 10;
// });
// console.log(arr2);

// 2. Проверить, все ли элементы массива являются положительными числами.

// let arr = [1, 2, -3, 4, 5];
// let res = arr.every((el) => {
//   return el > 0;
// });
// console.log(res);

// 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.

// let arr = [1, 2, 3, 0, 4, 5];
// let res = arr.some((el) => {
//   return el === 0;
// });
// console.log(res);

// 4. Найти первое четное число в массиве.

// let arr = [3, 4, 5, 6, 7];
// let res = arr.find((el) => {
//   return el % 2 == 0;
// });
// console.log(res);

// 5. Проверить, все ли строки в массиве содержат более 5 символов.

// let arr = ["Aidai", "Eldiyar", "Nurperi"];
// let res = arr.every((el, idx) => {
//   return el.length > 5;
// });
// console.log(res);

// 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.

// let arr = [1, 2, 3, 4, 5,-6];
// let res = arr.some((el) => {
//   return el < 0;
// });
// console.log(res);

// 7. Найти первую строку в массиве, которая начинается с буквы "A".

// let arr = ["Eldiyar", "Aidai", "Nurperi", "Adi"];
// let res = arr.find((el, idx) => {
//   return el[0] === "A";
// });
// console.log(res);

// 8. Проверить, все ли элементы массива являются четными числами.

// let arr = [2, 4, 6, 8, 5];
// let res = arr.every((el) => {
//   return el % 2 == 0;
// });
// console.log(res);

// 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.

// let arr = ["Aidai", "Nurperi", "123kkkkk"];
// let res = arr.some((el) => {
//   if (Number.isNaN(+el)) {
//     return false;
//   }
//   return true;
// });
// console.log(res);

// 10. Найти первый элемент массива, который делится на 3 без остатка.

// let arr = [4, 5, 6, 7, 9];
// let res = arr.find((el) => {
//   return el % 3 == 0;
// });
// console.log(res);

// 11. Проверить, все ли элементы массива больше 0.

// let arr = [-1, 2, 3, 4, 5];
// let res = arr.every((el) => {
//   return el > 0;
// });
// console.log(res);

// 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.

// let arr = ["Aidai", "nurperi", "adi"];
// let res = arr.some((el, idx) => {
//   return /^[A - Z]/.test(el);
// });
// console.log(res);

// 13. Найти первый элемент массива, который меньше 5.

// let arr = [5, 6, 7, 2, 3];
// let res = arr.find((el) => {
//   return el < 5;
// });
// console.log(res);

// 14. Проверить, все ли элементы массива являются строками.

// let arr = ["str", "234", "qwerty"];
// let res = arr.every((el) => {
//   return typeof el === "string";
// });
// console.log(res);

// 15. Проверить, есть ли в массиве хотя бы один элемент, равный "apple".

// let arr = ["banana", "orange", "apple"];
// let res = arr.some((el) => {
//   return el === "apple";
// });
// console.log(res);

// 16. Найти первый элемент массива, который содержит подстроку "JavaScript".

// let arr = ["html", "css", "JavaScript"];
// let res = arr.find((el) => {
//   return el.includes("JavaScript");
// });
// console.log(res);

// 17. Проверить, все ли элементы массива положительны.

// let arr = [-1, 2, 3, 4, 5];
// let res = arr.every((el) => {
//   return el > 0;
// });
// console.log(res);

// // 18. Проверить, есть ли в массиве хотя бы одна строка, длина которой больше 10 символов.

// let arr = ["Hasanbaeva", "Nurgaziev", "Bakytbekovna"];
// let res = arr.some((el) => {
//   return el.length > 10;
// });
// console.log(res);

// 19. Найти первый элемент массива, который является нечетным числом.

// let arr = [2, 4, 5, 6, 7];
// let res = arr.find((el) => {
//   return el % 2 !== 0;
// });
// console.log(res);

// 20. Проверить, все ли элементы массива являются отрицательными числами.

// let arr = [-1, -2, -3];
// let res = arr.every((el) => {
//   return el < 0;
// });
// console.log(res);

// 21. Проверить, есть ли в массиве хотя бы один элемент, равный "banana".

// let arr = ["kiwi", "banana", "apple"];
// let res = arr.some((el) => {
//   return el === "banana";
// });
// console.log(res);

// 22. Найти первую строку в массиве, которая содержит только гласные буквы.

// 23. Проверить, все ли элементы массива являются кратными 4 числами.

// let arr = [4, 8, 12, 16];
// let res = arr.every((el) => {
//   return el % 4 == 0;
// });
// console.log(res);

// 24. Проверить, есть ли в массиве хотя бы один элемент, являющийся палиндромом.

// let arr = ["kiwi", "banana", "apple", "radar"];
// let res = arr.some((el) => {
//   return el === el.split("").reverse().join("");
// });
// console.log(res);

// 25. Найти первый элемент массива, который больше 100.

// let arr = [23, 19, 67, 111, 121];
// let res = arr.find((el) => {
//   return el > 100;
// });
// console.log(res);

// 26. Проверить, все ли элементы массива являются целыми числами.

// let arr = [19, 23, 24,'66'];
// let res = arr.every((el) => {
//   return typeof el === "number";
// });
// console.log(res);

// 27. Проверить, есть ли в массиве хотя бы одна строка, заканчивающаяся на "tion".

// let arr = ["qwerty", "123", "motion"];
// let res = arr.some((el) => {
//   return el.endsWith("tion");
// });
// console.log(res);

// 28. Найти первый элемент массива, который содержит только цифры.

// let arr = ["qwerty", "123", 321];
// let res = arr.find((el) => {
//   return typeof el === "number";
// });
// console.log(res);

// let arr = ["qwerty", "123", "mm12"];
// let res = arr.find((el) => {
//   return !Number.isNaN(+el);
// });
// console.log(res);

// 29. Проверить, все ли элементы массива являются простыми числами.

// 30. Проверить, есть ли в массиве хотя бы один элемент, являющийся числом Фибоначчи.

// 1) Удвоение элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.

// function task(arr) {
//   return arr.map((el) => el * 2);
// }
// let arr = [1, 2, 3, 4, 5];
// let res = arr;
// console.log(task(res));

// 2) Преобразование строк в верхний регистр
// Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.

// const task = (arr) => {
//   return arr.map((str) => str.toUpperCase());
// };
// let arr = ["aidai", "nurperi", "edu"];
// let res = arr;
// console.log(task(res));

// 3)  Вычисление суммы элементов массива. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// function task(nums) {
//   return nums.reduce((acc, el) => acc + el, 0);
// }
// let nums = [2, 3, 4, 5];
// console.log(task(nums));

// 4) Фильтрация элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function task(num) {
//   return num.filter((el) => el % 2 === 0);
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = num;
// console.log(task(res));

// 5) Преобразование строк в числа
// Напишите функцию, которая принимает массив строк, содержащих числа, и возвращает новый массив, в котором каждая строка преобразована в число.

// function task(str) {
//   return str.map((str) => Number(str));
// }
// let str = ["1", "2", "3", "4", "5"];
// let num = str;
// console.log(task(num));

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function task(num) {
//   return num.filter((el) => el % 2 === 0);
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = num;
// console.log(task(res));

// 7) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];

// function task(numbers) {
//   return numbers.filter((el) => el > 0);
// }
// const numbers = [-2, -1, 0, 1, 2, 3, 4, 5];
// const num = numbers;
// console.log(task(num));

// 8) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки определенной длины. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// function task(words) {
//   return words.filter((el) => el.length === 6);
// }
// const words = ["apple", "banana", "cherry", "date", "elderberry"];
// const res = words;
// console.log(task(res));

// 9) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения (без повторений).

// 10) Фильтрация элементов, удовлетворяющих определенному условию
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только элементы, которые начинаются с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// function task(words) {
//   return words.filter((str) => str[0] === "e");
// }
// const words = ["apple", "banana", "cherry", "date", "elderberry"];
// const res = words;
// console.log(task(res));

// 11) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше определенного значения. const numbers = [10, 20, 30, 40, 50];

// function task(numbers) {
//   return numbers.filter((el) => el > 30);
// }
// const numbers = [10, 20, 30, 40, 50];
// const num = numbers;
// console.log(task(num));

// 12) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, состоящие только из заглавных букв. const words = ['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY'];

// function task(words) {
//   return words.filter((str) => str === str.toUpperCase());
// }
// const words = ["APPLE", "Banana", "CHERRY", "date", "ELDERBERRY"];
// const res = words;
// console.log(task(res));

// 13) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые являются четными и больше 5. const numbers = [2, 4, 6, 7, 8, 10, 11];

// function task(numbers) {
//   return numbers.filter((el) => el % 2 === 0 && el > 5);
// }
// const numbers = [2, 4, 6, 7, 8, 10, 11];
// const num = numbers;
// console.log(task(num));

// 14) Напишите функцию, которая принимает массив значений различных типов данных и возвращает новый массив, содержащий только значения определенного типа. const values = [1, 'apple', true, null, 'banana', 5, false];

// function task(values) {
//   return values.filter((el) => typeof el === "number");
// }
// const values = [1, "apple", true, null, "banana", 5, false];
// const res = values;
// console.log(task(res));

// 15) Напишите функцию, которая принимает массив чисел и возвращает максимальное число из них. const numbers = [10, 5, 8, 3, 9];

// function task(numbers) {
//   return Math.max(...numbers);
// }
// const numbers = [10, 5, 8, 3, 9];
// const num = numbers;
// console.log(task(num));

// 16) Напишите функцию, которая принимает массив строк и возвращает их объединение в одну строку. const words = ['Hello', ' ', 'world', '!'];

// function task(words) {
//   return words.join("");
// }
// const words = ["Hello", " ", "world", "!"];
// const res = words;
// console.log(task(res));

// 17) Напишите функцию, которая принимает массив чисел и возвращает среднее значение.  const numbers = [2, 4, 6, 8, 10];

// function task(numbers) {
//   const sum = numbers.reduce((acc, el) => acc + el, 0);
//   return sum / numbers.length;
// }
// const numbers = [2, 4, 6, 8, 10];
// const res = numbers;
// console.log(task(res));

// 18) Напишите функцию, которая принимает массив элементов и возвращает количество вхождений определенного элемента. const fruits = ['apple', 'banana', 'apple', 'cherry', 'apple'];

// 19) Напишите функцию, которая принимает массивы и возвращает их конкатенацию в один массив.

// 20) Напишите функцию, которая принимает массив чисел и возвращает первое четное число из массива. const numbers = [1, 3, 5, 2, 4, 6, 7];

// function task(numbers) {
//   return numbers.find((el) => el % 2 === 0);
// }
// const numbers = [1, 3, 5, 2, 4, 6, 7];
// const res = numbers;
// console.log(task(res));

// 21) Напишите функцию, которая принимает массив строк и возвращает первую строку определенной длины. const words = ['apple', 'banana', 'cherry', 'date'];

// function task(words) {
//   return words.find((el) => el.length === 4);
// }
// const words = ["apple", "banana", "cherry", "date"];
// const res = words;
// console.log(task(res));

// 22) Напишите функцию, которая принимает массив чисел и возвращает первое положительное число из массива. const numbers = [-2, -1, 0, 3, 5, 7];

// function task(numbers) {
//   return numbers.find((el) => el > 0);
// }
// const numbers = [-2, -1, 0, 3, 5, 7];
// const num = numbers;
// console.log(task(num));

// 23) Напишите функцию, которая принимает массив строк и возвращает первый элемент, начинающийся с определенной буквы. const words = ['apple', 'banana', 'cherry', 'date'];

// function task(words) {
//   return words.find((el) => el[0] === "b");
// }
// const words = ["apple", "banana", "cherry", "date"];
// const res = words;
// console.log(task(res));

// Во всех задачах используйте только методы map, reduce.
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.

// const num = [5, 15, 315, 2, 13, 20, 9];
// const sum = num.reduce((acc, el) => acc + el, 0);
// console.log(sum);

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// const num = [5, 12, 314, 2, 13, 20, 9];
// const sum = num.reduce((acc, el) => (el % 2 === 0 ? acc + el : acc), 0);
// console.log(sum);

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// const num = [5, 15, 315, 2, 13, 20, 9];
// const sum = num.reduce((acc, el) => (el > 10 ? acc + el : acc), 0);
// console.log(sum);

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.

// const num = [3, 13, 54, 15, 335, 39];
// const sum = num.reduce((acc, el) => (el > 10 ? acc - el : acc), 0);
// console.log(sum);

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// const str = ["Аскар", "Баяман", "Калмамат"];
// const strall = str.join("");
// const res = strall.length;
// console.log(strall);
// console.log(res);

// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.

// let str = ["Аскар", "Баяман", "Калмамат"];
// let res = str.map((el) => el.toUpperCase());
// console.log(res);

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// let str = ["Аскар", "Баяман", "Калмамат"];
// let res = str.map((el, idx) => (idx % 2 !== 0 ? el.toUpperCase() : el));
// console.log(res);

// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str. Использовать .reduce для этого.
// Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false
// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.

// let arr = ["асКар", "бЯяман", "калМмамат"];
// let res = arr.map(
//   (el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
// );
// console.log(res);

// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.

// let arr = ["Баяман", "Калмамат"];
// let str = arr.map((el) => {

// });
// console.log(str);

// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.

// function task(arr) {
//   return arr.every((el) => typeof el === typeof arr[0]);
// }
// const arr = [true, "1234", 325];
// console.log(task(arr));

// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// let arr = [5, -3, 13, -7, 45];
// let res = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
// console.log(res);

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше 10.

// let arr = [5, -54, 13, -7, 45, -15, -34];
// let res = arr.reduce((acc, el) => (el < 0 && el > -10 ? acc + el : acc), 0);
// console.log(res);

// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.

// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.

// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// let arr = ["Оскар", "Баяман", "Калмамат"];
// let res = arr.map((str, idx) => `${idx + 1}.${str}`);
// console.log(res);

// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// function task(arr) {
//   return arr.reduce((acc, el, idx) => {
//     if (idx > 0 && el % 2 === 0) {
//       return acc.concat("-", el);
//     }
//     return acc.concat(el);
//   }, []);
// }
// const arr = [2, 456, 6, 8];
// const res = task(arr);
// console.log(res.join(""));

// Создайте массив из чисел и найдите сумму всех элементов.

// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((acc, el) => acc + el, 0);
// console.log(res);

// Создайте массив строк и объедините их в одну строку, разделяя запятой.

// let arr = ["Нурпери", "Ади"];
// let res = arr.join(",");
// console.log(res);

// Создайте массив чисел и найдите среднее значение.

// let num = [2, 3, 4, 5, 6];
// let sum = num.reduce((acc, el) => acc + el, 0);
// console.log(sum / num.length);

// Создайте массив объектов с различными свойствами, отсортируйте его по одному из свойств.

// let arr = [1, "apple", true, null, "banana", 5, false];
// let res = arr.filter((el) => typeof el === "boolean");
// console.log(res);

// Создайте массив чисел и умножьте каждый элемент на определенное число.

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.map((el) => el * 2);
// console.log(sum);

// Создайте массив строк и отфильтруйте только те, которые начинаются с определенной буквы.

// let arr = ["Aidai", "Adilet", "Nurperi", "Edu"];
// let res = arr.filter((el) => el[0] === "A");
// console.log(res);

// Создайте массив чисел и найдите максимальное и минимальное значения.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(min, max);

// Создайте массив объектов и отфильтруйте только те, у которых определенное свойство больше заданного значения.

// Создайте массив чисел и удалите из него все отрицательные значения.

// let arr = [-1, 2, 3, 4, 5, -6];
// let res = arr.filter((el) => el > 0);
// console.log(res);

// Создайте массив строк и преобразуйте каждую строку в верхний регистр.

// let arr = ["adilet", "nurperi", "edu"];
// let res = arr.map((el) => el.toUpperCase());
// console.log(res);

// Создайте массив чисел и найдите индекс определенного элемента.

// let arr = [2, 3, 4, 5, 6];
// let res = arr.indexOf(4);
// console.log(res);

// Создайте массив объектов и добавьте новый объект в конец.
// Создайте массив строк и удалите из него все элементы с определенной длиной.

// let arr = ["Adilet", "Nurperi", "Edu", "Ibragim", "Erulan"];
// let res = arr.filter((el) => el.length === 3);
// console.log(res);

// Создайте массив чисел и отфильтруйте только четные значения.

// let arr = [2, 3, 4, 5, 6];
// let res = arr.filter((el) => el % 2 === 0);
// console.log(res);

// Создайте массив объектов и удалите объект с определенным свойством.
// Создайте массив строк и отсортируйте его в обратном порядке.

// let arr = ["Adi", "Nur", "Edu"];
// let res = arr.reverse();
// console.log(res);

// Создайте массив чисел и преобразуйте каждый элемент в строку.

// let arr = [2, 3, 4, 5];
// let res = arr.map((el) => String(el));
// console.log(res);

// Создайте массив объектов и объедините их в один объект.
// Создайте массив строк и найдите самое длинное слово.

// let arr = ["Adi", "Nurperi", "Aidai"];
// let res = arr.reduce((acc, el) => (el.length > acc.length ? el : acc), "");
// console.log(res);

// Создайте массив чисел и найдите сумму только положительных значений.

// let arr = [2, -2, 3, -3, 4, -4, 5, -5];
// let res = arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
// console.log(res);

// Создайте массив объектов и отсортируйте его по нескольким свойствам.
// Создайте массив строк и удалите из него все элементы, длина которых меньше заданной.

// let arr = ["Adilet", "Nurperi", "Edu", "Akbar", "Ulan"];
// let res = arr.filter((el) => el.length > 5);
// console.log(res);

// Создайте массив чисел и найдите среднеквадратичное отклонение.

// Создайте массив объектов и отфильтруйте только те, у которых есть определенное свойство.
// Создайте массив строк и объедините их с использованием определенного разделителя.

// let arr = ["Adilet", "Nurperi", "Edu", "Akbar", "Ulan"];
// let res = arr.join(", ");
// console.log(res);

// Создайте массив чисел и найдите сумму элементов на четных позициях.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = arr.reduce((acc, el) => (el % 2 === 0 ? acc + el : acc), 0);
// console.log(res);

// Создайте массив объектов и измените значение определенного свойства у всех объектов.
// Создайте массив строк и преобразуйте каждую строку в нижний регистр.

// let arr = ["ADI", "EDU", "NUR"];
// let res = arr.map((el) => el.toLowerCase());
// console.log(res);

// Создайте массив чисел и найдите произведение всех элементов.

// let arr = [2, 3, 4, 5];
// let res = arr.reduce((acc, el) => acc * el, 1);
// console.log(res);

// Создайте массив объектов и найдите объект с максимальным значением определенного свойства.
