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
    equals(vector){
        return this.x === vector.x && this.y === vector.y;
    }
    add(object){
        if(typeof object === 'number'){
            this.x += object;
            this.y += object;
        }
        else{
            this.x += object.x;
            this.y += object.y;
        }
        return this;
       
    }
    subtract(object){
        if(typeof object === 'number'){
            this.x -= object;
            this.y -= object;
        }
        else{
            this.x -= object.x;
            this.y -= object.y;
        }
        return this;
    }
    multiply(object){
        if(typeof object === 'number'){
            this.x *= object;
            this.y *= object;
        }
        else{
            this.x *= object.x;
            this.y *= object.y;
        }
        return this;
    }
    lowerThan(vector){
        return this.x < vector.x && this.y < vector.y;
    }
    greaterThan(vector){
        return this.x > vector.x && this.y > vector.y;
    }
    distance(vector){
        return Math.sqrt(Math.pow(this.position.x - vector.x,2) + Math.pow(this.position.y - vector.y,2));
    }
    length(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
    copy(){
        return new Vector(this.x,this.y);
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
        this.frictionFactor = 0.05; 
        this.angle = 0;
        this.omega = 0.03;
        this.maxSpeed = new Vector(3,3);
    }
    update(){
         /*
                THE UNIT CERCLE is rotated 90 degrees from the x-axis
                0
                |
    pi/2  ------|----------- 3pi/2
                |
                |
                pi
           */
       
        const back = this.v.length >0 ?-1:1;
        if(this.controller.forward){
            this.v.add(this.a);
        }
        if(this.controller.backward){
            this.v.subtract(this.a);
        }
        if(this.controller.left){
            this.angle += this.omega*back;
         }
         if(this.controller.right){
             this.angle -= this.omega*back;
         }
        
       
       
         this.v.multiply(1-this.frictionFactor);
         this.position.x -= Math.sin(this.angle)*this.v.x;
         this.position.y -= Math.cos(this.angle)*this.v.y;
        
       

    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.save()
        ctx.translate(this.position.x,this.position.y)
        ctx.rotate(-this.angle);
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

