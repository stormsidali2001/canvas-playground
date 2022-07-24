class KeyControls{
    constructor(){
        this.keys = {};
        document.addEventListener('keydown',e=>{
            if(['ArrowLeft','ArrowRight','ArrowTop','ArrowDown'].includes(e.key)){
                e.preventDefault();// prevent scrolling when pressing the arrow keys
            }
            this.keys[e.key] = true;
            
        });
        document.addEventListener('keyup',e=>{
            this.keys[e.key] = false;
        })

    }
    get action(){
        return !!this.keys[' '];
    }
    get x(){
        if(this.keys['ArrowLeft'] || this.keys['a']) return -1;
        if (this.keys['ArrowRight'] || this.keys['d']) return 1;
        return 0;
    }
    get y(){
        if(this.keys['ArrowUp'] || this.keys['w']) return -1;
        if (this.keys['ArrowDown'] || this.keys['s']) return 1;
        return 0;
    }
    reset(){
        for(let key in this.keys){
            this.keys[key] = false;
        }
    }
}