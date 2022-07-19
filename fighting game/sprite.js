class Sprite{
    constructor({position,velocity,width,height}){
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
    }
    update(ctx){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw(ctx);
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
        ctx.fill();
    }
}
