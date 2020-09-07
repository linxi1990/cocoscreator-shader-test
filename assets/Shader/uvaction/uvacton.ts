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

    _material = null;
    // LIFE-CYCLE CALLBACKS:
    _totaltime = 0;

    // onLoad () {}

    start () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // let sf = this.getComponent(cc.Sprite).spriteFrame;
        // sf.getTexture()._wrapS = cc.Texture2D.WrapMode.REPEAT;
        // sf.getTexture()._wrapT = cc.Texture2D.WrapMode.REPEAT;
        //setTexParameters(cc.Texture2D.WrapMode.REPEAT, cc.Texture2D.WrapMode.REPEAT)
    }

    update (dt) {
        this._totaltime += dt;
        this._material.setProperty('time', this._totaltime);
    }
}
