class MouseController{
    constructor(container = document.body){
        this.el = container ;
        this.position = {x:0,y:0};
        this.pressed = false;
        this.isDown = false;
        this.released = false;
        document.addEventListener('mousedown',this.down.bind(this))
        document.addEventListener('mouseup',this.up.bind(this));
        document.addEventListener('moousemove',this.move.bind(this));
    
    }
    updateMousePos({clientX,clientY}){
        const parentRect = this.el.getBoundingClientRect();
        //to consider any canvas stretching or scaling that may be done by css
        const xratio = parentRect.width /parentRect.width;
        const yratio = parentRect.height /parentRect.height;
        this.position.x = (clientX - parentRect.left)*xratio;
        this.position.y = (clientY - parentRect.top)*yratio;
    }
    move(e){
        this.updateMousePos(e);
    }
    down(e){
        this.isdown = true;
        this.pressed = true;
        this.updateMousePos(e);
    }
    up(){
        this.isdown = false;
        this.released = true;
    }

    dispose(){
        document.removeEventListener('mousedown',this.down);
        document.removeEventListener('mouseup',this.up);
        document.removeEventListener('mousemove',this.move);
    }
    update(){
        this.pressed = false;
        this.released = false;
    }
 
}