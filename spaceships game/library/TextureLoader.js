import Texture from "./Texture.js";

class TextureLoader{
    static loadedTextures = 0;
    static async load(url){
        try{
            const image = await  new Promise((resolve, reject) => {
                const image = new Image();
                image.onload = () => resolve(image);
                image.onerror = () => reject(new Error(`Could not load image at ${url}`));
                image.src = url;
            })
            this.loadedTextures++;
            return new Texture(image);

        }catch(err){
            console.error(err)
        }
     
    }
}
export default TextureLoader;