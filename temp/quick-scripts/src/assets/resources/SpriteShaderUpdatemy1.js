"use strict";
cc._RF.push(module, '960b6yUXu1G1pmet2nTDz1e', 'SpriteShaderUpdatemy1');
// resources/SpriteShaderUpdatemy1.ts

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
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        // @property
        // _sprite = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property({
        //     type: cc.Sprite
        // })
        // get sprite() {
        //     return this._sprite;
        // };
        // set sprite (spr) {
        //     this._sprite = spr;
        //     if (this._sprite) {
        //         this._material = this.getMaterial(0);
        //     }
        // }
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    SpriteShaderUpdate.prototype.onEnable = function () {
        this._material = this.getComponent('myrender').getMaterial(0);
    };
    SpriteShaderUpdate.prototype.update = function (dt) {
        // if (this.sprite) {
        //     this._material = this.sprite.sharedMaterials[0];
        // }
        if (this._material) {
            this.setTime(dt);
        }
    };
    SpriteShaderUpdate.prototype.setTime = function (dt) {
        this._time += this.step;
        this._time = this._time >= this.limit ? 0 : this._time;
        this._material.setProperty('time', this._time);
    };
    SpriteShaderUpdate.prototype.onDisable = function () {
        this._material = null;
    };
    __decorate([
        property
    ], SpriteShaderUpdate.prototype, "limit", void 0);
    __decorate([
        property
    ], SpriteShaderUpdate.prototype, "step", void 0);
    SpriteShaderUpdate = __decorate([
        ccclass
    ], SpriteShaderUpdate);
    return SpriteShaderUpdate;
}(cc.Component));
exports.default = SpriteShaderUpdate;

cc._RF.pop();