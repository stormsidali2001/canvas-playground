const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = 200;
canvas.height = window.innerHeight;
const {width,height} = canvas;



ctx = canvas.getContext('2d');
const road = new Road(width/2,width*0.95,3);
const car = new Car(100,100,30,50);
console.log(road)
function animate(){
    canvas.height = window.innerHeight;
    car.update()
    road.draw(ctx)
    car.draw(ctx);
    requestAnimationFrame(animate);
}
animate();