const domContainer = document.getElementById('canvas')
const w = window.innerWidth;
const h = window.innerHeight;
const rendrer = new CanvasRenderer({
  width:w,
  height:h,
});
domContainer.appendChild(rendrer.view);
const scene = new Container();
const message = new Text('Hello World',{
  fill:"white",
  font:"bold 20px monospace",
  align:"center",
});
message.position.x = w/2;
message.position.y = h/2;
let last = 0;
scene.add(message)
function animate(ms){
    const t  = ms;
    dt = t - last;
    last = t;
    scene.update(dt,t);
    rendrer.render(scene);
    
    requestAnimationFrame(animate);
}
animate();