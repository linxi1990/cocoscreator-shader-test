"use strict";
cc._RF.push(module, 'd449c14USdGebbYpsLI7qCw', 'uvacton');
// Shader/uvaction/uvacton.ts

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
        _this._material = null;
        // LIFE-CYCLE CALLBACKS:
        _this._totaltime = 0;
        return _this;
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // let sf = this.getComponent(cc.Sprite).spriteFrame;
        // sf.getTexture()._wrapS = cc.Texture2D.WrapMode.REPEAT;
        // sf.getTexture()._wrapT = cc.Texture2D.WrapMode.REPEAT;
        //setTexParameters(cc.Texture2D.WrapMode.REPEAT, cc.Texture2D.WrapMode.REPEAT)
    };
    NewClass.prototype.update = function (dt) {
        this._totaltime += dt;
        this._material.setProperty('time', this._totaltime);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();