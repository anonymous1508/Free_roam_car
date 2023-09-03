class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addkeyboardlisteners();
    }
    #addkeyboardlisteners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                this.left=true;
                case "ArrowRight":
                this.right=true;
                case "ArrowUp":
                this.forward=true;
                case "ArrowDown":
                this.reverse=true;
                break;

            }
            console.log .table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                this.left=false;
                case "ArrowRight":
                this.right=false;
                case "ArrowUp":
                this.forward=false;
                case "ArrowDown":
                this.reverse=false;
                break;

            }
        }
    }
}