class Sensor{
    constructor(car){
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI/4;
        this.rays = [];
        this.readings = [];
    }
    update(roadBorders){
       this.#castRys();
       this.readings = [];
       for(let i=0;i<this.rays.length;i++){
        this.readings.push( // reading i => reading of ray i
            this.#getReadings(this.rays[i],roadBorders)
        )
       }
    }
    #getReadings(ray,roadBorders){
        const touches = [];
        roadBorders.forEach(border=>{
            const touch = getIntersection(
                ray[0],
                ray[1],
                border[0],
                border[1]
            )
        })
        if(touch){
            touches.push(touch)
        }

        if(touches.length === 0){
            return null;
        }
        const offset = touches.map(e=>e.offset);
        const minOffset = Math.min(...offset)

        return touches.find(t=>t.offset ===minOffset )
    }
    #castRys(){
        this.rays = [];
        for(let i = 0; i < this.rayCount; i++){
            let angle = lerp(
                -this.raySpread/2,
                this.raySpread/2,
                i/(this.rayCount-1)

            ) + this.car.angle;
            const start = {x:this.car.position.x,y:this.car.position.y};
            const end = {
                x:this.car.position.x -Math.sin(angle)*this.rayLength ,
                y:this.car.position.y -Math.cos(angle)*this.rayLength ,
            }
            this.rays.push([start,end]);
          
        }
    }
    draw(ctx){
        
        this.rays.forEach(ray=>{
            let end = ray[1];
            if(this.readings[i]){
                end = this.readings[i]
            }
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow"
            ctx.moveTo(ray[0].x,ray[0].y);
            ctx.lineTo(end.x,end.y);
            ctx.stroke();

            //drawing the rading line
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black"
            ctx.moveTo(ray[1].x,ray[1].y);
            ctx.lineTo(end.x,end.y);
            ctx.stroke();


        })
        
    }
}