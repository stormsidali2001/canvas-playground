const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const {width,height} = canvas;
ctx = canvas.getContext('2d');

const player = new Sprite({
    x:0,
    y:0
});