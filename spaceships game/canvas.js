import CanvasRenderer from './library/renderer/canvas-rendrer.js';
import Container from './library/container.js';
import Text from './library/views/Text.js';
import Sprite from './library/Sprite.js';
import TextureLoader from './library/TextureLoader.js';
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
message.update= function(dt,t){
  this.position.x += 1;
}

message.position.x = w/2;
message.position.y = h/2;
const texture = await TextureLoader.load('./assets/spaceship.png');
console.log(texture)
const spaceship = new Sprite(texture)
spaceship.position.x = w/2;
spaceship.position.y = h/2;

spaceship.update = function(dt,t){
    this.position.x += 1;
}
//
 scene.add(message)
scene.add(spaceship)

console.log(scene)

//
let last = 0;
function animate(ms){
    const t  = ms;
    const dt = t - last;
    last = t;

    scene.update(dt,t);
    rendrer.render(scene);
    
    requestAnimationFrame(animate);
}
 animate();