
//console.log( Number.parseInt(Math.random()*100) );

//Формула которая показывает всегда целое случайное число,
//  10 и выше делает коридор для целого числа!!!
// let x = 5;

//============
// let arr = Math.random();
// console.log(arr);

//============
// console.log( Number.parseInt(Math.random()*100) );
//Формула которая показывает всегда целое случайное число,

//============

// Проверка на лож (ELSE):
//  const arr  =  null ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr);
// const arr1  =  0 ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr1);
// const arr3  =  "" ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr3);
// const arr6  =  false ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr6);

// Выдаст statement (TRUE):
// const arr4  =  1 ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr4);
// const arr5  =  " " ? `держи правда` : `нулл сработал держи фолс`;
// console.log(arr5);
// const arr2  =  -1 ? ` держи правда` : `нулл сработал держи фолс`;
// console.log(arr2);
// const arr7  =  true ? `держи правда` : `нулл сработал держи фолс`;
// console.log(arr7);

//============
// let q = 50 % 2;
// console.log(q);
// // Формула проверки на парное или не парное число

//============
//  задачка на проверку парное ли число

// const num = Number.parseInt(Math.random() * 100);
// let y = 2;
// let type = num % y === 0  ? `event` : `old `;
// console.log(type);

// console.log(`${num} is ${type}`);

//============
// const massage = "Welcome";
// const cgc = massage.includes("Welcome");
// console.log(cgc);  /// даст  TRUE (правду), так как такая строка есть

// //============
// const x = Number(prompt("Это целое число?"));
// const mas = Number.isNaN(x);   /// false даст // проверка на не число ли это
// console.log(mas);

//=================Методы работы с  Массивом
// const string =  "Привет друг как у тебя дела"
// const first = [1,2,3,4,5,6];
// const colors = ['red', 'green', 'blue']

// console.log(first.join(" "));// 1 2 3 4 5 6  // создаст строку
// console.log(first.join(""));// 123456
// //Способ создать из строки массив:
// console.log(string.split(" "));//["Привет", "друг", "как", "у", "тебя", "дела"]
// //Покажет индексный номер в массиве. По факту это поиск елемента
// console.log(first.indexOf(2)); // 1
// // Проверка на есть ли такой елемент в массиве
// console.log(first.includes(15)); //скопирует [2,3]
// // Метода добавления последние или первые елементы:
// first.push(pop) //последние в ()- то что надо добавить или убрать
// first.shift (unshift) // первые
// // // Копируем:
// console.log(first.slice(1,3)); //скопирует [2,3]
// console.log(first.slice()); // cскопирует весь масив
// // Удаляем:
// console.log(first.splice(1,4)); //удалит от кого-го, и сколько
// // Удаляем с заменной:
// first.splice(3,0,2555,4444,6666,555,4545); 
// //удалит 1 елемент, и вместо его вставь от 1 до бесконечности ел.
// // Удаляем с заменной:
// colors.splice(1,0,'wwwww'); //удалит 1 елемент, и вместо его вставь от 1 до бесконечности 
// console.log(colors);
// // Объеденить 2 массива:
// const newMasive = colors.concat(first); //
// console.log(newMasive);
// //["red", "wwwww", "green", "blue", 1, 6, 2555, 4444, 6666, 555, 4545]
// // Реверс:
// first.reverse(); //делаем реверс елементов
// console.log(first); //меняет масив, проверку делают на старый массив.
// // Проверка на "Это массив?" :
// Array.isArray(first); //false или true 
// console.log(first);


//============================== Объекты
// const arr = {} ; // запись пустого объекта
// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// // 1)===== Поиск ключа в объекте
// // объект.ключ - покажет значение ключа, если нету то запишет
// object.key     //  1 вариант записи
// object["key"] //  2 вариант записи
//   console.log(hotel.name); //Результат: Resort Hotel
// // =====2) как добавить ключ со значением
//   hotel.rain = "wwww";  ///!!!!чтобы добавить ключ+значени(нужно ставить равно и писать значение)
// /// просто  (hotel.rain) ничего не даст
//   console.log(hotel);
// // ====3) удаление ключа и объекта
//   delete hotel.name;
// // ====4) Проверка на наличие свойства во всем объекте
//  hasOwnProperty вернет  (true/false)
// // Пример:
// let www = hotel.hasOwnProperty('stars');
// console.log(www); // true
// // =====5)  Цикл for...in ()
// for (const key in hotel) {   
// console.log(key);           //покажет все ключи в объекте        
// console.log(hotel[key]);}   //покажет все значения в объекте  
// // ============6) Методы объекта: 
// // Важно: На выходе мы получим массив!!!!!!!!!!!!
// const keys = Object.keys(hotel); //["name", "stars", "capacity"]
// const values = Object.values(hotel); //["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); //[Array(2), Array(2), Array(2)]
//  //вернет массив массивов с ключами и значениями свойств
//  //===7)Слияние объенктов  :  Object.assign(target, ...sources)
//  const first = {name: 'Tony'};
//  const last = {lastName: 'Stark'};
//  const person = Object.assign(first, last);
//  console.log(person); //{name: "Tony", lastName: "Stark"}

