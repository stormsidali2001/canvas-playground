const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const {width,height} = canvas;
ctx = canvas.getContext('2d');

const player = new Sprite({
   position:{
        x:0,
        y:0
   },
   velocity:{
        x:1,
        y:1
   }
});

function animate(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    player.update(ctx);
    requestAnimationFrame(animate);
}
animate();