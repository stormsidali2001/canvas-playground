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
    }
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.strokeStyle = '#ffffff';
        for(let i=0;i<=this.laneCount;i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount // 0 0.33.., 0.66.., 1
            )
            ctx.beginPath();
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20]); // length = 0 , distance between dashes 20px
            }else{
                ctx.setLineDash([0,0]);
            }
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }
       

      
    }
}

function lerp(A,B,t){
    return A + (B-A)*t;
}