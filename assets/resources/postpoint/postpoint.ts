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

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property({
        type:cc.Texture2D
    })
    mixtexture:cc.Texture2D = null;

    _material = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchStartCallback, this, true);
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        this._material.setProperty('mixtexture', this.mixtexture);
    }
    
    touchStartCallback(event){
        // let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // let uvxoffset = (postion.x + this.node.width / 2) / this.node.width;
        // let uvyoffset = (-postion.y + this.node.height / 2) / this.node.height;
        // console.log(uvxoffset);
        // console.log(uvyoffset);

        let postion = event.getLocation();
        let uvxoffset = postion.x / this.node.width;
        let uvyoffset = postion.y / this.node.height;

        this._material.setProperty('pos', new cc.Vec2(uvxoffset, uvyoffset));
    }  

    // update (dt) {}
}
