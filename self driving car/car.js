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
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    subtract(vector){
        this.x -= vector.x;
        this.y -= vector.y;
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
        this.friction = new Vector(0.05,0.05);
        this.maxSpeed = new Vector(3,3);
    }
    update(){
        if(this.controller.left){
           this.v.x -= this.a.x;
          
        }
        if(this.controller.right){
            this.v.x += this.a.x;
        }
        if(this.controller.forward){
            this.v.y -= this.a.y;
        }
        if(this.controller.backward){
            this.v.y += this.a.y;
        }
        if(this.v.greaterThan(this.maxSpeed)){
            this.v = this.maxSpeed.copy();
        }
        if(this.v.lowerThan(-this.maxSpeed.multiply(0.5))){
            this.v = -this.maxSpeed.multiply(0.5).copy();
        }
        
        this.position.add(this.v);

    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.save()
        ctx.translate(this.position.x,this.position.y)
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

