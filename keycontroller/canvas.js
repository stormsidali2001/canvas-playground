const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const {width,height} = canvas;
ctx = canvas.getContext('2d');

const controls = new KeyControls();
let x =0;
let y = 0;
let color = 0;
function animate(ms){
    x+= controls.x;
    y+= controls.y;
  if(!controls.action){
        color+= 10;
        if(color >360){
            color -= 360;
        }
  }
  ctx.fillStyle = `hsl(${color}, 50% , 50%)`;
  ctx.fillRect(x,y,50,50);
 
    requestAnimationFrame(animate);
}
animate();