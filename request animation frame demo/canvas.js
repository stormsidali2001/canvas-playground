const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const {width,height} = canvas;
ctx = canvas.getContext('2d');




function animate(){
    ctx.clearRect(0,0,width,height);
   
     ctx.restore()
    requestAnimationFrame(animate);
}
animate();