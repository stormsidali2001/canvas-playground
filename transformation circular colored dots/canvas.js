const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const {width,height} = canvas;
ctx = canvas.getContext('2d');


const ringsNum = 28;
const dotsInRing = 4;
const ringsDistance = 15;

function animate(){
    ctx.clearRect(0,0,width,height);
    ctx.save()
    ctx.translate(width/2,height/2);
    for(let ring=1;ring<ringsNum;ring++){
               ctx.fillStyle = `hsl(${ring*25}, 90% , 50%)`;
               ctx.save()
               for(let i=0;i<dotsInRing*ring;i++){
                    //dot num i ring i has i*ringNum dots
                    ctx.rotate((Math.PI*2)/(dotsInRing*ring)) // 
                    ctx.beginPath();
                    ctx.arc(
                         ringsDistance*ring,
                         0,
                         7,
                         0,
                         2*Math.PI,
                         false);
                    ctx.fill();
               }
               ctx.restore()
               //if we wanted we can add code here
               
          }
     ctx.restore()
    requestAnimationFrame(animate);
}
animate();