////////////////===========  this =============
// ПРАВИЛО: значение this, внутри функции, определятся не в момент
//  создания функции, а в момент ее вызова.
//  Область видимости
// // Правило: Функция в средине объекта имеет доступ к ключам через this
//  const hotel = { 
//     name: "Resort Hotel",
//     showThis() {
//       console.log(this.name);}}; // Resort Hotel 
// // 1) Метод СALL-  fn.call(obj, [arg1, arg2, ...]) (apply - аналог с 1 искл)
// // вызовет функцию и передает  this ссылку на объект +
// // + после запетой передает аргументы.
// const greet = function (guest, stars) {
//     return `${guest}, welcome to ${stars}-star ${this.name}!`;
//   };
//   const hotel = { name: "Resort Hotel" }; 
//   console.log( greet.call(hotel, "Mango", 5) );
// //hotel=объект, у которого мы будем брать зис с ключами
//   // "Mango, wellcome to 5-star Resort Hotel!"
  
//   console.log( greet.apply(hotel, ["Mango", 5])); //особ. арг передаются в форме массива
//   // "Mango, wellcome to 5-star Resort Hotel!"
// // 2) Метод bind = можем вызвать когда угодна, как шаблон.
// // const boundFn = fn.bind(obj, arg1, arg2, ...)
// const hotelGreeter = greet.bind(hotel, "Mango"); //записываем в переменную
// hotelGreeter(); // "Mango, wellcome to Resort Hotel!"/ вызываем когда надо.

// // ================ Функции-конструкторы ===========
// // Цель создания: конструктора создание много однотипных объектов.
// // Конструктор - это обычная функция к которой применили оператор new
// // Пример:
// function Hotel(name, stars, capacity) { //делаем параметры
//     this.a = name;
//     this.w = stars;
//     this.x = capacity;
//   }
//   const hotel = new Hotel("Resort Hotel", 5, 100); // аргументы в виде значений ключей
//   console.log( hotel );//В результате получаем  объект
//   // Hotel {a: "Resort Hotel", w: 5, x: 100}

///========= Функция Array.from() // Способ сделать массив из чего то

//   Способ как сделать  массив из строки 
//   const x = "hello";
//   const x = 5; // даст пустой массив
    //  const x = {name: "rtr"}; // даст пустой массив
//   let arr = Array.from(x);  // не строки не принимает
//   console.log(arr); // ['f', 'o', 'o']

///========= Доп Задача 6
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
// //   Решение:
//  function  getAllPropValues (array, prop) {   
//     let arr = [];
//     for (let el of array){  //берем объект

//       if(el[prop]){    // делаем проверку на наличие ключа с таким названием
// // если есть такие ключи в объекте тогда пуш в пустой массив
//        arr.push(el[prop])
//     } else [];    
// //без елса и [] будет прилетать [андефайнд] 
//      }  
//      return arr;   
// // ретерн финального масива покажет результат пуша , а не все интерации
//   };

// console.log(getAllPropValues(users, 'name'));
// //   ['Poly', 'Mango', 'Ajax']
//   console.log(getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []
/////////////// END
  ///========= Доп Задача 7 ===========////////

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)
  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
// */
// function User (name,isActive,age,friends){

// this.name = name;
// this.isActive = isActive;
// this.age = age;
// this.friends = friends;

// function getUserInfo () {
//  return `User ${this.name} is ${this.age} years old and has ${this.friends} friends`; 
// };
// }
// let arr = new User ("Alex", true, 35, 100);
// console.log(arr);
// //Конструктор отправляет аргументы и получает результат функции
// // в виде объекта {name: "Alex", isActive: true, age: 35, friends: 100}
/////////////// END

