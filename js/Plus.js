class Plus {
    constructor() {
        //super();
        //plos +life , +destroy all enemies
        this.plus = document.createElement("div");
        //random 0/1
        this.random = Math.floor(Math.random() * 2);
        if(this.random == 0) {
            this.plus.classList.add("fruit");
            //ad id
            this.plus.id = "fruit";
        } else {
            this.plus.classList.add("bomb");
            //ad id
            this.plus.id = "bomb";
        }
        document.getElementById("game-container").appendChild(this.plus);
    
    
    }
    status(){
        return this.plus.getBoundingClientRect();
    }
  
}