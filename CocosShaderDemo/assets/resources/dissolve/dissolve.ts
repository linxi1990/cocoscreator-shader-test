// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property({
        type:cc.Texture2D
    })
    nosisetexture:cc.Texture2D = null;
    
    @property({
        type:cc.Texture2D
    })
    u_lut:cc.Texture2D = null;

    _material = null;
    _start = false;
    _time = 0;
    
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
    }

    //动态赋值材质
    touchStartCallback(){
        cc.loader.loadRes('dissolve/dissolve', cc.Material, (err, asset) => {
            if (err) {
                cc.error(err);
            }
            
            this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            this.node.getComponent(cc.Sprite).markForRender(true);
            this._material = this.node.getComponent(cc.Sprite).getMaterial(0);

            this._material.setProperty('nosisetexture', this.nosisetexture);
            this._material.setProperty('u_lut', this.u_lut);
            this._start = true;
        });
    }   

    update (dt) {
        if(this._start){
            this._time += 0.1;
            this._time = this._time >= 1000 ? 0 : this._time;
            this._material = this.getComponent(cc.Sprite).getMaterial(0);
            
            this._material.setProperty('time', this._time);
        }
    }
}
