"use strict";
cc._RF.push(module, '07e10rvNd1NSbkbRMIuwTsX', 'eraser ');
// Shader/eraser/eraser .ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._graphics = null;
        _this.camera = null;
        _this.sp = null;
        _this.eraserSp = null;
        // @property(cc.Label)
        // label: cc.Label = null;
        // @property
        // text: string = 'hello';
        _this._material = null;
        _this._texture = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);
        this._texture = new cc.RenderTexture();
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        this._texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = this._texture;
        this.camera.getComponent(cc.Camera).render();
    };
    NewClass.prototype.onEnable = function () {
    };
    NewClass.prototype.touchStartCallback = function (event) {
    };
    NewClass.prototype.touchMoveCallback = function (event) {
        var postion = this.node.convertToNodeSpaceAR(event.getLocation());
        var x = event.getLocationX() / this.node.width;
        var y = event.getLocationY() / this.node.height;
        //this._material.setProperty('position', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
        this._graphics = this.getComponent(cc.Graphics);
        // this._graphics.clear();
        this._graphics.circle(postion.x, postion.y, 20);
        // this._graphics.moveTo(postion.x, postion.y);
        this._graphics.fillColor = cc.Color.RED;
        this._graphics.fill();
        // console.log(postion.x + "////" + postion.y);
        this._material = this.eraserSp.getComponent(cc.Sprite).getMaterial(0);
        this._material.setProperty('mixtexture', this._texture);
        this._material.setProperty('isOpen', 1.0);
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property({
            type: cc.Graphics
        })
    ], NewClass.prototype, "_graphics", void 0);
    __decorate([
        property({
            type: cc.Camera
        })
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], NewClass.prototype, "sp", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], NewClass.prototype, "eraserSp", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "_texture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();