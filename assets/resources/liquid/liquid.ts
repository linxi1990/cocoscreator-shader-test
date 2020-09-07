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
        type:cc.Camera
    })
    camera = null;

    @property({
        type:cc.Node
    })
    liquid = null;

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
    }

    touchStartCallback(event){
        for(let i = 0; i < 1; i ++){
            let postion = this.node.convertToNodeSpaceAR(event.getLocation());
            let liquid = cc.instantiate(this.liquid);
            liquid.parent = this.node;
            liquid.x = postion.x;
            liquid.y = postion.y;
        }
    }

    update (dt) {
        let texture = new cc.RenderTexture();

        texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = texture;
        this.camera.getComponent(cc.Camera).render();
        let sf = new cc.SpriteFrame(texture);
        this.node.scaleY = -1;

        this.node.getComponent(cc.Sprite).spriteFrame = sf;
    }
}
