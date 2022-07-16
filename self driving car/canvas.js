const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = 200;
canvas.height = window.innerHeight;
const {width,height} = canvas;



ctx = canvas.getContext('2d');
const road = new Road(width/2,width*0.95,3);
const car = new Car(road.getLaneCenter(3),200,30,50);
console.log(road)
function animate(){
    canvas.height = window.innerHeight;
    car.update(road.borders)
    ctx.save()
    ctx.translate(0,-car.position.y+height*0.7)
    road.draw(ctx)
    car.draw(ctx);
    ctx.restore()
    requestAnimationFrame(animate);
}
animate();