"use strict";
cc._RF.push(module, 'a1458zImMZFto37MpRkOkR7', 'postpoint');
// resources/postpoint/postpoint.ts

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
        _this.label = null;
        _this.text = 'hello';
        _this.mixtexture = null;
        _this._material = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchStartCallback, this, true);
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.touchStartCallback = function (event) {
        // let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // let uvxoffset = (postion.x + this.node.width / 2) / this.node.width;
        // let uvyoffset = (-postion.y + this.node.height / 2) / this.node.height;
        // console.log(uvxoffset);
        // console.log(uvyoffset);
        var postion = event.getLocation();
        var uvxoffset = postion.x / this.node.width;
        var uvyoffset = postion.y / this.node.height;
        this._material.setProperty('pos', new cc.Vec2(uvxoffset, uvyoffset));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "mixtexture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();