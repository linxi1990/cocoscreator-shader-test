"use strict";
cc._RF.push(module, 'dc11f5O3G9FH6SBQtpPwlIS', 'breaken - 001');
// resources/breaken/breaken - 001.ts

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
        // @property(cc.Label)
        // label: cc.Label = null;
        _this._material = null;
        // @property
        // text: string = 'hello';
        _this.mixtexture = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.touchStartCallback = function () {
        var _this = this;
        cc.loader.loadRes('breaken/breaken', cc.Material, function (err, asset) {
            if (err) {
                cc.error(err);
            }
            _this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            _this.node.getComponent(cc.Sprite).markForRender(true);
            _this._material = _this.node.getComponent(cc.Sprite).sharedMaterials[0];
            _this._material.setProperty('mixtexture', _this.mixtexture);
        });
        //     this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        //     this.node.getComponent(cc.Sprite).setMaterial(0, cc.Material.getInstantiatedMaterial('2d-gray-sprite',
        //         this.node.getComponent(cc.Sprite)))
        //     this._material.setProperty('mixtexture', this.mixtexture);
        // }
    };
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