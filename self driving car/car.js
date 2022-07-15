class CarController{
    constructor(){
        this.left = false;
        this.right = false;
        this.backward = false;
        this.forward = false;
        this._init();
    }
    _init(){
        document.addEventListener('keydown',e=>{
              console.log(e.key)
            
            switch(e.key){
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.backward = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
            }
            console.table(this)

        })
        document.addEventListener('keyup',e=>{
            switch(e.key){
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.backward = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
            }
            console.table(this)
        })
    }

}
class Vector{
    constructor(x1,x2){
        this.x1 = x1;
        this.x2 = x2;
    }
}
class Car{
    constructor(x,y,width,height){
        this.position = new Vector(x,y)
        this.width = width;
        this.height = height;
        this.controller = new CarController();
        this.v = new Vector(0,5);
    }
    update(){
        if(this.controller.left){
           
        }
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.rect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}