///========= Доп Задача 8 ===========////////
///   Расставьте отсутствующие this в методах объекта store

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//       this.managers.push(manager);
//       console.log(this.managers);
//     },
//     removeManager(manager) {
//       const idx = this.managers.indexOf(manager); 
//       this.managers.splice(idx, 1); 
//       console.log(this.managers);
//     },
//     getProducts() {
//       console.log(this.products);
//       return this.products;
//     }
//   }
  
//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']
//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
/////////////// END

  ///========= Доп Задача 9 ===========////////
//   Расставьте отсутствующие this в конструкторе объектов Account

// function Account(login, password, type = "regular") {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword =   function (newPassword) {
//         this.password = newPassword;
//       console.log(this.password);
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${this.login}, 
//         Pass: ${this.password}, 
//         Type: ${this.type}
//       `);
//     };
//   }
  
//   const account = new Account("Mango", "qwe123", "premium");
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   account.changePassword("asdzxc"); // 'asdzxc'
//   account.getAccountInfo(); 
//   // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
/////////////// END

///==============================================================
/////====================функциональные методы массивов ========================
// // Иммутабельность => не изменяем исходные данные, а создаем новые
// const numbers = [0, 5, 2, 3, 4, 7, 6, 7, 1, 9];; //исходный массив
// // 1) метод перебора елементов массива
// numbers.forEach(el => console.log(el)); //  1 2 3 //иимутабельный массив
// // 2) Array.map() Используется для транформации массива. 
// const qqq = numbers.map(num => num * 2);//иимутабельный массив
// console.log(qqq); // Создает новый массив
// // 3) Array.filter()
// console.log(   // Результат: Вернет массив по заданному условию
//  numbers.filter(num => num>5));   // условие для фильтрации
// // Правило:если результат ее выполнения имеет значение true, то 
// // копирует значение из исходного массива в новый массив.
// // Если ничего не найдено, вернет пустой массив.
// // 4) Array.find(). Такой же как и filter, используется до нахождения 
// //  нужного элемента, без перебора всего массива при нахождении
// const user = numbers.find(qqq => qqq === 5);
// console.log(user);
// // 5) Array.every() и Array.some() / Возвращает true /false
// // Array - это массив, (колбек функция которую проверяют)
// // some проверяет, проходит ли хоть один элемент в массиве тест
// // 6)Array.reduce(). Это замена цыкла for of
// // acc -это новая переменная,куда пишется результат перебора елементов.
// const summ = numbers.reduce((acc, value) => acc + value, 0);
//   console.log(summ); // 15
// // 7) Array.sort() Сортировка по алфавиту букв, или порядку цыфр 1,2,3..
// // 7.1) метод SORT при сортировке цыфр (обязательно "- или +")
//  const arr = numbers.sort ((a, b) => a - b); // из [3,1,0,4] сделаем [0,1,3,4]
//  console.log(arr);
// // 7.2) метод SORT при сортировке текста (обязательно (>||<) ? 1 :-1)
// const str = arr.sort((a,b) => a<b ? 1 :-1)

//==== /sort /Сортируем в масиве ключи-объекты. В средине объектов по алфавиту
// const str = qqq.sort((a,b) => a.name<b.name ? 1 :-1)
// console.log(str);
// const qqq = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }    
// ]; 
/////////////// END

// // /============== Метод SORT
// const stringArray = ['Blue', 'Humpback', 'Beluga'];
// const numericStringArray = ['80', '9', '700'];
// const numberArray = [40, 1, 5, 200];
// const www = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }
// console.log( stringArray.join()); //Blue,Humpback,Beluga
// console.log( stringArray.sort());//["Beluga", "Blue", "Humpback"]
// console.log( numberArray.join()); //40,1,5,200
// console.log(numberArray.sort()); //[1, 200, 40, 5] //сортировка без (a, b)
// console.log(numberArray.sort(compareNumbers)); //[1, 5, 40, 200]//сорт. с (a, b)
// console.log(numericStringArray.join()); //80,9,700
// console.log( numericStringArray.sort()); //["700", "80", "9"]
// console.log( numericStringArray.sort(compareNumbers)); //["9", "80", "700"]
// console.log( mixedNumericArray.join());//80,9,700,40,1,5,200
// console.log( www.sort());//[1, 200, 40, 5, "700", "80", "9"]
// console.log( www.sort(compareNumbers));//[1, 5, "9", 40, "80", 200, "700"]
// /////////////// END

