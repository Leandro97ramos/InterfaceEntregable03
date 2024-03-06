
/*game */
const templHomeMenu = () => {
    return `
    <div class="box active">
        <div id="homePanel">
            <div id="homePanelTitle">Koaja 2.0</div>
            <div id="homePanelPlay">Jugar</div>
            <div id="homePanelHowTo">Como jugar</div>
        </div>
    </div>
    `;
}

const templModal = () => {
    return `
    <div class="modal">
    <div id="homePanelHowTo" class="keyTitle">X</div>
    <div class="cont">
        <div class="key">
            <div id="fruit" class="keyTitle"></div>
            <div class="">+1Up</div>
        </div>
        <div class="key">
            <div id="bomb" class="keyTitle"></div>
            <div class="">Destroy</div>
        </div>
    </div>
    <div class="cont">
        <div class="key">
            <div class="keyTitle">↑</div>
            <div class="keyDescription">Saltar</div>
        </div>
        <div class="key">
            <div class="keyTitle">Espacio</div>
            <div class="keyDescription">Moverse hacia la izquierda</div>
        </div>

    </div>

    <div class="cont">
        <div class="key">

            <div id="keyTurtle"></div>
            <div class="algCenter">-1Up</div>
        </div>
    
        <div class="key">
            <div class="keyTitle">10s</div>
            <div class="algCenter">+5 score</div>
        </div>
    </div>
</div>
`;
}

const sonidoAmbiente = new Audio("assets/sounds/sonidoAmbiente.mp3");

document.getElementById("home").innerHTML = templHomeMenu();



const eventModal = () => {
    if (document.getElementById("homePanelPlay") != null) {
        document.getElementById("homePanelPlay").addEventListener("click", () => {
            window.location.href = "game.html";
        });

    }
    document.getElementById("homePanelHowTo").addEventListener("click", () => {
        let menu = document.getElementById("home");
        if (document.querySelector(".box") != null) {
            menu.innerHTML = '';
            menu.innerHTML = templModal();
            // Asignar el evento de cierre del modal al botón correspondiente
        } else {
            menu.innerHTML = '';
            menu.innerHTML = templHomeMenu();
        }

        eventModal();
    });

}
eventModal();
