class Enemigo  {


    constructor() {
        
        this.enemigo = document.createElement("div");
        
        this.enemigo.classList.add("enemigo");
        //add id enemy
        this.enemigo.id = "enemy";

        document.getElementById("enemys").appendChild(this.enemigo);


    }

    blow() {
        //elimino la clase enemigo y le agrego la clase blow
        this.enemigo.classList.remove("enemigo");
        this.enemigo.classList.add("blow");
        
       
    }

    status() {
      //  
       return this.enemigo.getBoundingClientRect();
    }
}