class Text{
    constructor(text,style){
        this.text = text;
        this.style = style;
        this.position = {x:0,y:0};
        this.visible = true;
    }

    update(dt,t){
        this.position.x += 1;
    }
}
