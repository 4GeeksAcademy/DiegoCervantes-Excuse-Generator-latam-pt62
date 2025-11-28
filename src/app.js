import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ['Mi hermano','Mi perro','Mi padre','Mi madre',];
let accion = ['destruyo', 'tiro', 'se tomo', 'se comio'];
let ElQue = ['mi comida', 'mi postre', 'mi tarea', 'mi soda'];
let Cuando = ['en el restaurante', 'en la escuela', 'en la calle'];

function getRandomNumber(a,b) {
  return Math.floor(Math.random() * (b - a) + a);

}

function getRandom(anyArray){
  let max = quien.length -1;
  let min = 0;
  let random = getRandomNumber (min, max);
  return anyArray [random]
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector (`#excusa`).innerHTML= getRandom(quien) + " " + getRandom(accion) + " " + getRandom(ElQue) + " " + getRandom(Cuando)
};