// Пример
// // /========================= reduce
//   const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
//   const getTags = arr =>   // это функция метод
//      arr.reduce(
//     (acc, x) => x.tags ? acc.concat(x.tags) : acc, []  // x это объект, tags-ключ
//   );
//   const tags = getTags(tweets);
// //   console.log(tags); // Результат: ["js", "nodejs", "html", "css", "html", "js", 
// //  "nodejs", "css", "react", "js", "nodejs", "react"]

//   // Начальное значение аккумулятора это пустой объект {}
//   const countTags = arr => arr.reduce((acc, tag) => {  //входить массив
//     // console.log(acc.hasOwnProperty(tag));
//     if(!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     //   console.log(acc);
//     }               // на первом круге если значения нету запусти проверку
// // на первом круге мы присваем значение 0 ключю 
//     acc[tag] += 1;    /// тут мы меняем 0 на 1, и записываем в {}, и запускаем заново
//     console.log(acc);
//     return acc;
//   }, {});  // выходит объект

//   const tagCount = countTags(tags);
//   console.log(tagCount);
/////////////// END

// Пример
// /========================= reduce
//   const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   ];
//   // 1) способ записи, напряму обращаемся к объекту
//   const likes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
//   console.log(likes); // 32
//  // 2) способ записи, через ссылку обращаемся и новую переменную
//   const countLikes = arr => arr.reduce((acc, x) => acc + x.likes, 0);
//   console.log(
//     countLikes(tweets)
//   ); // 32
/////////////// END

// /========================= MAP SORT 
//Задача как сделать с массива простого массив с объектами

//Способ создания из масива с простыми елментами=>масива с объектами
// const list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// // 1)
// const mapped = list.map(function(el, i) {
//     return { index: i, value: el.toLowerCase() };
//   })
// // console.log(mapped);
// // Резульат: [{…}, {…}, {…}, {…}] 1 элем 0: {index: 1, value: "alpha"}
// // 2)
// // даллее мутируем исходный масив с объектами и сортируем его в алфавитном порядке
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });
// // console.log(mapped);
// // 3) мутируемый масив с объектами перебераем
// // container for the resulting order
// const result = mapped.map(function(el){ 
//     // console.log(el); // el = {index: 1, value: "alpha"}
//     // console.log(el.index); // 1 3 2 0 
//   return list[el.index]; //берем старый массив list
// });
// console.log(result); //["alpha", "bravo", "CHARLIE", "Delta"]
/////////////// END

// ====== метода Array.of
// // Создает массив из строк
// const x = "sadfasd";
// console.log(Array.of(x)); //["sadfasd"]
// console.log(Array.of(1, 2, 3)); //[1, 2, 3]
// console.log(Array.of("html", "js", "nodejs")); //["html", "js", "nodejs"]
/////////////// END

// function MyClass() {
//     SuperClass.call(this);
//     OtherSuperClass.call(this);
//   }
  /////////////// END

// const src = ["Alex","asdfs", [15,22,13], "lll",15]

// //сколько будет эелементов столько будет и объектов. Но ключей всего 3:
// //1 ключ - индекс елемента (всегда цыфра от 0 до ...length масива)
// //2) конкекст елемента - суть строки или цыфра или масив
// //3 ) передается весь массив который перебирается
// const mapped = src.map((a, v, w) => ({ index: v, value: a, name: [w] }));
// console.log(mapped);
// // Результат:
// // 0: {index: 0, value: "Alex", name: Array(1)}
// // 1: {index: 1, value: "asdfs", name: Array(1)}
// // 2: {index: 2, value: Array(3), name: Array(1)}
// // 3: {index: 3, value: "lll", name: Array(1)}
// // 4: {index: 4, value: 15, name: Array(1)}
  /////////////// END  

// const result = mapped.map(function(el){ 
//     // console.log(el); // el = {index: 1, value: "alpha"}
//     // console.log(el.index); // 1 3 2 0 
//   return list[el.index]; //берем старый массив list
// });
  
// const arr = [
// {name: "Alex", pas: "asdfs", id: 2},
// {name: "Dan", pas: "dfd", id: 1},
// {name: "Serg", pas: "dsfa", id: 3},
// {name: "Olier", pas: "cv", id: 4},
// ];
    
