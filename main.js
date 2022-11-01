'use strict';

const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
//Bonus
const reset= document.querySelector('.js-reset-btn');
const userCounter = document.querySelector('.js-counter-user');
const pcCounter = document.querySelector('.js-counter-pc');
const tieCounter = document.querySelector('.js-counter-tie');

//Bonus
let userPoints = 0;
let pcPoints = 0;
let tiePoints= 0;
let movesCount = 0;

// Función aleatoria
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Damos valor númerico a la raza elegida por el usuario.
function userRace() {
    return parseInt (select.value);
}



// Damos valores a cada fuerza según la raza y sacamos el resultado del número aleatorio.
function pcRace () {
    const randomNumber = getRandomNumber(5);

    let result = 0;
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
        result = 2;
    } else if (randomNumber === 4) {
        result = 3;
    } else {
        result = 5;
    }
    return result;
}

//Prueba de empate
function tieRace () {
    user=pc
    return result;
    tiePoints ++;
}


// Comparamos los puntus y pintamos en el párrafo la frase que corresponda según ganador o perdedor.
function battle (user, pc) {
    if (user>pc) {
        result.innerHTML= "Ha ganado el Ejército del Bien! Enhorabuena";
         userPoints++;
    } else if ( user<pc) {
        result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo";
        pcPoints++;
    }else {
        result.innerHTML = "Empate";
    }
}

//Bonus: pintamos la puntuación sin límite de partidas
function score () {
    userCounter.innerHTML=  `Jugadora:  ${userPoints}`;
    pcCounter.innerHTML = `PC: ${pcPoints}`;
    tieCounter.innerHTML = `Empate: ${tiePoints}`;
    console.log (pcPoints)
}


// Función con instrucciones para finalizar el juego. Contaremos los movimientos hasta 10 y nos pintará en un p quién ha ganado. ++ acumulará los resultados en la variable movesCount.
function gameOver () {
     movesCount++; 
     if(movesCount ===10) {
        btn.classList.add ('hidden');
        reset.classList.remove ('hidden');
        result.classList.add('winner');
     }
      if (userPoints > pcPoints) {
            result.innerHTML = " Has ganado el juego!";
        } else if (userPoints < pcPoints) {
            result.innerHTML = " El ordenador ganado el juego!";
        } else {
            result.innerHTML = "Empate!"
        }
}




//función manejadora: le añadiremos el resto de funciones que deba usar para que el juego batalla funcione.
function handleClick(event) {
  event.preventDefault();
  const user= userRace ();
  const pc= pcRace();
  const tie= tieRace();
  // como las funciones userRace y pcRace hacen una operación y return un número, ese número lo guardo aquí en una constante para que sea utilizado por la función manejadora. 
    battle (user, pc);
    score ();
    gameOver();
}


// funcines escuchadora de eventos btn + Bonus: Reset
btn.addEventListener('click', handleClick);