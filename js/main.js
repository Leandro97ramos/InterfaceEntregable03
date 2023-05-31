"use strict"

let runner = new Runner();
const score = document.getElementById("score");
const lives = document.getElementById("lives");
const enemigos = [];
const plus = [];
const enemigoColisionado = new Set();
const plusColisionado = new Set();
const gameOver = false;

const colisionSound = new Audio("../assets/sound/colision.flac")
const plusSound = new Audio("../assets/sound/plus.wav")
const bombSound = new Audio("../assets/sound/bomb.wav")
const jumpSound = new Audio("../assets/sound/jump.wav")






document.addEventListener('keydown', () => {
    //si es arrow up salta
    if (event.keyCode == 38) {
        runner.saltar();
  
    }
  
    //si presiona el espacio salta dos veces
    else if (event.keyCode == 32) {
        runner.superSalto();

    }
});







function isJumpingEnemy(enem) {
    const enemigoRect = enem.status();
    const statRunner = runner.status();

    // Verificar si el personaje está saltando sobre el enemigo
    if (runner.isJumping &&
        !enemigoColisionado.has(enem) &&
        statRunner.left < enemigoRect.right &&
        statRunner.right > enemigoRect.left &&
        statRunner.bottom < enemigoRect.top
    ) {
        return true;
    }

    return false;

}

const colisionEnemy = (statRunner) => {
    for (const enem of enemigos) {
        const enemigoRect = enem.status();


        localStorage.setItem("score", runner.score);
        if (isJumpingEnemy(enem)) {
            if (!enemigoColisionado.has(enem)) {
                enemigoColisionado.add(enem);
                runner.gainScore();

                score.innerHTML = runner.score;
            }
        } else
            if (
                statRunner.left < enemigoRect.right &&
                statRunner.right > enemigoRect.left &&
                statRunner.top < enemigoRect.bottom &&
                statRunner.bottom > enemigoRect.top
                ) {
                if (!enemigoColisionado.has(enem)) {
                    enemigoColisionado.add(enem);
                    runner.loseLive();
                    // le agrego la clase de golpe
                    runner.smash();
                    lives.innerHTML = runner.lives;

                }
            }
        //pasarlo a funcion
        if (enemigos.length > 10) {
            //que no pase de 6 enemigos
            removeEnemy(enemigos.length / 2);
        }
    }
}
const removeEnemy = (exc = 0 ) => {
    

    if (exc > 0) {
        enemigos.splice(0, enemigos.length - exc);
        let enemigosHTML = document.getElementsByClassName("enemigo");
        for (let i = 0; i < enemigosHTML.length - exc; i++) {
            enemigosHTML[i].remove();
        }
        
    }else{
        //todos los enemigos en el html
        let enemigosHTML = document.getElementsByClassName("enemigo");
        //recorro todos los enemigos en el array
        enemigos.forEach((enemigo, index) => {
            //les quito la clase de enemigo
            enemigo.blow();
            //les agrego la clase de golpe
            
            setTimeout(() => {
                document.getElementById("enemys").innerHTML = enemigo;
            }, 333);

        });

    }


}



const colisionPlus = (statRunner) => {
    for (const pl of plus) {
        const plusRect = pl.status();
        //si el personaje colisiona con el plus
        if (

            statRunner.left < plusRect.right &&
            statRunner.right > plusRect.left &&
            statRunner.top < plusRect.bottom &&
            statRunner.bottom > plusRect.top
        ) {
            if (!plusColisionado.has(pl)) {
                plusColisionado.add(pl);
                //si es una fruta
                if (pl.random == 0) {
                    runner.gainLive();
                    plusSound.play();
                    lives.innerHTML = runner.lives;
                }
                //si es una bomba
                else {
                    //explode all enemies
                    bombSound.play();
                    
                    removeEnemy();
                }
            }
        }
    }
}



function gameLoop() {
    // generarEnemigo();
    const statRunner = runner.status();
   
    colisionEnemy(statRunner);
    colisionPlus(statRunner);
    if (runner.lives == 0) {
        //detengo el juego
        clearInterval(gameLoop);
        //muestro el template de game over
        window.location.href = "gameOver.html"; 
    }
    requestAnimationFrame(gameLoop);

}




function generarEnemigo() {
    //obtengo un numero random entre 1 y 100
    let random = Math.floor(Math.random() * 100) + 1;
    //lo paso a milisegundos
    random = random * 1000;
    //genero un enemigo en un intervalo de tiempo random
    setTimeout(enemigos.push(new Enemigo()), random);
    //startGame();
}

function generarPlus() {

    plus.push(new Plus());
}


function generarScore() {
    runner.gainScore(5);
    score.innerHTML = runner.score;

}

function startGame() {
    //genero un enemigo cada 3 segundos
    setInterval(generarEnemigo, 1500);
    //genero un plus cada 5 segundos
    setInterval(generarPlus, 10000);
    //genero 5 de score cada 10 segundos
    setInterval(generarScore,10000)

}

startGame();

gameLoop();
 