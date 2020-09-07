"use strict";
cc._RF.push(module, '4a9d0Fh0e9LypVmmMwy9aMC', 'Rain');
// Shader/Weather/Rain/Rain.ts

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
var Rain = /** @class */ (function (_super) {
    __extends(Rain, _super);
    function Rain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this._time = 0;
        _this._material = null;
        return _this;
    }
    Rain.prototype.onEnable = function () {
        this._material = this.sprite.sharedMaterials[0];
    };
    Rain.prototype.update = function (dt) {
        if (this.node.active && this._material) {
            this.setTime(dt);
        }
    };
    Rain.prototype.setTime = function (dt) {
        this._time += dt;
        if (this._time >= 1000) {
            this._time = 0;
        }
        this._material.setProperty('time', this._time);
    };
    __decorate([
        property({
            type: cc.Sprite
        })
    ], Rain.prototype, "sprite", void 0);
    Rain = __decorate([
        ccclass
    ], Rain);
    return Rain;
}(cc.Component));
exports.default = Rain;

cc._RF.pop();