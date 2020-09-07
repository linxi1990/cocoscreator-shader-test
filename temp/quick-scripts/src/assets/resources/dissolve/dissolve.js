"use strict";
cc._RF.push(module, '848b839dihL2ZHlq6Nus6W1', 'dissolve');
// resources/dissolve/dissolve.ts

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
        _this.nosisetexture = null;
        _this.u_lut = null;
        _this._material = null;
        _this._start = false;
        _this._time = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
    };
    //动态赋值材质
    NewClass.prototype.touchStartCallback = function () {
        var _this = this;
        cc.loader.loadRes('dissolve/dissolve', cc.Material, function (err, asset) {
            if (err) {
                cc.error(err);
            }
            _this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            _this.node.getComponent(cc.Sprite).markForRender(true);
            _this._material = _this.node.getComponent(cc.Sprite).getMaterial(0);
            _this._material.setProperty('nosisetexture', _this.nosisetexture);
            _this._material.setProperty('u_lut', _this.u_lut);
            _this._start = true;
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this._start) {
            this._time += 0.1;
            this._time = this._time >= 1000 ? 0 : this._time;
            this._material = this.getComponent(cc.Sprite).getMaterial(0);
            this._material.setProperty('time', this._time);
        }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "nosisetexture", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "u_lut", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();