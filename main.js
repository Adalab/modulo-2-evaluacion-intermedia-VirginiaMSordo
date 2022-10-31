'use strict';
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');




function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


const battle = () => {
    const random= getRandomNumber (5);

/*
    else {
    Fuerza= 2
  }
}
if (randomNUmber===2) {
    Raza2= 'Orcos'
    Fuerza= 2
}
if (randomNUmber===3) {
    Raza3= 'Goblins'
    Fuerza= 2
}
if (randomNUmber===4) {
    Raza4= 'Huargos'
    Fuerza= 3
}
if (randomNUmber===5) {
    Raza5= 'Trolls'
    Fuerza= 2*/




function paintResult () {

 if (select.value < random){
    result.innerHTML='Ha ganado el Ejército del Mal! Vuelve a Intentarlo';

} if else (select.value > random){
    result.innerHTML= 'Ha ganado el Ejército del Bien! Enhorabuena.'

} else (select.value=== random) {
    result.innerHTML = 'Empate'
}
}





function handleClick(event) {
  event.preventDefault();
  battle();
  paintResult();

}



btn.addEventListener('click', handleClick);