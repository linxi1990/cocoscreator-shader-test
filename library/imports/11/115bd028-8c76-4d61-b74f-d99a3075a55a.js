"use strict";
cc._RF.push(module, '115bdAojHZNYbdP2ZowdaVa', 'PointLight');
// Shader/GamePlay/PointLight/PointLight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("../../../Script/CustomRenderComponent");
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.component = null;
        _this._material = null;
        _this._down = false;
        _this._mouse = cc.v2(0, 0);
        return _this;
    }
    PointLight.prototype.onEnable = function () {
        this._material = this.component.sharedMaterials[0];
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
    };
    PointLight.prototype.mouseDown = function (event) {
        this._down = true;
    };
    PointLight.prototype.mouseMove = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._mouse.x = event.getLocationX() / cc.winSize.width;
        this._mouse.y = event.getLocationY() / cc.winSize.height;
        this.setMouse();
    };
    PointLight.prototype.mouseLeave = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.mouseUp = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.setMouse = function () {
        if (this.node.active && this._material) {
            this._material.setProperty('mouse', cc.v2(this._mouse));
        }
    };
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], PointLight.prototype, "component", void 0);
    PointLight = __decorate([
        ccclass
    ], PointLight);
    return PointLight;
}(cc.Component));
exports.default = PointLight;

cc._RF.pop();