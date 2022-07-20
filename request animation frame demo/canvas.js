const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const {width,height} = canvas;
ctx = canvas.getContext('2d');



let last = 0;
let dt = 0;
const speed = 64;
let p1 = 0;
let p2 = 0;
ctx.font = 'bold 20px monospace'
function animate(ms){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,width,height);
    const t = ms/1000; // ms gives the current time && dt for delta time
    dt = t - last;
    last = t;
    ctx.strokeStyle = 'white';
    ctx.strokeText(`Frame Length ${(dt*1000).toFixed(2)} ms`,70,50);
    ctx.strokeText(`Total Time : ${(t).toFixed(2)} s`,70,90);
     p1 +=!isNaN(dt)? speed*dt:0;
    console.log(p1,speed*dt)
    p2 += speed*(1/60);

    if(p1 >width) p1 -= width+50;
    if(p2 >width) p2 -= width+50;
    ctx.fillStyle = '#f00';

    ctx.fillRect(p1,500,50,50) // pauses when you leave the tab
    ctx.fillRect(p2,190,50,50) //faster


    requestAnimationFrame(animate);
}
animate();