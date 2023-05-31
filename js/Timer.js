let time = 60;
const sonidoAmbiente = new Audio("../assets/sound/back.mp3");
sonidoAmbiente.play();

const timer = () => {
    time--;
    if (time == 0) {
        //redireccionar game over
        sonidoAmbiente.pause();
    }
    //si existe el elemento con id timer
    if(document.getElementById("time")){
        document.getElementById("time").innerHTML = time;

    }
}
//obtengo el timer y le asigno el tiempo

document.getElementById("sound").addEventListener("click", () => {
    if (sonidoAmbiente.paused) {
        //le quito la clase y le agrego otra
        document.getElementById("sound").classList.remove("mute");
        document.getElementById("sound").classList.add("unmute");


        sonidoAmbiente.play();
    } else {
        //le quito la clase y le agrego otra
        document.getElementById("sound").classList.remove("unmute");
        document.getElementById("sound").classList.add("mute");

        sonidoAmbiente.pause();
    }
});


//obtengo el boton para mutear/reproducir el sonido

setInterval(timer, 1000);