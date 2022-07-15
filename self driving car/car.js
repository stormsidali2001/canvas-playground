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
           
        })
    }

}
class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Car{
    constructor(x,y,width,height){
        this.position = new Vector(x,y)
        this.width = width;
        this.height = height;
        this.controller = new CarController();
        this.v = new Vector(0,0);
        this.a = new Vector(0.2,0.2);
    }
    update(){
        if(this.controller.left){
           this.position.x -= 2;
          
        }
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.save()
        ctx.translate(this.position.x,this.position.x)
        ctx.rect(
            - this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore()
    }
}

