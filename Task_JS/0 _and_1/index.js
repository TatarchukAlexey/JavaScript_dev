// way = new Array();
// for (var i = 0; i < 102; i++) {
//   way[i] = new Mover(i);
// }
// function init() {
//   way[0].body = "|";
//   way[101].body = "|";
//   way[0].direction = "forward";
//   way[101].direction = "back";
// }
// init();
// function start(id, array) {
//   document.getElementById(id).innerHTML = showWay(array);
// }
// function showWay(array) {
//   var wayString = "";
//   for (x in array) {
//     wayString += array[x].body;
//   }
//   return wayString;
// }
// function stop(array) {
//   for (var i = 0; i < array.length; i++) {
//     clearTimeout(array[i].timer);
//   }
// }
// function add(id, array) {
//   array[1].move(id);
// }
// function Mover(position) {
//   this.body = 0;
//   this.position = position;
//   this.direction = undefined;
//   this.move = function(id) {
//     this.direction = "forward";
//     this.body = 1;
//     go(id, this.position, this.direction, way, 1, 1);
//   };
// }
// function go(id, position, direction, array, bodyForward, bodyBack) {
//   var pos = position;
//   var temporary;
//   start(id, array);
//   if (direction == "forward") {
//     if (array[position + 1].direction) {
//       array[position].direction = "back";
//       array[position].body = bodyBack;
//     } else {
//       temporary = array[position + 1];
//       array[position + 1] = array[position];
//       pos = position + 1;
//       array[position + 1].position = pos;
//       array[position] = temporary;
//       array[position].position = position;
//     }
//   } else {
//     if (array[position - 1].direction) {
//       array[position].direction = "forward";
//       array[position].body = bodyForward;
//     } else {
//       temporary = array[position - 1];
//       array[position - 1] = array[position];
//       pos = position - 1;
//       array[position - 1].position = pos;
//       array[position] = temporary;
//       array[position].position = position;
//     }
//   }
//   array[pos].timer = setTimeout(
//     go,
//     50,
//     id,
//     array[pos].position,
//     array[pos].direction,
//     array,
//     bodyForward,
//     bodyBack
//   );
// }



///////////// 2 вариант

let output = document.querySelector("#output");
const addElementBtn = document.querySelector("#add-element");

let arr = [];
for (let i = 0; i<100; i++){
    arr.push("0");
}
output.textContent = arr.join("");
let arrObj = [];
addElementBtn.addEventListener("click",buttonHandler)
function buttonHandler(event){
    if (arrObj.length===100) return;
    arrObj.push(new elementOne());
}
class elementOne {
    constructor(){
        this.index = 0;
        this.isMoveForward = true;
        this.value = "1";
    }
    move(){
        if (this.isMoveForward){
            if(arr[this.index+1] === "1" || this.index+1 === arr.length){
                this.isMoveForward = false;
                if (arr[this.index-1] === "1" || this.index === 0) return;
            }
        } else if(arr[this.index-1] === "1" || this.index === 0){
                this.isMoveForward = true;
                if (arr[this.index+1] === "1" || this.index+1 === arr.length) return;
        }
        if(this.isMoveForward){
            arr.splice(this.index+1,1,this.value);
            arr.splice(this.index,1,"0");
            this.index++;
        } else {
            arr.splice(this.index-1,1,this.value);
            arr.splice(this.index,1,"0");
            this.index--;
        }
    }
}
let oneID = setInterval(oneIteration,500);
function oneIteration (){
    arrObj.map(el=>el.move());
    output.textContent = arr.join("");
}