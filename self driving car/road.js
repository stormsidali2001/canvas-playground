class Road{
    constructor(x,width,laneCount = 3){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;
        this.left = x - width/2;
        this.right = x + width/2;
        const bzaf = 1000000;
        this.top = -bzaf;
        this.bottom = bzaf;

        const topLeft = {x:this.left,y:this.top};
        const topRight = {x:this.right,y:this.top};
        const bottomLeft = {x:this.left,y:this.bottom};
        const bottomRight = {x:this.right,y:this.bottom};
        this.borders = [
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.strokeStyle = '#ffffff';
        for(let i=1;i<this.laneCount;i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount // 0 0.33.., 0.66.., 1
            )
            ctx.beginPath();
            ctx.setLineDash([20,20]); // length = 0 , distance between dashes 20px
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();

         
        }

           this.borders.forEach(border=>{
                ctx.beginPath();
                ctx.setLineDash([0,0]);
                ctx.moveTo(border[0].x,border[0].y);
                ctx.lineTo(border[1].x,border[1].y);
                ctx.stroke();
            })
       

      
    }
    getLaneCenter(laneIndex){
        // it's this.left + this.width/this.laneCount/2 +laneIndex*(this.width/this.laneCount)
        // i just factorised it below.
        const adjustedIndex = Math.min(laneIndex,this.laneCount-1);
        return this.left +(1+2*adjustedIndex)*(this.width/this.laneCount)/2;

    }
}

