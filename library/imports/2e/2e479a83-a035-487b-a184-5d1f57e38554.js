"use strict";
cc._RF.push(module, '2e479qDoDVIe6GEXR9X44VU', 'liquid');
// resources/liquid/liquid.ts

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
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.camera = null;
        _this.liquid = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
    };
    NewClass.prototype.touchStartCallback = function (event) {
        for (var i = 0; i < 1; i++) {
            var postion = this.node.convertToNodeSpaceAR(event.getLocation());
            var liquid = cc.instantiate(this.liquid);
            liquid.parent = this.node;
            liquid.x = postion.x;
            liquid.y = postion.y;
        }
    };
    NewClass.prototype.update = function (dt) {
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = texture;
        this.camera.getComponent(cc.Camera).render();
        var sf = new cc.SpriteFrame(texture);
        this.node.scaleY = -1;
        this.node.getComponent(cc.Sprite).spriteFrame = sf;
    };
    __decorate([
        property({
            type: cc.Camera
        })
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], NewClass.prototype, "liquid", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();