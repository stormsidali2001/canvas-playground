class CanvasRenderer{
    constructor({width,height,visible = true,clear = true}){

        const canvas = document.createElement('canvas');
        canvas.style.backgroundColor = 'black';
        this.width = canvas.width = width;
        this.height = canvas.height = height;
        this.ctx = canvas.getContext('2d');
        this.view = canvas;
        this.visible = visible;
        this.clear = clear;
       
    }
    render(container){
         if(this.clear) this.ctx.clearRect(0,0,this.width,this.height);
        const renderRec= (container)=>{
            
            container.children.forEach(child => {
                
                if(!child.visible) return;
                this.ctx.save();
                //drawing the leaf nodes
                if(child.position){
                      this.ctx.translate(Math.round(child.position.x),Math.round(child.position.y));
                }
          
                if(child.text){
                    const {font,fill,align} = child.style;
                 
                    if(font)  this.ctx.font = font;
                    if(fill)  this.ctx.fillStyle = fill;
                    if(align) this.ctx.textAlign = align;
                    this.ctx.fillText(child.text,0,0);
                }
               if(child.texture){
                  
                   const {texture,position:{x,y}} = child;
                   
                   this.ctx.fillStyle = 'white'
                  
                 
                    this.ctx.drawImage(texture.img,0,0,40,40);
                    // this.ctx.fillStyle = 'white'
                    // this.ctx.fillRect(0,0,40,40);
                }
                
                //if it's a container go through  it's children recursively
                if(child.children){
                    renderRec(child)
                }
                this.ctx.restore();
            })
        }

        renderRec(container)
       
        
    }
}
export default CanvasRenderer;