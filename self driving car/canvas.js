const canvas = document.getElementById('canvas')
console.log(canvas)
canvas.width = 200;
canvas.height = window.innerHeight;



ctx = canvas.getContext('2d');
console.log(ctx)
const car = new Car(100,100,30,50);
console.log(car)
function animate(){
    canvas.height = window.innerHeight;
    car.update()
    car.draw(ctx);
    requestAnimationFrame(animate);
}
animate();