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
    _material = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    _totaltime = 0;

    onEnable () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('inTexture', );
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);
    }

    touchStartCallback(event){
        let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        postion.x += this.node.width / 2;
        postion.y = this.node.height / 2 - postion.y;
        console.log(postion.x / this.node.width + "////" + postion.y / this.node.height);
        this._totaltime = 0;
        this._material.setProperty('time', this._totaltime);

        this._material.setProperty('postion', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
    }

    touchMoveCallback(event){
        let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        postion.x += this.node.width / 2;
        postion.y = this.node.height / 2 - postion.y;
        console.log(postion.x / this.node.width + "////" + postion.y / this.node.height);
        this._totaltime = 0;
        this._material.setProperty('time', this._totaltime);

        this._material.setProperty('postion', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
    }

    update (dt) {
        this._totaltime += 0.01;
        this._totaltime = this._totaltime >= 1000 ? 0 : this._totaltime;
        // this._totaltime += dt;
        // if(this._totaltime > 1){
        //     this._totaltime -= 1;
        // }
        this._material.setProperty('time', this._totaltime);
    }
}
