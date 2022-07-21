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
function animate(ms){
  

    requestAnimationFrame(animate);
}
animate();