// const find = arr.find(function(el){
// //   console.log(el.name);
//   if (el.name === "Alex"){
//    const w = el;
// //    console.log(w);
//    w.name = "FSS";
//    const result = [w];
// //    console.log(result)
//    return result ; 
// }
// });
// console.log(find);

// //сотртируем по значению ключей
// const resultSort = arr.sort((a,b) => a.id > b.id ? 1 :-1 ); 
// console.log(resultSort);

// function compareNumbers(a, b) { // рабочая функция для сортировки любых объектов
//   return a > b ? -1 : 1;  // меняя с 1 на -1 мы меняем порядок размещения объектов!!!
// }

// const arrSort = arr.sort(compareNumbers);
// console.log(arrSort);


/////////////// END

// ====================== Класс =================


// ООП способ создание сущности, категории, шаблона, эскиза.
// Класс – это способ описания сущности
// Объект (экземпляр, ребенок) – это отдельный представитель класса, имеющий конкретное
//  состояние и поведение,полностью определяемое классом.
// Интерфейс – это набор методов класса, доступных для использования другими классами.
// Инкапсуляция  -действия под капотом для нас
// Прототип – это резервное хранилище свойств и методов объекта
// __proto__  - возможность записовать ссылки на свойства с других объектов

// class Guest {
//     // аналог функции-конструктора
//     constructor (name, days, roomNumber) {
//       this.name = name;
//       this.days = days;
//       this.roomNumber = roomNumber;
//     }
//     // аналог Guest.prototype.getFullInfo
//     getFullInfo () {
//       console.log(`
//         Guest ${this.name}
//         Will stay for ${this.days} more days
//         In room number ${this.roomNumber}
//       `);
//     }
//   } 
//   const mango = new Guest('Mango', 7, 26);
//   console.log(mango); 
  // Результат: создаст как и простой конструктор тоже объект
  //{name: "Mango", days: 7, roomNumber: 26}

// ====================   Основные методы работы с DOM  =====================
// 1) elem.querySelectorAll(selector) - вызываем тег в JS
// 2) атрибут value	Содержит контент input, select, textarea.
// 3) innerHTML -получает содержимое элемента в виде строки и создает новые узлы
// 4) elem.textContent - свойство, содержит только текст внутри элемента (тега) 
// 5) Свойства classList:
//  elem.classList.contains(cls) - возвращает true/false. Есть ли узел?
//  elem.classList.add(cls) - добавляет класс 
//  elem.classList.remove(cls) - 	удаляет класс 
//  elem.classList.toggle(cls) -если класса  нет, добавит,если есть - удалит
//  6) Атрибуты (В отличие от свойств, атрибуты всегда являются строками)
//  elem.hasAttribute(name) - true/false
//  elem.getAttribute(name) -получает значение атрибута и возвращает его
//  elem.setAttribute(name, value) добавляет атрибут
//  elem.removeAttribute(name) - удаляет 
//  elem.attributes - возвращает коллекцию всех атрибутов 
//  7)  document.createElement('div') - создаем тег (узел)
//  8) Добавление элемента в нужный узел через команды 
//  node.append(nodes)	добавляет nodes в конец node
// node.prepend(nodes)	добавляет nodes в начало node
// node.after(nodes)	добавляет nodes после узла node
// node.before(nodes)	добавляет nodes перед узлом node
// node.replaceWith(nodes)	добавляет nodes вместо node
// 9) elem.remove() удаляем элемент
// 10) elem.cloneNode(true) -создаст «глубокую» копию элемента

//  Способ работы с Data-атрибутом. правила использования:
//  - создаем data с  произвольный префиксом
//  - elem.value узнаем значение
//  -обращаемся к псевдомассиву элементов input для получения значения
//   атрибута input - elem.dataset.color

//   2 Способ создание узлов в DOM
//   el.innerHTML += '<p>Hello World!</p>';

////====================    События  ===============

// Событие	Описание
// click	происходит, когда кликнули на элемент левой кнопкой мыши
// submit	посетитель отправил форму
// focus	посетитель фокусируется на элементе, например нажимает на input
// keydown	когда посетитель нажимает клавишу
// keyup	когда посетитель отпускает клавишу
// DOMContentLoaded	когда HTML загружен DOM построен;

