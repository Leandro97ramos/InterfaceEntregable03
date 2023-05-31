class Runner {
    constructor() {

        this.lives = 3;
        this.score = 0;
        this.isJumping = false;

        this.personaje = document.getElementById("character");
    }

    loseLive() {
        this.lives--;
    }

    smash() {
        this.clean();
        colisionSound.play();
        this.personaje.classList.add("smash");
        
        this.personaje.addEventListener("animationend", () => {
            this.correr();
        });
        
    }


    gainLive() {
        this.lives++;
    }

    gainScore(score = 1) {
        this.score += score;
    }

    getScore() {
        return this.score;
    }
    

    getLives() {
        return this.lives;
    }
    
    status() {
       return this.personaje.getBoundingClientRect();
    }

    correr() {
        this.clean();
        this.personaje.classList.add("correr"); 
    }

    saltar() {
        if(this.personaje.classList.contains("correr")) { 
            this.clean(); 
            jumpSound.play();

            this.personaje.classList.add("saltar");
            this.isJumping = true;



            this.personaje.addEventListener("animationend", () => {    
                            
                this.caer();
                this.isJumping = false;
            });
        }
    }
    superSalto(){
        if(this.personaje.classList.contains("correr")) { 
            this.clean(); 
            jumpSound.play();
            this.isJumping = true;

            this.personaje.classList.add("superSalto");
        
            this.personaje.addEventListener("animationend", () => {
                this.caer();
                this.isJumping = false;

            });

        }


    }
    caer() {
        this.clean();
        this.personaje.classList.add("caer");

        this.personaje.addEventListener("animationend", () => {
            this.correr();
        }); 
    }

    /**
     * 
     */
    clean() {
        this.personaje.classList.remove("correr"); 
        this.personaje.classList.remove("saltar");
        this.personaje.classList.remove("superSalto");
        this.personaje.classList.remove("caer"); 
        this.personaje.classList.remove("smash"); 
        this.personaje.removeEventListener("animationend", () => {}); 
    }
}