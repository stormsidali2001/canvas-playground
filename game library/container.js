class Container{
    constructor(){
        this.children = [];
    }
    add(child){
        this.children.push(child);
        return child;
    }
    remove(child){
        this.children = this.children.filter(c=>c!==child);
        return child;
    }
    update(dt,t){
        this.children.forEach(c=>c.update && c.update(dt,t));
    }
}