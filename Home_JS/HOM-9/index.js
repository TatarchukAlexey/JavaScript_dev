
  // Создайте скрипт секундомера.  
  // По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  // Добавьте следующий функционал:
  // - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
  //   со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
  //   новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд). 
  //   🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
  //                 достаточно повторять не чаще чем 1 раз в 100 мс.
    
  // - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
  //   а функционал при клике превращается в оставновку секундомера без сброса 
  //   значений времени. 
  //   🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
// const stopwatch = document.querySelector(".stopwatch")
// const jsTime = document.querySelector(".js-time")
// const jsStart = document.querySelector(".js-start")
// const reset = document.querySelector(".js-reset")

// const timer = {
//   value: 0,// начало для старта секундомера
//   timerId: null,
//    isActive: false,

//    start(){
//   if (!this.isActive){  // этот if и тру ниже делаю возможным только 1 запуск
//     console.log("start"); 
//     this.isActive = true;              
//     this.timerId =  setInterval(() => {
//       this.value +=1;
//   jsTime.textContent = this.value; 
//     }, 1000);
//  }
// },
//   stop () {
//   console.log("stop");
//   this.isActive = false;              
//   clearInterval(this.timerId);
//   this.value = 0;
//   jsTime.textContent = this.value; 
//  },
// };

// jsStart.addEventListener ("click", timer.start.bind(timer)); // поставим слушателя на кнопку старт
// reset.addEventListener ("click", timer.stop.bind(timer)); // поставим слушателя на кнопку старт
// // При построение с помощью обэектов нужно ставить bind иначе слушатель будет давать не тот 
// //объект и работать не будет, ставить надо ко всем вызываемым функциям!!   


 /// 2  Более правильный вариант записы таймера

const stopwatch = document.querySelector(".stopwatch")
const jsTime = document.querySelector(".js-time")
const jsStart = document.querySelector(".js-start")
const pause = document.querySelector(".js-take-pause")
const reset = document.querySelector(".js-reset")

const timer = {
  value: 0,// начало для старта секундомера
  timerId: null,
   isActive: false,

start(callback){
    if (!this.isActive){  // этот if и тру ниже делаю возможным только 1 запуск
    console.log("start"); 
    this.isActive = true;  
    jsStart.textContent = "Pause"   
    if()       
    this.timerId =  setInterval(() => {
      this.value +=1;
      callback (this.value); 
    }, 1000);
 }
},

stop (callback) {
  console.log("stop");
  this.isActive = false;              
  clearInterval(this.timerId);
  this.value = 0;
  callback (this.value); 
 },

  pause (callback){
  console.log("pause");
  this.isActive = false; 
  jsStart.textContent = "Start"          
  let arr = this.value             
  clearInterval(this.timerId);
  this.value = arr;
  callback (this.value); 
  },


};

jsStart.addEventListener ("click", timer.start.bind(timer, updadeInterface)); // поставим слушателя на кнопку старт
pause.addEventListener ("click", timer.pause.bind(timer,updadeInterface)); // пауза
reset.addEventListener ("click", timer.stop.bind(timer,updadeInterface)); // поставим слушателя на кнопку старт
// При построение с помощью обэектов нужно ставить bind иначе слушатель будет давать не тот 
//объект и работать не будет, ставить надо ко всем вызываемым функциям!!   
function updadeInterface(val) {  //функция которая будет записовать в HTML.
  //сначала заходит в объет берет 0, проходит по функции становится 1 выходит с об перезаписуется и снова заходит в объет
  jsTime.textContent = `00:00:${val}`; 
}


  

    
 














  // - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
  //   меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
  //   а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
  //   со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
  //   с 6 секунд, а не с 16. 
    
  //   🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
  //                 при рассчете текущего времени после возобновления таймера отнимая
  //                 это значение от времени запуска таймера.
    
  // - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
  //   button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
  //   disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  // - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
  //   в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x


