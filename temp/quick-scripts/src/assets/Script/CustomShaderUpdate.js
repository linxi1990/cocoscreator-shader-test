"use strict";
cc._RF.push(module, 'cd155r9KaVKIovZu3yYoRZZ', 'CustomShaderUpdate');
// Script/CustomShaderUpdate.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("./CustomRenderComponent");
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._component = null;
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    Object.defineProperty(SpriteShaderUpdate.prototype, "component", {
        get: function () {
            return this._component;
        },
        set: function (comp) {
            this._component = comp;
            if (this._component) {
                this._material = this._component.sharedMaterials[0];
            }
        },
        enumerable: false,
        configurable: true
    });
    SpriteShaderUpdate.prototype.onEnable = function () {
        if (this.component) {
            this._material = this.component.sharedMaterials[0];
        }
    };
    SpriteShaderUpdate.prototype.update = function (dt) {
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
    ], SpriteShaderUpdate.prototype, "_component", void 0);
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], SpriteShaderUpdate.prototype, "component", null);
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