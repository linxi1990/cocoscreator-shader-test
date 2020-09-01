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
    @property({
        type:cc.Graphics
    })
    _graphics = null;

    @property({
        type:cc.Camera
    })
    camera = null;

    @property({
        type:cc.Sprite
    })
    sp = null;

    @property({
        type:cc.Sprite
    })
    eraserSp = null;
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';
    _material = null;

    @property({
        type: cc.Texture2D
    })
    _texture = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];

        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);

        this._texture = new cc.RenderTexture();
        // this._texture.setFlipY(true);

        // let gl = cc.game._renderContext;
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        this._texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = this._texture;
        this.camera.getComponent(cc.Camera).render();


    }

    onEnable(){
    }

    touchStartCallback(event){
        // let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // postion.x += this.node.width / 2;
        // postion.y = this.node.height / 2 - postion.y;
        // console.log(postion.x / this.node.width + "////" + postion.y / this.node.height);
        // this._totaltime = 0;
        // this._material.setProperty('time', this._totaltime);

        // this._material.setProperty('postion', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
    }

    touchMoveCallback(event){
        let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        // postion.x += this.node.width / 2;
        // postion.y = this.node.height / 2 - postion.y;

        let x = event.getLocationX() / this.node.width;
        let y = event.getLocationY() / this.node.height;
        


        //this._material.setProperty('position', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
        this._graphics = this.getComponent(cc.Graphics);
        // this._graphics.clear();
        this._graphics.circle(postion.x, postion.y, 20);
        this._graphics.fillColor = cc.Color.RED;
        this._graphics.fill();
        console.log(postion.x + "////" + postion.y);
        this._material = this.eraserSp.getComponent(cc.Sprite).sharedMaterials[0]
        // this._material.setProperty('mixtexture', this.sp.getComponent(cc.Sprite).spriteFrame._texture);
        // let data = this._texture.readPixels();
        // let width = this._texture.width;
        // let height = this._texture.height;
        // let rowBytes = width * 4;
        // for (let row = 0; row < height; row++) {
        //     let srow = height - 1 - row;
        //     let start = srow*width*4;
        //     for (let i = 0; i < rowBytes; i++) {
        //         data[i] = data[start+i];
        //     }
        // }
        this._material.setProperty('mixtexture', this._texture);
    }
    update (dt) {
    }
}