// submit - возникает при отправке(Enter) формы <..type="submit"..>
// e.preventDefault() – форма не отправится на сервер,неперезагр. страница
// pageYOffset - вернет кол-во пикселей текущей вертикальной прокрутки документа
// window.addEventListener(
//     'scroll',
//     () => console.log('pageYOffset: ', pageYOffset)
//   );
//   метод getBoundingClientRect(), который вернет объект содержащий
//    тeкущие координаты элемента относительно vieport.
//    const coords = elem.getBoundingClientRect();

//    element.addEventListener(event, handler[, phase]);
//    element.removeEventListener(event, handler[, phase]);
//  ! Важно: Если мы передаем функцию которая использует this, нужно испол. bind
//  event.type -Тип события
//  event.currentTarget - Элемент, на котором сработал обработчик.
//  Делегирование - это вешание одного обработчика для схожих действий на однотипных элементах

//  document.addEventListener("DOMContentLoaded", callback);
//  // слушатель который вкл. при полной загрузке DOMa

//======================= Таймеры / Promise  =======================
// Интервалы - это более простой способ повторения кода снова и снова,
//  с установленным промежутком времени повторений.

// setTimeout - запускает выполнение функции один раз. Если надо сделать запуск функции
// чуть позже, асинхронно
// console.log("1");
// setInclearTimeoutterval ( () => console.log("2") ,1000) // эту функцию  торозит 2 сек
// console.log("3");


// clearTimeout
// setInterval -- используем если хотим чтобы что то постоянно работало (секундомер напр)
// clearInterval(id) - остановка функции
// const timerId = setTimeout(callback, delay);
// timerId будет записан числовой идентификатор
// delay - задержка в миллисекундах
// clearTimeout(id) -отменяет вызов функции внутри таймаута

// 1 Способ создания нужного времени
// 1.1 Способ фиксации вермя сейчас через строку
// let dateNow = new Date("March 1, 2019"); //1) Способ фиксации вермя сейчас
// console.log(dateNow);
// 1.1 Способ фиксации вермя сейчас через запятую в последовательности 7 чисел
// new Date(year, month, date, hours, minutes, seconds, ms) 
// let dateNow2 = new Date(2019,1,28,10,21,20,30); //1) Способ фиксации вермя сейчас
// console.log(dateNow2);

// // 2
// let dateUnix = Date.now(); // 2) Метод показывает кол-мел с Unix время
// console.log(dateUnix); // 1521471595501

//  Геттеры (способ как вытащить инфу с new Date вашего компьютера)
// getDate() - возвращает день месяца от 1 до 31
// getDay() - возвращает день недели от 0 до 6
// getMonth() - возвращает месяц от 0 до 11
// getFullYear() - возвращает год из 4 цифр
// getHours() - возвращает час
// getMinutes() - возвращает минуты
// getSeconds() - возвращает секунды
// getMilliseconds() - возвращает миллисекунды
// getTime() - возвращает кол-во миллисекунд прошедших со старта эпохи Unix
// getTimezoneOffset() - возвращает разницу между местным и UTC-временем, в минутах

// Сеттеры
// Вот все методы записи информации в объект Date:

// setDate() - устанавливает день месяца
// setDay() - устанавливает день недели
// setMonth() - устанавливает месяц
// setFullYear() - устанавливает год
// setHours() - устанавливает час
// setMinutes() - устанавливает минуты
// setSeconds() - устанавливает секунды
// setMilliseconds() - устанавливает миллисекунды
// setTime() - устанавливает кол-во миллисекунд c начала эпохи Unix

// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());




// Способ с многими настройками. === date.toLocaleString(locale, opts) ////

// let date = new Date();
// // формат вывода
// const options = {
//   weekday: 'long',
//   year    : 'numeric',
//   month   : 'short',
//   day     : 'numeric',
//   hour    :'2-digit',
//   minute  :'2-digit'
// };
// // Украина
// let localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42
// // Евпропейский формат
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); //Thursday, Feb 28, 2019, 10:31 AM


const arr = [       
  {  newWeigth: "88",
  nowData: "2019-03-06"}, 
  {
  newWeigth: "90",
  nowData: "2019-03-20"}, 
  {  newWeigth: "99",
  nowData: "2019-03-27"}, 
]                                                         

let result = (arr) => arr.map(el=>(el.newWeigth)*1);
console.log(result(arr));

let eee = (arr) => arr.map(el=>(el.nowData)*1);
console.log(result(eee));