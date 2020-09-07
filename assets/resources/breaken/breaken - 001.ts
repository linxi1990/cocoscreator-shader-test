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
    _material = null;

    // @property
    // text: string = 'hello';
    @property({
        type:cc.Texture2D
    })
    mixtexture:cc.Texture2D = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('mixtexture', this.mixtexture);
    }
    
    touchStartCallback(){
        cc.loader.loadRes('breaken/breaken', cc.Material, (err, asset) => {
            if (err) {
                cc.error(err);
            }
            
            this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            this.node.getComponent(cc.Sprite).markForRender(true);
            this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];

            this._material.setProperty('mixtexture', this.mixtexture);
        });
    //     this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
    //     this.node.getComponent(cc.Sprite).setMaterial(0, cc.Material.getInstantiatedMaterial('2d-gray-sprite',
    //         this.node.getComponent(cc.Sprite)))
    //     this._material.setProperty('mixtexture', this.mixtexture);
    // }
    }   

    // update (dt) {}
}
