import CanvasRenderer from './renderer/canvas-rendrer.js';
import Container from './container.js';
import Text from './views/Text.js';
import Sprite from './Sprite.js';
import Texture from './Texture.js';
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
const texture = new Texture('./assets/spaceship.png');
const sprite = new Sprite(texture)
sprite.position.x = w/2;
sprite.position.y = h/2;
//
scene.add(message)
scene.add(sprite)
rendrer.render(scene);
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
// animate();